import { useState } from 'react'
import { ProductType } from './types'
import { MdDoneOutline } from 'react-icons/md';
import {VscError} from 'react-icons/vsc'
// import styled from './App.module.css';

function App() {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  const [number, setNumber] = useState(0);
  const [infos, setInfos] = useState<ProductType[]>([]);
  const [tasks, setTasks] = useState<ProductType>({
    id: number,
    task: '',
  });

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) =>{
    setTasks({
      id: number,
      task: target.value,
    })
  }

  const handleClick = () => {
    setInfos([...infos, tasks]);
    setShow(true);
    setNumber(number + 1)
    setTasks({
      id: number,
      task: '',
    })
  }

  

  const handleCheck = ({target}: React.ChangeEvent<HTMLInputElement>) => setChecked(target.checked);

  return (
    <>
    <header><h1>Minha lista de tarefas</h1></header>
    <label>
    <input type="text" placeholder='Digite sua tarefa' value={tasks.task} onChange={handleChange}/>
    </label>
    <button onClick={handleClick}>Adicionar</button>
    {show && infos.map(({id, task}) => (
          <label key={id}>
            <input type="checkbox" name="task" checked={checked} onChange={handleCheck}/>
            {task}
            {checked ? <MdDoneOutline color='green' /> : <VscError color='red' />}
          </label>
    ))}
    </>
  )
}

export default App
