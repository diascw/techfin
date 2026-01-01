import { Badge } from "@/components/ui/badge";
import type { Category } from "@/lib/types/types.ts";

interface CategoryProps {
  category: Category;
}

export function Category({ category }: CategoryProps) {
  return (
    <Badge variant="secondary" className="text-xs">
      {category.icon} {category.name}
    </Badge>
  );
}
