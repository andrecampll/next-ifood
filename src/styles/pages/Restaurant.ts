import styled from 'styled-components';

interface IHeaderProps {
  cover_image_url: string;
}

export const RestaurantHeader = styled.header<IHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  background: url(${props => props.cover_image_url}) no-repeat center;

  button {
    background: none;
    border: 0;
  }
`;

export const Container = styled.div`
  .cover-image {
    display: none;
    position: relative;
    height: 150px;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    @media (min-width: 960px) {
      display: flex;
    }
  }

  main {
    padding: 20px 20px 12px;

    h1 {
      color: #3e3e3e;
      font-size: 20px;
      font-weight: 500;

      @media (min-width: 960px) {
        font-size: 2rem;
        color: #2e2e2e;
      }
    }

    h2 {
      display: none;

      line-height: 23px;
      font-size: 1rem;
      font-weight: 400;
      color: #717171;
      @media (min-width: 960px) {
        display: block;
        margin-bottom: 20px;
      }
    }

    h3 {
      font-weight: 400;
      color: #717171;
      font-size: 0.875rem;
      margin: 0 0 32px 0;
      min-width: 50%;

      @media (min-width: 960px) {
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 10px;
      }
    }

    .starred {
      color: #e7a74e;
      font-weight: bold;
      margin-left: 5px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      @media (min-width: 960px) {
        flex-direction: row-reverse;
        margin-bottom: 0px;
      }

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
      @media (min-width: 960px) {
        margin-top: 0px;
      }
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
