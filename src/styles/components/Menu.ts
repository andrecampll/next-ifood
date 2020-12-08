import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  min-width: 350px;

  section {
    padding-top: 0 !important;

    @media (min-width: 1248px) {
      margin-right: 50px;
    }

    div {
      display: flex;
      align-items: center;
      cursor: pointer;

      h4 {
        font-size: 1rem;
        font-weight: 300;
        /* color: ${props => props.theme.colors.fontPrimary}; */
        color: #3e3e3e;
        width: 170px;
      }

      svg {
        /* color: ${props => props.theme.colors.fontPrimary}; */
        color: #3e3e3e;

        :first-child {
          margin-right: 5px;
        }

        :last-child {
          margin-left: 5px;
        }
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 30px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* color: ${props => props.theme.colors.fontSecondary}; */
      color: #3e3e3e;
      transition: all 0.04s;
      cursor: pointer;

      button {
        background: 0;
        border: 0;
        cursor: pointer;
        display: flex;
        align-items: center;

        &:hover {
          color: #ea1d2c;
        }

        h5 {
          font-size: 1rem;
          margin: 0 20px 0 10px;
          font-weight: 300;
          display: none;

          @media (min-width: 1248px) {
            display: flex;
          }
        }
      }
    }

    h5 {
      font-size: 1rem;
      margin: 0 20px 0 10px;
      font-weight: 300;
      display: none;

      @media (min-width: 1248px) {
        display: flex;
      }
    }
  }
`;
