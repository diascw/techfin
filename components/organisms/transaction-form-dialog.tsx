"use client";

import type React from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupText,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import type { Category, TransactionType, Database } from "@/lib/types/types.ts";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DollarSign, Calendar, FileText } from "lucide-react";

interface TransactionFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string;
}

export function TransactionFormDialog({
  open,
  onOpenChange,
  userId,
}: TransactionFormDialogProps) {
  const [type, setType] = useState<TransactionType>("expense");
  const [amount, setAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadCategories = async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("categories")
        .select("*")
        .eq("type", type)
        .order("name");
      setCategories(data || []);
      setCategoryId("");
    };
    loadCategories();
  }, [type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const parsedAmount = Number.parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Por favor, insira um valor válido maior que zero.");
      setIsLoading(false);
      return;
    }

    const supabase = createClient();

    const insertData: Database["public"]["Tables"]["transactions"]["Insert"] = {
      user_id: userId,
      type,
      amount: parsedAmount,
      category_id: categoryId || null,
      description: description || null,
      date,
    };

    const { error } = await supabase
      .from("transactions")
      .insert(insertData as any);

    setIsLoading(false);

    if (error) {
      console.error("Erro ao inserir transação:", error);
      alert(`Erro ao salvar transação: ${error.message}`);
      return;
    }

    setAmount("");
    setCategoryId("");
    setDescription("");
    setDate(new Date().toISOString().split("T")[0]);
    onOpenChange(false);
    router.refresh();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Nova Transação</DialogTitle>
          <DialogDescription>Adicione uma receita ou despesa</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="type">Tipo de Transação</FieldLabel>
              <Select
                value={type}
                onValueChange={(value) => setType(value as TransactionType)}
              >
                <SelectTrigger id="type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income"> Receita</SelectItem>
                  <SelectItem value="expense"> Despesa</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="amount">Valor</FieldLabel>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <DollarSign className="size-4" />
                </InputGroupAddon>
                <InputGroupInput
                  id="amount"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </InputGroup>
            </Field>

            <Field>
              <FieldLabel htmlFor="category">Categoria</FieldLabel>
              <Select value={categoryId} onValueChange={setCategoryId}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.icon} {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldDescription>
                Escolha a categoria que melhor representa essa transação
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="date">Data</FieldLabel>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <Calendar className="size-4" />
                </InputGroupAddon>
                <InputGroupInput
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </InputGroup>
            </Field>

            <Field>
              <FieldLabel htmlFor="description">Descrição</FieldLabel>
              <InputGroup>
                <InputGroupAddon align="block-start">
                  <FileText className="size-4" />
                  <InputGroupText>Observações</InputGroupText>
                </InputGroupAddon>
                <Textarea
                  id="description"
                  placeholder="Adicione detalhes sobre essa transação (opcional)"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="resize-none border-0 shadow-none focus-visible:ring-0"
                />
              </InputGroup>
            </Field>

            <div className="flex gap-2 justify-end pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isLoading}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isLoading} className="min-w-24">
                {isLoading ? <Spinner className="mr-2" /> : null}
                {isLoading ? "Salvando..." : "Salvar"}
              </Button>
            </div>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}
