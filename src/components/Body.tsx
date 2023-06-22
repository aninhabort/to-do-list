import styles from './Body.module.css';

const Body = () => {
    return (
        <div>
            <div className={styles.createTask}>
                <input className={styles.input} placeholder="Adicione uma nova tarefa" />
                <button className={styles.buttonCreate}>
                    Criar +
                </button>
            </div>

            <div>
                <p>Tarefas criadas <span>0</span></p>
                <p>Concluidas <span>0</span></p>
            </div>

            <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}

export default Body;