import { PlusCircle, Notepad, Trash } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./Body.module.css";
import Tasks from "./Tasks";

export interface TaskType {
  id: number;
  content: string;
}

const Body = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([""]);

  const handleCreateNewTasks = (event) => {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleChangeNewTask = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div className={styles.content}>
      <div className={styles.createTask}>
        <input
          name="newTask"
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
          onChange={handleChangeNewTask}
          value={newTask}
        />
        <button onClick={handleCreateNewTasks} className={styles.buttonCreate}>
          Criar
          <PlusCircle size={18} />
        </button>
      </div>

      <div className={styles.tasks}>
        <div className={styles.countTask}>
          <p className={styles.color1}>
            Tarefas criadas <span>0</span>
          </p>
          <p className={styles.color2}>
            Concluidas <span>0</span>
          </p>
        </div>

        {tasks[0] !== "" ? (
          tasks.map((line) => {
            return <Tasks key={line} content={line} />;
          })
        ) : (
          <div className={styles.taskBorder}>
            <Notepad className={styles.noteImg} size={70} weight="light" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
