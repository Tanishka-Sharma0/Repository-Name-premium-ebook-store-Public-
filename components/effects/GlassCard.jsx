// components/ui/GlassCard.jsx
import { cn } from '@/lib/utils';

export default function GlassCard({
    children,
    className = "",
    hover = true,
    ...props
}) {
    return (
        <div
            className={cn(
                "glass rounded-3xl p-8 transition-all duration-500",
                hover && "hover:border-primary/30 hover:-translate-y-1 hover:shadow-2xl",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}