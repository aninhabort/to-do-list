export  interface TaskList {
  id: string,
  content: string,
}

export interface TasksContent {
  id: string,
  content: string;
  checked: boolean;
  onDelete: (id: string) => void;
  handleCheckboxChange: () => void;
}