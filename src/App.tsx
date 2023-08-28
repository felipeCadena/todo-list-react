import { useState } from 'react'
import { Task } from './types'
import {FiMoon} from 'react-icons/fi';
import { BsLightningCharge } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid';
import AllTask from './components/AllTask/AllTask';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import ligth from './styles/themes/light';
import GlobalStyles from './styles/global';
import { ContainerBody } from './App.styled';

const info = {
  id: '',
  task: '',
  completed: false,
};

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  const [allTask, setAllTask] = useState<Task[]>([])
  const [task, setTask] = useState<Task>(info);
  const [isDarkTheme, setIsDarkTheme] = useState(false);


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

  const handleCheck = (id: string) => {
    const updateCheck = allTask.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    })
    setAllTask(updateCheck);
  } 

  const toggleTheme = () => {
    setTheme(!theme)
    setIsDarkTheme(prevState => !prevState)
  }

  return (
      <ThemeProvider theme={ !isDarkTheme ? dark : ligth }>
        <GlobalStyles />
          <ContainerBody>
            <header>
              <h1>To-do List <span onClick={ toggleTheme }>
                {!theme ? <FiMoon size={25} /> : <BsLightningCharge size={25} />}
              </span>
              </h1>
            </header>
            <div>
              <input className='inputTask' type="text" placeholder='Digite sua tarefa' value={task.task} onChange={handleChange}/>
              <button onClick={handleClick}>Adicionar</button>
            </div>
              <AllTask 
              allTask={allTask}
              handleDelete={handleDelete}
              handleCheck={handleCheck}
              />
              <div className='task_done'>
                <p>{allTask.length} tarefa(s) adicionada(s)</p>
                <p>{allTask.filter(task => task.completed).length} tarefa(s) concluída(s)</p>
                <p>{allTask.filter(task => !task.completed).length} tarefa(s) pendente(s)</p>
              </div>
            </ContainerBody>
      </ThemeProvider>
  )
}

export default App
