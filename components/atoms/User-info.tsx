import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface UserInfoProps {
  userName: string;
}

export function UserInfo({ userName }: UserInfoProps) {
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs font-medium">
          {initials}
        </AvatarFallback>
      </Avatar>

      <span className="hidden sm:block text-sm font-medium text-foreground">
        {userName}
      </span>
    </div>
  );
}
