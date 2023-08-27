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
`;

export const TaskLine = styled.span<PropsTask>`
  text-decoration: ${(props => props.completed ? 'line-through' : 'none')}
`;