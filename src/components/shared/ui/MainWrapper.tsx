import { cn } from "@/lib/utils";

interface MainWrapperProps {
  className?: string;
  children: React.ReactNode;
}

function MainWrapper({ className, children }: MainWrapperProps) {
  return (
    <div className={cn("mx-auto w-[90%] max-w-[1250px]", className)}>
      {children}
    </div>
  );
}
export default MainWrapper;
