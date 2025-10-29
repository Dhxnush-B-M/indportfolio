import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PortfolioData } from "@/types/portfolio";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "./useAuth";

interface Portfolio {
  id: string;
  name: string;
  slug: string | null;
  template: string;
  data: PortfolioData;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export const usePortfolio = () => {
  const { user } = useAuth();
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchPortfolios = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('portfolios')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setPortfolios((data || []) as unknown as Portfolio[]);
    } catch (error: any) {
      toast({
        title: "Error loading portfolios",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, [user]);

  const createPortfolio = async (name: string, portfolioData: PortfolioData) => {
    if (!user) return null;

    try {
      setSaving(true);
      const { data, error } = await supabase
        .from('portfolios')
        .insert({
          user_id: user.id,
          name,
          template: portfolioData.template,
          data: portfolioData,
          is_published: false,
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Portfolio created",
        description: `"${name}" has been created successfully`,
      });

      await fetchPortfolios();
      return data;
    } catch (error: any) {
      toast({
        title: "Error creating portfolio",
        description: error.message,
        variant: "destructive",
      });
      return null;
    } finally {
      setSaving(false);
    }
  };

  const updatePortfolio = async (id: string, updates: Partial<Portfolio>, silent = false) => {
    try {
      if (!silent) setSaving(true);
      
      const { error } = await supabase
        .from('portfolios')
        .update(updates)
        .eq('id', id);

      if (error) throw error;

      if (!silent) {
        toast({
          title: "Saved",
          description: "Your portfolio has been saved",
        });
      }

      await fetchPortfolios();
    } catch (error: any) {
      if (!silent) {
        toast({
          title: "Error saving portfolio",
          description: error.message,
          variant: "destructive",
        });
      }
    } finally {
      if (!silent) setSaving(false);
    }
  };

  const deletePortfolio = async (id: string) => {
    try {
      const { error } = await supabase
        .from('portfolios')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Portfolio deleted",
        description: "Your portfolio has been deleted",
      });

      await fetchPortfolios();
    } catch (error: any) {
      toast({
        title: "Error deleting portfolio",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const publishPortfolio = async (id: string, published: boolean) => {
    try {
      const { error } = await supabase
        .from('portfolios')
        .update({ is_published: published })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: published ? "Published" : "Unpublished",
        description: published 
          ? "Your portfolio is now live" 
          : "Your portfolio has been unpublished",
      });

      await fetchPortfolios();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return {
    portfolios,
    loading,
    saving,
    createPortfolio,
    updatePortfolio,
    deletePortfolio,
    publishPortfolio,
    fetchPortfolios,
  };
};
