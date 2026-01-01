"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { TransactionFormDialog } from "@/components/organisms/transaction-form-dialog";

interface TransactionButtonProps {
  userId: string;
}

export function TransactionButton({ userId }: TransactionButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} size="default" className="gap-2">
        <Plus className="h-4 w-4" />
        Nova Transação
      </Button>
      <TransactionFormDialog
        open={open}
        onOpenChange={setOpen}
        userId={userId}
      />
    </>
  );
}
