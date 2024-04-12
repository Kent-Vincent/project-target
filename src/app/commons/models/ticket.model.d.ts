interface Ticket {
  id: string;
  title: string;
  deadline: Date;
  description: string;
  labels: string[];
  priority: "Low" | "Medium" | "High";
  assignedUsers: User[];
  createdBy: User;
  stopwatchSeconds: number;
}