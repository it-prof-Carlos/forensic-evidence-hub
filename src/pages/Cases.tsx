import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Cases = () => {
  const cases = [
    {
      id: "CASE-001",
      title: "Digital Evidence Analysis",
      status: "Active",
      priority: "High",
      lastUpdated: "2024-02-20",
    },
    {
      id: "CASE-002",
      title: "Network Traffic Investigation",
      status: "Pending",
      priority: "Medium",
      lastUpdated: "2024-02-19",
    },
    {
      id: "CASE-003",
      title: "Malware Forensics",
      status: "Closed",
      priority: "Low",
      lastUpdated: "2024-02-18",
    },
  ];

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
          <thead>
            <tr>
              <th className="text-left">Case ID</th>
              <th className="text-left">Title</th>
              <th className="text-left">Status</th>
              <th className="text-left">Priority</th>
              <th className="text-left">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((case_) => (
              <tr key={case_.id} className="hover:bg-muted/50">
                <td className="font-medium">{case_.id}</td>
                <td>{case_.title}</td>
                <td>
                  <Badge
                    variant={
                      case_.status === "Active"
                        ? "default"
                        : case_.status === "Pending"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {case_.status}
                  </Badge>
                </td>
                <td>
                  <Badge
                    variant={
                      case_.priority === "High"
                        ? "destructive"
                        : case_.priority === "Medium"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {case_.priority}
                  </Badge>
                </td>
                <td className="text-muted-foreground">{case_.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default Cases;