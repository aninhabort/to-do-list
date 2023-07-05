import styles from './Body.module.css';

const Body = () => {
    return (
        <div className={styles.content}>
            <div className={styles.createTask}>
                <input className={styles.input} placeholder="Adicione uma nova tarefa" />
                <button className={styles.buttonCreate}>
                    Criar
                </button>
            </div>

            <div className={styles.tasks}>
                <div>
                    <p>Tarefas criadas <span>0</span></p>
                    <p>Concluidas <span>0</span></p>
                </div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

        </div>
    )
}

export default Body;