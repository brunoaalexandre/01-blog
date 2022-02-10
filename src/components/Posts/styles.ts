import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 720px) {
    padding: 0 15px;
  }
`;

export const Post = styled.div`
  max-width: 1120px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 5px;
  margin-bottom: 50px;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);

  :first-child {
    margin-top: 100px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: inline-block;
      font-size: 1rem;
      color: var(--gray);
      font-weight: 400;
      line-height: 20px;
    }
    button {
      background: transparent;
      border: none;
      svg {
        color: var(--purple);
        cursor: pointer;
        font-size: 22px;
      }
    }
  }

  div {
    h1 {
      font-size: 1.625rem;
      color: var(--gray-dark);
      line-height: 32.5px;
      font-weight: 400;
      margin-top: 30px;
    }

    p {
      text-align: left;
      font-size: 1.125rem;
      color: var(--gray);
      font-weight: 400;
      margin-top: 10px;
    }
  }
`;
