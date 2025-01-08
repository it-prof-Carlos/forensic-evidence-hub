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
import { File, Link as LinkIcon, Image, FileText } from "lucide-react";

const Evidence = () => {
  const evidenceItems = [
    {
      id: "EVD-001",
      type: "document",
      filename: "financial_records.pdf",
      caseId: "CASE-001",
      dateCollected: "2024-02-20",
      hash: "8f4e8d9c3b2a1",
      status: "analyzed"
    },
    {
      id: "EVD-002",
      type: "image",
      filename: "security_capture.jpg",
      caseId: "CASE-001",
      dateCollected: "2024-02-19",
      hash: "7d6e5f4c3b2a",
      status: "pending"
    },
    {
      id: "EVD-003",
      type: "link",
      filename: "suspicious_url.txt",
      caseId: "CASE-002",
      dateCollected: "2024-02-18",
      hash: "9a8b7c6d5e4f",
      status: "verified"
    }
  ];

  const getEvidenceIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <File className="h-4 w-4 text-blue-500" />;
      case 'image':
        return <Image className="h-4 w-4 text-green-500" />;
      case 'link':
        return <LinkIcon className="h-4 w-4 text-yellow-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'analyzed':
        return 'bg-green-500/10 text-green-500';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-500';
      case 'verified':
        return 'bg-blue-500/10 text-blue-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Evidence Analysis</h2>
        <p className="text-muted-foreground">
          Track and analyze digital evidence with complete chain of custody.
        </p>
      </div>

      <Card className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Evidence ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Filename</TableHead>
              <TableHead>Case ID</TableHead>
              <TableHead>Date Collected</TableHead>
              <TableHead>Hash</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {evidenceItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-mono">{item.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getEvidenceIcon(item.type)}
                    <span className="capitalize">{item.type}</span>
                  </div>
                </TableCell>
                <TableCell>{item.filename}</TableCell>
                <TableCell className="font-mono">{item.caseId}</TableCell>
                <TableCell>{item.dateCollected}</TableCell>
                <TableCell className="font-mono text-xs">{item.hash}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status}
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

export default Evidence;