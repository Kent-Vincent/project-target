interface Ticket {
  id: string;
  title: string;
  deadline: string;
  priority: "Low" | "Medium" | "High";
  description: string;
  labels: string[];
  stopwatchSeconds: number;
  assignedTo: User[];
  createdBy: User;
}