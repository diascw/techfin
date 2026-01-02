import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 200, height: 65 },
    md: { width: 240, height: 75 },
    lg: { width: 300, height: 90 },
  };

  const { width, height } = sizes[size];

  const logoPath = "/images/logo.png";
  return (
    <Image
      src={logoPath || "/images/logo.png"}
      alt="Techfin"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
