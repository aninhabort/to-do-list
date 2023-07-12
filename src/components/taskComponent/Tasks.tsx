import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

interface TasksContent {
  content: string;
  onDelete: (content: string) => void
}

const Tasks = ({ content, onDelete }: TasksContent) => {
  function handleDeleteTask() {
    onDelete(content);
  }

  return (
    <div className={styles.taskContent}>
      <div className={styles.checkbox}>
        <input type="checkbox" id="taskInput" className={styles.checkboxInput} />
        <label className={styles.checkboxLabel} htmlFor="taskInput">{content}</label>
      </div>
      <button onClick={handleDeleteTask} className={styles.removeButton}>
        <Trash size={20} color="var(--gray-300)"/>
      </button>
    </div>
  );
};

export default Tasks;
