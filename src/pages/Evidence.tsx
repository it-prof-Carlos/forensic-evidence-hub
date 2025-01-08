import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Evidence = () => {
  const data = [
    { name: 'Digital', value: 24 },
    { name: 'Network', value: 18 },
    { name: 'Device', value: 12 },
    { name: 'Cloud', value: 9 },
    { name: 'Social', value: 15 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Evidence Analysis</h2>
        <p className="text-muted-foreground">
          Analyze and visualize digital forensic evidence.
        </p>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Evidence Distribution</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Evidence;