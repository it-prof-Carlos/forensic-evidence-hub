import { Card } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText, AlertCircle, CheckCircle2 } from "lucide-react";

const Cases = () => {
  const cases = [
    {
      id: "CASE-001",
      title: "Digital Fraud Investigation",
      status: "active",
      lastUpdate: "2024-02-20",
      evidence: 12,
      priority: "high"
    },
    {
      id: "CASE-002",
      title: "Cybersecurity Breach Analysis",
      status: "pending",
      lastUpdate: "2024-02-19",
      evidence: 8,
      priority: "medium"
    },
    {
      id: "CASE-003",
      title: "Network Intrusion Investigation",
      status: "completed",
      lastUpdate: "2024-02-18",
      evidence: 15,
      priority: "low"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      default:
        return <FileText className="h-4 w-4 text-blue-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/10 text-red-500';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-500';
      case 'low':
        return 'bg-green-500/10 text-green-500';
      default:
        return 'bg-blue-500/10 text-blue-500';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Case Management</h2>
        <p className="text-muted-foreground">
          Track and manage your forensic investigation cases.
        </p>
      </div>

      <Card className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Update</TableHead>
              <TableHead>Evidence Count</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cases.map((case_) => (
              <TableRow key={case_.id}>
                <TableCell className="font-mono">{case_.id}</TableCell>
                <TableCell>{case_.title}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(case_.status)}
                    <span className="capitalize">{case_.status}</span>
                  </div>
                </TableCell>
                <TableCell>{case_.lastUpdate}</TableCell>
                <TableCell>{case_.evidence}</TableCell>
                <TableCell>
                  <Badge className={`${getPriorityColor(case_.priority)}`}>
                    {case_.priority}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Cases;