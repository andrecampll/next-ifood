import styled from 'styled-components';

export const Container = styled.div`
  min-width: 749px;
  min-height: 470px;
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
      max-width: 100%;
      z-index: 11;
      max-height: 40vh;
      position: relative;
    }
  }

  main {
    min-width: 54%;

    header {
      display: flex;
      flex-direction: row-reverse;
      padding: 8px 20px;

      svg {
        cursor: pointer;
      }
    }

    div {
      padding: 25px 42px;

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
  }
`;
