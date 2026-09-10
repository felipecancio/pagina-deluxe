import { CTA_URL } from "@/lib/constants";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "large";
}

export function CTAButton({
  children,
  className = "",
  size = "default",
}: CTAButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-10 py-5 text-base tracking-[0.2em]"
      : "px-8 py-4 text-sm tracking-[0.15em]";

  return (
    <a
      href={CTA_URL}
      id="agregar"
      className={`btn-gold ${sizeClasses} ${className}`}
    >
      {children}
    </a>
  );
}
