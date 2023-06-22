const Body = () => {
    return (
        <div>
            <div>
                <input placeholder="Adicione uma nova tarefa" />
                <button>
                    Criar
                    <img src="" alt="+"/>
                </button>
            </div>

            <div>
                <p>Tarefas criadas <span>0</span></p>
                <p>Concluidas <span>0</span></p>
            </div>

            <div>
                <img src="" alt="" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}

export default Body;