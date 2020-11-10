import styled from 'styled-components';

interface IContainerProps {
  isMenuContainer?: boolean;
}

export const Container = styled.div<IContainerProps>`
  cursor: pointer;
  min-width: 222px;
  margin-left: ${props => (props.isMenuContainer ? '10px' : '20px')};

  & + & {
    margin-left: 10px;
  }

  div {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;

    max-width: ${props => (props.isMenuContainer ? 'auto' : '220px')};
    max-height: 262px;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

    header {
      width: 100%;
      height: 100px;

      img {
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    main {
      padding: 10px;

      h4 {
        color: #3e3e3e;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-bottom: 9px;
      }

      p {
        font-weight: lighter;
        color: #717171;
        word-break: break-word;
        margin-bottom: 10px;
        font-size: 0.775rem;
        margin-bottom: ${props => (props.isMenuContainer ? '0' : '35%')};
      }

      h5 {
        color: #50a773;
        font-size: 0.875rem;
        line-height: 1.125rem;
        font-weight: 500;
      }

      @media (min-width: 560px) {
        padding: 20px 10px 10px;

        h4 {
          font-size: 0.975rem;
        }

        p {
          margin-bottom: ${props => (props.isMenuContainer ? '0' : '29%')};
          font-size: 0.875rem;
        }

        h5 {
          font-size: 0.975rem;
        }
      }
    }

    @media (min-width: 560px) {
      max-width: ${props => (props.isMenuContainer ? 'auto' : '270px')};
      max-height: 336px;

      header {
        min-height: 157px;
      }
    }
  }

  .flex-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    height: 140px;
    border-radius: 3px;

    @media (min-width: 560px) {
      min-height: 169px;
    }

    header {
      width: auto;
      padding: 10px;

      img {
        width: 120px;
        height: 90px;
        border-radius: 5px;
      }

      @media (min-width: 560px) {
        padding: 20px 15px;
      }
    }

    main {
      flex: 1;
      padding: 15px;

      h4 {
        color: #3e3e3e;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;
      }

      h5 {
        margin-top: 50px;
        font-size: 1rem;
        line-height: 1.25rem;
        font-weight: 400;
      }

      @media (min-width: 560px) {
        padding: 20px 15px;

        p {
          font-size: 0.875rem;
        }

        h5 {
          margin-top: 60px;
        }
      }

      @media (min-width: 743px) {
        h5 {
          margin-top: 50px;
        }
      }
    }
  }
`;
