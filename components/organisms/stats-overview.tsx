import { StatsCard } from "../molecules/stats-card";
import { ArrowDownIcon, ArrowUpIcon, DollarSign, Wallet } from "lucide-react";
import type { MonthlyStats } from "@/lib/types/types.ts";

interface StatsOverviewProps {
  stats: MonthlyStats;
}

export function StatsOverview({ stats }: StatsOverviewProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Saldo do Mês"
        value={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(stats.balance)}
        description="Diferença entre receitas e despesas"
        icon={Wallet}
      />
      <StatsCard
        title="Total de Receitas"
        value={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(stats.totalIncome)}
        description={`${stats.incomeCount} ${
          stats.incomeCount === 1 ? "transação" : "transações"
        }`}
        icon={ArrowUpIcon}
      />
      <StatsCard
        title="Total de Despesas"
        value={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(stats.totalExpense)}
        description={`${stats.expenseCount} ${
          stats.expenseCount === 1 ? "transação" : "transações"
        }`}
        icon={ArrowDownIcon}
      />
      <StatsCard
        title="Média por Dia"
        value={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(
          stats.expenseCount > 0 ? stats.totalExpense / new Date().getDate() : 0
        )}
        description="Gasto médio diário"
        icon={DollarSign}
      />
    </div>
  );
}
