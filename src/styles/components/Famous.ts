import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0px 14px 0px;
  @media (min-width: 768px) {
    padding-top: 14px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 8px 20px;

    a {
      display: block;
      font-size: 0.875rem;
      line-height: 0.9375rem;
      color: #ea1d2c;
      text-decoration: unset;
      cursor: default;
    }

    h4 {
      font-size: 1rem;
      color: #3f3e3e;
      font-weight: 600;

      @media (min-width: 768px) {
        font-size: 1.25rem;
        line-height: 1.5625rem;
      }
    }
  }

  div {
    display: flex;

    ul {
      display: flex;
      list-style: none;
      margin-top: 10px;
    }
  }

  .scroll-box {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .scroll-box__wrapper {
    height: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none; /* IE */
    overflow: -moz-scrollbars-none; /* Firefox */
  }

  .scroll-box__wrapper::-webkit-scrollbar {
    display: none; /* Chrome and Safari */
  }

  .scroll-box__container {
    height: 100%;
    display: inline-flex;
  }
`;
