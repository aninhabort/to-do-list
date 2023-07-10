import { Trash } from "phosphor-react";

interface TasksContent {
  content: string;
}

const Tasks = ({ content }: TasksContent) => {
  return (
    <div>
      <input type="checkbox"></input>
      <p>{content}</p>
      <button>
        <Trash />
      </button>
    </div>
  );
};

export default Tasks;
