import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item";
import { ExternalLink, Play, FileText } from "lucide-react";

interface InsightResource {
  title: string;
  url: string;
  type: "video" | "article";
}

interface InsightCardProps {
  title: string;
  description: string;
  type: "warning" | "tip" | "success";
  icon: React.ElementType;
  resources?: InsightResource[];
}

export function InsightCard({
  title,
  description,
  type,
  icon: Icon,
  resources,
}: InsightCardProps) {
  const borderColors = {
    warning: "border-l-destructive",
    tip: "border-l-accent",
    success: "border-l-primary",
  };

  const badgeVariants = {
    warning: "destructive" as const,
    tip: "secondary" as const,
    success: "default" as const,
  };

  const badgeLabels = {
    warning: "Atenção",
    tip: "Dica",
    success: "Sucesso",
  };

  return (
    <Card className={`border-l-4 ${borderColors[type]} animate-slide-up`}>
      <CardHeader>
        <Item size="sm" className="border-0 p-0">
          <ItemMedia variant="icon" className="bg-primary/10 text-primary">
            <Icon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <CardTitle className="text-lg">{title}</CardTitle>
            <Badge variant={badgeVariants[type]} className="mt-1 text-xs w-fit">
              {badgeLabels[type]}
            </Badge>
          </ItemContent>
        </Item>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-foreground leading-relaxed">{description}</p>
        {resources && resources.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Recursos recomendados:</p>
            <ItemGroup className="gap-2">
              {resources.map((resource, idx) => (
                <Item
                  key={idx}
                  size="sm"
                  variant="muted"
                  asChild
                  className="cursor-pointer hover:bg-muted transition-colors"
                >
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ItemMedia
                      variant="icon"
                      className="bg-primary/10 text-primary"
                    >
                      {resource.type === "video" ? (
                        <Play className="size-4" />
                      ) : (
                        <FileText className="size-4" />
                      )}
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle className="text-sm">
                        {resource.title}
                      </ItemTitle>
                    </ItemContent>
                    <ExternalLink className="size-4 text-muted-foreground" />
                  </a>
                </Item>
              ))}
            </ItemGroup>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
