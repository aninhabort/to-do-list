import { PlusCircle, Notepad } from "phosphor-react";
import { ChangeEvent, MouseEvent, useState } from "react";

import styles from "./Body.module.css";
import Tasks from "./Tasks";

const Body = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    "New Task!"
  ]);

  const handleCreateNewTasks = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask("")
  };

  const handleChangeNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const DeleteTask = (taskToDelete: string) => {
    const deleteLine = tasks.filter((line) => {
      return line !== taskToDelete
    });
    setTasks(deleteLine) 
  }

  return (
    <div className={styles.content}>
      <div className={styles.createTask}>
        <input
          type="text"
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

        {tasks ? (
          tasks.map((line) => {
            return <Tasks key={line} content={line} onDelete={DeleteTask} />;
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
