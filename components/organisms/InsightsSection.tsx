import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertCircle,
  Lightbulb,
  TrendingDown,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import type { CategoryStats, MonthlyStats } from "@/lib/types/types.ts";
import { InsightCard } from "@/components/molecules/InsightCard";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";

interface InsightsSectionProps {
  stats: MonthlyStats;
  expensesByCategory: CategoryStats[];
}

interface Insight {
  title: string;
  description: string;
  type: "warning" | "tip" | "success";
  icon: React.ElementType;
  resources?: {
    title: string;
    url: string;
    type: "video" | "article";
  }[];
}

export function InsightsSection({
  stats,
  expensesByCategory,
}: InsightsSectionProps) {
  const insights: Insight[] = [];

  if (stats.balance < 0) {
    insights.push({
      title: "Atenção: Saldo Negativo",
      description: `Suas despesas superaram suas receitas em ${new Intl.NumberFormat(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        }
      ).format(
        Math.abs(stats.balance)
      )} este mês. Revise seus gastos e identifique onde pode economizar.`,
      type: "warning",
      icon: AlertCircle,
      resources: [
        {
          title: "Como sair das dívidas: 5 estratégias eficazes",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          type: "video",
        },
        {
          title: "Planejamento financeiro para iniciantes",
          url: "https://example.com/planejamento-financeiro",
          type: "article",
        },
      ],
    });
  }

  if (expensesByCategory.length > 0) {
    const topCategory = expensesByCategory[0];
    if (topCategory.percentage > 30) {
      insights.push({
        title: `Alto gasto em ${topCategory.category.name}`,
        description: `${topCategory.category.icon} ${
          topCategory.category.name
        } representa ${topCategory.percentage.toFixed(
          1
        )}% dos seus gastos. Considere revisar essa categoria para encontrar oportunidades de economia.`,
        type: "warning",
        icon: TrendingDown,
        resources: [
          {
            title: "Dicas para economizar em alimentação",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            type: "video",
          },
          {
            title: "Como reduzir gastos desnecessários",
            url: "https://example.com/reduzir-gastos",
            type: "article",
          },
        ],
      });
    }
  }

  if (stats.totalExpense > 0) {
    const savingsPotential = stats.totalExpense * 0.1;
    insights.push({
      title: "Oportunidade de Economia",
      description: `Reduzindo 10% das suas despesas, você economizaria ${new Intl.NumberFormat(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        }
      ).format(savingsPotential)} por mês!`,
      type: "tip",
      icon: Lightbulb,
      resources: [
        {
          title: "50-30-20: A regra de ouro das finanças",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          type: "video",
        },
        {
          title: "Aprenda a criar uma reserva de emergência",
          url: "https://example.com/reserva-emergencia",
          type: "article",
        },
      ],
    });
  }

  if (
    stats.balance > 0 &&
    expensesByCategory.length > 0 &&
    expensesByCategory[0].percentage < 30
  ) {
    insights.push({
      title: "Parabéns! Suas finanças estão equilibradas",
      description:
        "Você está gerenciando bem seu dinheiro. Continue assim e considere investir o excedente.",
      type: "success",
      icon: TrendingUp,
      resources: [
        {
          title: "Primeiros passos para investir",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          type: "video",
        },
        {
          title: "Guia completo de investimentos para iniciantes",
          url: "https://example.com/investimentos",
          type: "article",
        },
      ],
    });
  }

  if (insights.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recomendações</CardTitle>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyDescription>
                Adicione transações para receber recomendações personalizadas e
                dicas financeiras baseadas nos seus gastos.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4 animate-slide-up">
      <h3 className="text-xl font-semibold">Feito para você</h3>
      {insights.map((insight, index) => (
        <InsightCard
          key={index}
          title={insight.title}
          description={insight.description}
          type={insight.type}
          icon={insight.icon}
          resources={insight.resources}
        />
      ))}
    </div>
  );
}
