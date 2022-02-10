import styled from "styled-components";

export const Container = styled.header`
  background: linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-weight: 400;
      font-size: 24px;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 24px;
    }
  }

  form {
    margin-top: 70px;

    input {
      width: 100%;
      padding: 1.313rem;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-size: 1.125rem;
      background: rgba(255, 255, 255, 0.2);

      ::placeholder {
        font-weight: 400;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;
