import { Task } from '../../types'
import { MdDoneOutline } from 'react-icons/md';
import { ContainerMain, TaskLine} from './AllTask.styled'
import { FaTrashAlt } from 'react-icons/fa'
import {BiTimer} from 'react-icons/bi'
// import React, { useState } from 'react';

type PropsAllTask = {
  allTask: Task[],
  handleCheck: (id: string) => void,
  handleDelete: (id: string) => void,
}

function AllTask({allTask, handleCheck, handleDelete}: PropsAllTask) {
  // const [edit, setEdit] = useState(true);
  // const [valueInput, setValueInput] = useState('')

  // function handleChange({target}: React.ChangeEvent<HTMLInputElement>) {
  //   setValueInput(target.value)
  //   console.log(valueInput);
    
  // }

  // function handleSalve() {
  //   setEdit(!edit)
  //   setValueInput(valueInput)
  // }

  return (
    <ContainerMain>
    {allTask.map(({id, task, completed}) => (
    <label className='label' key={id}>
          <input 
          type="checkbox"
          id={id}
          checked={completed}
          className='checkbox'
          onChange={() => handleCheck(id)}
          />
          {completed ? <MdDoneOutline className='iconDone' size={20}/> : <BiTimer className='icon' size={20}/>}
            <TaskLine completed={completed}>{task}</TaskLine>
          {/* {edit ? (
            <>
              <button onClick={() => setEdit(!edit)}>Editar</button>
            </>
          ) : (
            <>
              <label>
                <input type="text" onChange={handleChange}/>
              </label>
              <button onClick={handleSalve}>Salvar</button>
            </>
          )} */}
          <FaTrashAlt 
          className='iconTrash'
          onClick={() => handleDelete(id)} 
          title='Remover'
          size={15}
          />
        </label>
    ))}
  </ContainerMain>
  )
}

export default AllTask