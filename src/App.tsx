import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);
  const [infos, setInfos] = useState<ProductType[]>([]);
  const [tasks, setTasks] = useState<ProductType>({
    id: number,
    task: '',
    urgent: show,
  });

  type ProductType = {
    id: number,
    task: string,
    urgent: boolean,
  };

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) =>{
    setTasks({
      id: number,
      task: target.value,
      urgent: show,
    })
  }

  const handleClick = () => {
    setInfos([...infos, tasks]);
    setShow(true);
    setNumber(number + 1)
  }

  return (
    <>
    <header><h1>Minha lista de tarefas</h1></header>
    <label>
    <input type="text" placeholder='Digite sua tarefa' onChange={handleChange}/>
    </label>
    <label>
    Tarefa urgente?
    <input type="checkbox" name="urgent" id="urgent"/>
    </label>
    <button onClick={handleClick}>Adicionar</button>
    {show && infos.map(({id, task, urgent}) => (
      <div key={id}>
        <ul>
          <input type="checkbox" name="task" id="task"/>
          <li>{task}</li>
        </ul>
        <p>{urgent ? 'Urgente' : 'Não urgente'}</p>
      </div>
    ))}
    </>
  )
}

export default App
