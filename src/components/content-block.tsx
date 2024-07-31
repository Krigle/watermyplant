import { cn } from "@/lib/utils";

type ContentBlockProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentBlock({
  children,
  className,
}: ContentBlockProps) {
  return (
    <div
      className={cn(
        "bg-[#d2e3de] shadow-sm overflow-hidden h-full w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
