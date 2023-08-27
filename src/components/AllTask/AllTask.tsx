import { Task } from '../../types'
import {VscError} from 'react-icons/vsc'
import { MdDoneOutline } from 'react-icons/md';
import { ContainerMain, TaskLine} from './AllTask.styled'

type PropsAllTask = {
  allTask: Task[],
  handleCheck: (id: string) => void,
  handleDelete: (id: string) => void,
}

function AllTask({allTask, handleCheck, handleDelete}: PropsAllTask) {
  return (
    <ContainerMain>
    {allTask.map(({id, task, completed}) => (
    <label key={id}>
          <input 
          type="checkbox"
          id={id}
          onChange={() => handleCheck(id)}
          />
          <TaskLine completed={completed}>{task}</TaskLine>
          {!completed ? (
          <VscError 
          onClick={() => handleDelete(id)} 
          color='red' 
          title='Remover'
          size={15}
          /> ) : 
          <MdDoneOutline color='green' size={15} />}
        </label>
    ))}
  </ContainerMain>
  )
}

export default AllTask