import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  background: #333;
`;

export const Container = styled.div`
  main {
    padding: 12px 20px;

    h1 {
      color: #3e3e3e;
      font-size: 20px;
      font-weight: 500;
    }

    h2 {
      font-weight: 400;
      color: #717171;
      font-size: 0.875rem;
      margin: 0 0 32px 0;
      min-width: 50%;
    }

    .starred {
      color: #e7a74e;
      font-weight: bold;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;

        z-index: 10;
        top: 40px;
        position: absolute;
      }

      span {
        display: flex;
        align-items: center;
      }
    }

    .see-more {
      font-size: 1rem;
      line-height: 1em;
      color: #a6a6a6;
      font-weight: 600;
      margin-top: 380px;
    }
  }
`;

export const MenuContainer = styled.div`
  border-top: 8px solid #f7f7f7;
`;

export const MenuCategoriesContainer = styled.div`
  padding: 15px 0;

  ul {
    list-style: none;
    display: flex;
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

    li {
      height: 36px;
      padding: 0 10px;

      :first-child {
        margin: 0 20px 0 20px;
      }

      :last-child {
        margin-right: 30px;
      }

      & + li {
        margin-right: 20px;
      }

      h3 {
        line-height: 1.15;
        font-size: 1rem;
        font-weight: 600;
        width: max-content;
      }
    }

    .disabled {
      h3 {
        color: #aaa;
      }
    }

    .active {
      border-bottom: 2px solid #ea1d2c;

      h3 {
        color: #ea1d2c;
      }
    }
  }
`;

export const Menu = styled.div`
  h3 {
    font-weight: 600;
    font-size: 1.125rem;
    color: #3f3e3e;
    margin-left: 20px;
  }
`;
