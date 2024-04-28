"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ProModal = () => {
  const proModal = useProModal();
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) {
    return null;
  }
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-center">Upgrade to Pro</DialogTitle>
          <DialogDescription className="space-y-2 text-center">
            Create
            <span className="mx-1 font-medium text-sky-500">Custom AI</span>
            Companions!
          </DialogDescription>
        </DialogHeader>
        <hr />
        <div className="flex justify-between">
          <p className="text-2xl font-medium">
            $9<span className="text-sm font-normal">.99 / mo</span>
          </p>
          <Button onClick={onSubscribe} isLoading={loading}>
            Subscribe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
