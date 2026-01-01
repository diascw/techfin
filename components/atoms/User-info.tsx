import { User } from "lucide-react";

interface UserInfoProps {
  userName: string;
}

export function UserInfo({ userName }: UserInfoProps) {
  return (
    <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
      <User className="h-4 w-4" />
      <span>{userName}</span>
    </div>
  );
}
