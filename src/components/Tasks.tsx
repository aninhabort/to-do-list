import { Trash } from "phosphor-react";

interface TasksContent {
  content: string;
  onDelete: (content: string) => void
}

const Tasks = ({ content, onDelete }: TasksContent) => {
  function handleDeleteTask() {
    onDelete(content);
  }

  return (
    <div>
      <input type="checkbox"></input>
      <p>{content}</p>
      <button onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  );
};

export default Tasks;
