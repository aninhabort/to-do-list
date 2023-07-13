import {v4 as uuidv4} from 'uuid';
import { PlusCircle, Notepad } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import Tasks from "../taskComponent/Tasks";

import styles from "./Body.module.css";
import { TaskList } from '../interfaces';

const Body = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<TaskList[]>([]);
  const [count, setCount] = useState(0);
  const [concluded, setConcluded] = useState(0);
  const [checked, setChecked] = useState(false);

  const myuuid = uuidv4();

  const handleCreateNewTasks = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTasks([...tasks, {
      id: myuuid,
      content: newTask,
    }]);
    
    setCount((prevState) => prevState + 1);
    setNewTask("");
  };

  const handleChangeNewTask = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNewTask(target.value);
  };

  const DeleteTask = (id: string) => {
    const deleteLine = tasks.filter((line) => line.id !== id);

    setTasks(deleteLine);
    setCount((prevState) => prevState - 1);
  };

  const handleCheckboxChange = () => {    
    if (!checked) {
      setConcluded((prevState) => prevState + 1);
      return setChecked(true);
    }
    setConcluded((prevState) => prevState - 1);
    return setChecked(false);
  };

  return (
    <div className={styles.content}>
      <form onSubmit={handleCreateNewTasks} className={styles.createTask}>
        <input
          type="text"
          value={newTask}
          className={styles.input}
          onChange={handleChangeNewTask}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit" className={styles.buttonCreate}>
          Criar
          <PlusCircle size={18} />
        </button>
      </form>

      <div className={styles.tasks}>
        <div className={styles.countTask}>
          <p className={styles.color1}>
            Tarefas criadas <span>{count}</span>
          </p>
          <p className={styles.color2}>
            Concluidas{" "}
            <span>
              {concluded} de {count}
            </span>
          </p>
        </div>

        {tasks.length > 0 ? (
          tasks.map((line) => (
            <Tasks
              key={line.id}
              id={line.id}
              content={line.content}
              onDelete={DeleteTask}
              checked={checked}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))
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
