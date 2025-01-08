import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, Clock } from "lucide-react";
import Map from "@/components/Map";

const Index = () => {
  const stats = [
    {
      name: "Active Cases",
      value: "12",
      icon: Shield,
      change: "+2",
      changeType: "increase",
    },
    {
      name: "Critical Evidence",
      value: "28",
      icon: AlertTriangle,
      change: "+4",
      changeType: "increase",
    },
    {
      name: "Pending Analysis",
      value: "6",
      icon: Clock,
      change: "-2",
      changeType: "decrease",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Investigation Dashboard</h2>
        <p className="text-muted-foreground">
          Global overview of forensic investigations and case tracking.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <stat.icon className="h-8 w-8 text-primary opacity-75" />
            </div>
            <div className="mt-4">
              <span
                className={`text-sm font-medium ${
                  stat.changeType === "increase"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stat.change}
              </span>
              <span className="text-sm text-muted-foreground ml-1">
                since last week
              </span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Global Investigation Map</h3>
        <Map />
      </Card>
    </div>
  );
};

export default Index;