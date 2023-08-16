import { useState } from 'react'
import { Task } from './types'
import { MdDoneOutline } from 'react-icons/md';
import {VscError} from 'react-icons/vsc'
import styled from './App.module.css';
import { v4 as uuidv4 } from 'uuid';

const info = {
  id: '',
  task: '',
  completed: false,
};

function App() {
  const [selected, setSelected] = useState<any>({});
  const [allTask, setAllTask] = useState<Task[]>([])
  const [task, setTask] = useState<Task>(info);


  const handleChange = ({currentTarget}: React.ChangeEvent<HTMLInputElement>) =>{
    setTask({
      id: uuidv4(),
      task: currentTarget.value,
      completed: false,
    })
  }

  const handleClick = () => {
    setAllTask([...allTask, task])
    setTask(info)
  }
  
  const handleDelete = (id: string) => setAllTask((prev) => prev.filter((task) => task.id !== id));

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
      setSelected({...selected, [id]: event.target.checked})
  } 

  return (
    <>
    <header style={{background: 'test'}}><h1>Todo List</h1></header>
    <label>
    <input type="text" placeholder='Digite sua tarefa' value={task.task} onChange={handleChange}/>
    </label>
    <button onClick={handleClick}>Adicionar</button>
    <main className={styled.container}>
      {allTask.map(({id, task}) => (
      <label key={id}>
            <input 
            type="checkbox"
            value={task}
            id={id}
            onChange={(event) => handleCheck(event, id)}
            />
            {task}
            {!selected[id] ? (
            <VscError 
            onClick={() => handleDelete(id)} 
            color='red' 
            title='Remover'
            size={15}
            /> ) : 
            <MdDoneOutline color='green' size={15} />}
          </label>
      ))}
    </main>
    </>
  )
}

export default App
