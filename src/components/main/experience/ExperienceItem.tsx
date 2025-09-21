import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceItem = ({
  title,
  company,
  location,
  duration,
  responsibilities,
}: ExperienceItemProps) => {
  return (
    <Card className="group relative overflow-hidden border-l-4 border-l-blue-500/20 hover:border-l-blue-500/60 transition-all duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full transform translate-x-16 -translate-y-16 transition-transform duration-500 group-hover:scale-150 group-hover:translate-x-8 group-hover:-translate-y-8"></div>
      
      <CardHeader className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              {company}
            </CardTitle>
            <CardDescription className="text-base md:text-lg font-medium text-muted-foreground">
              {title}
            </CardDescription>
          </div>
          <div className="flex flex-col sm:items-end gap-1">
            <Badge variant="secondary" className="text-xs font-medium">
              {duration}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {location}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Key Responsibilities
          </h4>
          <ul className="space-y-3">
            {responsibilities.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60 mt-2 flex-shrink-0"></div>
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
export default ExperienceItem;
