import styles from "./Body.module.css";
import { PlusCircle, Notepad } from "phosphor-react";

const Body = () => {
  return (
    <div className={styles.content}>
      <div className={styles.createTask}>
        <input
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.buttonCreate} title="Criar tarefa">
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

        <div className={styles.taskBorder}>
          <Notepad className={styles.noteImg} size={70} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        {/* <div>
                    <input type='checkbox'></input>
                    <img src='' alt='remove' />
                </div> */}
      </div>
    </div>
  );
};

export default Body;
