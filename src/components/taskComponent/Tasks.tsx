import { CheckCircle, Circle, Trash } from "phosphor-react";
import { TasksContent } from "../interfaces";

import styles from "./Task.module.css";

const Tasks = ({
  id,
  content,
  onDelete,
  checked,
  onButtonClick,
}: TasksContent) => {
  const handleDeleteTask = () => {
    return onDelete(id);
  };

  const handleButtonClick = () => {
    return onButtonClick(id)
  }

  return (
    <div className={styles.taskContent}>
      <div className={styles.checkbox}>
        <button onClick={handleButtonClick} className={styles.buttonCheckbox}>
          {!checked ? (
            <Circle className={styles.circle} size={20} color="var(--pink)" />
          ) : (
            <CheckCircle
              className={styles.checkCircle}
              size={20}
              color="var(--purple)"
            />
          )}
        </button>
        <p>{content}</p>
      </div>
      <button onClick={handleDeleteTask} className={styles.removeButton}>
        <Trash size={20} color="var(--gray-300)" />
      </button>
    </div>
  );
};

export default Tasks;
