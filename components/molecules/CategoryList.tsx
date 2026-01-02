import { CurrencyText } from "@/components/atoms/CurrencyText";
import { Category } from "../atoms/Category";

interface CategoryListItemProps {
  icon: string;
  name: string;
  color: string;
  amount: number;
}

export function CategoryListItem({
  icon,
  name,
  color,
  amount,
}: CategoryListItemProps) {
  return (
    <div className="flex items-center justify-between text-sm">
      <Category icon={icon} name={name} color={color} />
      <CurrencyText amount={amount} className="font-medium" />
    </div>
  );
}
