import styled from 'styled-components';

interface IHeaderProps {
  hasTitle?: boolean;
}

export const Container = styled.header<IHeaderProps>`
  padding: 17px 20px 14px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  /* background: ${props => props.theme.colors.background}; */
  background: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 9997;
  border-top: none;

  @media (min-width: 960px) {
    padding: 5px 30px 5px;
  }
    
  div {
    span {
      cursor: pointer;
      font-size: 0.875rem;
      color: rgb(166, 165, 165);
      text-transform: uppercase;
      line-height: 1.15;
    }

    main {
      display: flex;
      align-items: center;
      justify-content: ${props => props.hasTitle ? 'space-between' : 'none'};

      h3 {
        font-size: 1rem;
        font-weight: ${props => props.hasTitle ? 500 : 600};
        color: #3e3e3e;
        text-align: left;
        margin: ${props => props.hasTitle ? '0' : '2px 5px 0px 0'}px;
      }

      p {
        width: 30px;
      }

      .page-title {
        margin: 0 calc(auto - 30px);
      }
    }
  }

  .desktop {
    display: flex;
    align-items: center;

    span {
      .logo {
        color: #ea1d2c;
        fill: #ea1d2c;

        margin-right: 35px;
        width: 87px;
        height: 66px;

        @media (min-width: 1248px) {
          margin-right: 70px;
        }
      }
    }

    .input-section {
      width: 424px;
      margin-right: auto;
    }

    section {
      width: 100%;
      max-height: 53px;
    }

    main {
      display: flex;
      align-items: center;
      flex-direction: column;

      h3 {
        font-size: 1rem;
        font-weight: 600;
        color: #3e3e3e;
        text-align: left;
        margin: 2px 5px 0px 0px;
      }
    }
  }
`;

export const Title = styled.h1`
  color: #EA1D2C;
`;
