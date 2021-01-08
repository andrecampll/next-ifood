import styled from 'styled-components';

interface ButtonProps {
  disabledField?: boolean;
}

interface ContainerProps {
  submitButtonDisabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  min-width: 800px;
  min-height: 410px;
  display: flex;

  aside {
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 50%;

    .blur {
      position: absolute;
      width: 100%;
      height: 100%;
      filter: blur(30px) brightness(65%);
      transform: scale(1.1);
      z-index: 10;
    }

    .food-cover {
      min-width: 100%;
      z-index: 11;
      max-height: 40vh;
      position: relative;
    }
  }

  main {
    min-width: 52%;

    header {
      display: flex;
      flex-direction: row-reverse;
      padding: 8px 20px;

      svg {
        cursor: pointer;
      }
    }

    div {
      padding: 25px 40px;

      h1 {
        font-size: 1.125rem;
        font-weight: 600;
        color: #3e3e3e;
      }

      p {
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.22;
        color: #717171;
        margin-top: 15px;
        margin-bottom: 12px;
      }

      strong {
        font-size: 0.875rem;
        color: #3e3e3e;
      }

      .comments {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0 10px;

        h2 {
          font-weight: 600;
          font-size: 1rem;
          color: #717171;
        }

        span {
          color: #a6a6a6;
          font-weight: 200;
          font-size: 0.975rem;
        }
      }

      textarea {
        margin: 0 auto;
        width: 100%;
        height: calc(4em + 40px);
        min-height: calc(4em + 40px);
        padding: 20px;
        border-radius: 4px;
        border: 1px solid #dcdcdc;
        background-color: #fff;

        font-size: 1rem;
        color: #717171;
        font-weight: 400;
        resize: none;

        ::placeholder {
          color: #dcdcdc;
        }
      }
    }

    footer {
      width: 100%;
      padding: 20px;
      justify-content: space-between;

      display: flex;
      align-items: center;
      margin-top: 30px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

      div {
        padding: 10px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        max-width: 120px;

        input {
          font-size: 1.2rem;
          font-weight: 600;
          max-width: 40px;
          border: 0;
          text-align: center;
          margin-left: 15px;
        }
      }

      .buy-action {
        opacity: ${props => (props.submitButtonDisabled ? 0.5 : 1)};
        transition: 0.4s opacity;
        background: #ea1d2c;
        border: 0;
        border-radius: 4px;
        cursor: pointer;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 15px 20px;
        min-width: 240px;

        span {
          font-size: 0.875rem;
        }

        transition: background-color 0.5s ease;

        &:hover {
          background-color: #c41714;
        }
      }
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  opacity: ${props => (props.disabledField ? 0.5 : 1)};
  background: 0;
  border: 0;
  cursor: pointer;
  color: #ea1d2c;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s opacity;
`;
