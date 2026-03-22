import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
}

function SectionTitle({ title, description, className }: SectionTitleProps) {
  return (
    <div className="mb-8 lg:mb-10">
      <h2
        className={cn("mb-1 inline-block py-0.5 text-2xl font-bold", className)}
      >
        {title}
      </h2>
      <p className="text-base">{description}</p>
    </div>
  );
}
export default SectionTitle;
