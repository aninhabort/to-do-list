import { CheckCircle, Circle, Trash } from "phosphor-react";

import styles from "./Task.module.css";
import { useState } from "react";

interface TasksContent {
  content: string;
  onDelete: (content: string) => void;
}

const Tasks = ({ content, onDelete }: TasksContent) => {
  const [checked, setChecked] = useState(false);

  function handleDeleteTask() {
    onDelete(content);
  }

  const handleCheckboxChange = () => {
    return !checked ? setChecked(true) : setChecked(false);
  };

  return (
    <div className={styles.taskContent}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id="taskInput"
          className={styles.checkboxInput}
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <label className={styles.checkboxLabel} htmlFor="taskInput">
        {!checked ? (
          <Circle className={styles.circle} size={20} color="var(--pink)" />
        ) : (
          <CheckCircle
            className={styles.checkCircle}
            size={20}
            color="var(--purple)"
          />
        )}
          {content}
        </label>
      </div>
      <button onClick={handleDeleteTask} className={styles.removeButton}>
        <Trash size={20} color="var(--gray-300)" />
      </button>
    </div>
  );
};

export default Tasks;
