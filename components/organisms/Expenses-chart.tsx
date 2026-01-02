"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import {
  ItemGroup,
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { CategoryStats } from "@/lib/types/types";
import { PieChartIcon } from "lucide-react";

interface ExpensesChartProps {
  data: CategoryStats[];
}

export function ExpensesChart({ data }: ExpensesChartProps) {
  if (data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Gastos por Categoria</CardTitle>
          <CardDescription>Distribuição das suas despesas</CardDescription>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <PieChartIcon />
              </EmptyMedia>
              <EmptyTitle>Nenhuma despesa registrada</EmptyTitle>
              <EmptyDescription>
                Adicione suas primeiras despesas para visualizar a distribuição
                por categoria.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </CardContent>
      </Card>
    );
  }

  const chartData = data.map((item) => ({
    name: item.category.name,
    value: Number(item.total),
    icon: item.category.icon,
    color: item.category.color || "#10b981",
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-3 shadow-lg">
          <p className="font-medium">
            {payload[0].payload.icon} {payload[0].name}
          </p>
          <p className="text-sm text-primary font-semibold">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="animate-slide-up">
      <CardHeader>
        <CardTitle>Gastos por Categoria</CardTitle>
        <CardDescription>Distribuição das suas despesas</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        <div className="mt-6">
          <ItemGroup>
            {data.map((item) => (
              <Item key={item.category.id} size="sm" variant="muted">
                <ItemMedia
                  className="size-3 rounded-full"
                  style={{ backgroundColor: item.category.color || "#10b981" }}
                />
                <ItemContent>
                  <ItemTitle>
                    {item.category.icon} {item.category.name}
                  </ItemTitle>
                  <ItemDescription>
                    {item.percentage.toFixed(1)}% do total
                  </ItemDescription>
                </ItemContent>
                <ItemContent>
                  <ItemTitle className="text-primary">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(Number(item.total))}
                  </ItemTitle>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </div>
      </CardContent>
    </Card>
  );
}
