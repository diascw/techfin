import { Badge } from "@/components/ui/badge";
import type { Category } from "@/lib/types/types.ts";

interface CategoryProps {
  category?: Category;
  icon?: string;
  name?: string;
  color?: string;
}

export function Category({ category, icon, name, color }: CategoryProps) {
  const displayIcon = category?.icon || icon;
  const displayName = category?.name || name;
  const displayColor = category?.color || color;

  return (
    <Badge variant="secondary" className="text-xs">
      {displayIcon} {displayName}
    </Badge>
  );
}
