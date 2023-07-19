export  interface TaskList {
  id: string,
  content: string,
  checked: boolean,
}

export interface TasksContent {
  id: string,
  content: string;
  checked: boolean;
  onDelete: (id: string) => void;
  onButtonClick: (id: string) => void;
}