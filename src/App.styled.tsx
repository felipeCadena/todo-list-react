import styled from 'styled-components';

export const ContainerBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    margin: 4rem auto;
    height: 80vh;
    width: 60vw;
    background-color: ${props => props.theme.colors.borderColor};
    border-radius: 3rem;

    & h1 {
      font-size: 2rem;
    }

    & .inputTask {
      width: 25rem;
      border: none;
      border-radius: 1rem;
      padding: 1rem;
    }

    & button {
      margin-left: 1rem;
      border: none;
      border-radius: 1rem;
      padding: 1rem;
    }

    & .task_done {
      display: flex;
      justify-content: space-evenly;
      width: 60vw;

      & p {
        font-size: 0.8rem;
      }
    }
`;
