import styled from 'styled-components';

export const ContainerBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 40rem;
    width: 40rem;

    & input {
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
`;
