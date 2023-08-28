import styled from 'styled-components';

interface PropsTask {
  completed: boolean;
}

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  height: 20rem;
  width: 20rem;
  
  & .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    background-color: ${props => props.theme.colors.secondaryText};
    width: 30rem;
    padding: 0.7rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  & input {
    display: none;
  }

  & .icon {
    color: #ff0000b3;
    min-width: 2rem;
  }

  & .iconDone {
    color: green;
    min-width: 2rem;
  }

  & .iconTrash {
    min-width: 2rem;
  }
  `;

export const TaskLine = styled.span<PropsTask>`
  text-decoration: ${(props => props.completed ? 'line-through' : 'none')};
`;