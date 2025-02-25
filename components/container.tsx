import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactElement[];
}

const Container = ({children, className}: ContainerProps) => {
  return (
    <div className={cn("container mx-auto", className)}>
        {...children}
    </div>
  )
}

export default Container
