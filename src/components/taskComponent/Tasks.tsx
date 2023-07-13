import { CheckCircle, Circle, Trash } from "phosphor-react";
import { TasksContent } from "../interfaces";

import styles from "./Task.module.css";

const Tasks = ({
  id,
  content,
  onDelete,
  checked,
  handleCheckboxChange,
}: TasksContent) => {
  const handleDeleteTask = () => {
    return onDelete(id);
  };

  return (
    <div className={styles.taskContent}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id={`taskInput_${id}`}
          className={styles.checkboxInput}
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <label className={styles.checkboxLabel} htmlFor={`taskInput_${id}`}>
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
