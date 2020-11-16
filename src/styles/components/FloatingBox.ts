import styled from 'styled-components';

interface IFloatingBoxProps {
  open?: boolean;
}

export const Container = styled.div<IFloatingBoxProps>`
  display: ${props => (props.open ? 'flex' : 'none')} !important;

  flex-direction: column;
  align-items: center;

  padding: 15px 30px;
  max-width: 430px;
  position: absolute;
  background: #fff;
  top: 65px;
  z-index: 10;
  min-width: 100px;
  cursor: auto !important;
  right: 0;
  margin-right: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  svg {
    height: 280px !important;
  }

  span,
  div {
    cursor: auto !important;
  }

  h3 {
    margin-top: 20px;
    font-size: 1rem;
    color: #3e3e3e;
    font-weight: 600;
  }

  span {
    text-transform: none !important;
    font-size: 0.875rem;
    font-weight: 500;
    color: #717171;
    margin-top: 10px;
  }

  table {
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: auto;
    color: auto;
    transition: none;
    cursor: auto;

    header {
      width: 100%;
      border-bottom: 1px solid #dcdcdc;
      padding-bottom: 28px;

      span {
        font-weight: 300 !important;
        color: #ccc !important;
      }

      h2 {
        font-size: 1rem;
        line-height: 1em;
        color: #ea1d2c;
        margin-top: 10px;
      }
    }

    main {
      padding: 20px 0;
      border-bottom: 1px solid #dcdcdc;
      margin-bottom: 10px;

      div {
        flex-direction: row;

        span {
          margin: 0;
          color: #3f3e3e;
          font-size: 1rem;
          font-weight: 400;
        }

        strong {
          margin: 0;
        }
      }

      .flex-items {
        justify-content: space-between !important;
      }

      .actions {
        width: 100%;
        margin-top: 10px;

        display: flex;
        align-items: center;

        .edit-action {
          color: #ea1d2c;
        }

        button {
          color: #a6a29f;
          font-weight: bold;

          :hover {
            color: #ea1d2c;
          }
        }

        button + button {
          margin-left: 30px;
        }
      }
    }

    div {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      span {
        color: #717171;
        font-size: 1rem;
      }

      strong {
        margin-top: 10px;
      }

      :last-child {
        border-bottom: 1px solid #dcdcdc;
        padding-bottom: 20px;
      }
    }

    .submit-button {
      background: #ea1d2c;
      padding: 16px;
      margin-top: 40px;

      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;

      font-size: 1rem;
      line-height: 1em;
      border-radius: 4px;

      &:hover {
        color: #fff;
      }
    }
  }
`;
