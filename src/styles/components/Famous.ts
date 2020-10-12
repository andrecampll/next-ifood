import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0px 14px 20px;

  h4 {
    font-size: 1rem;
    color: #3f3e3e;
    font-weight: 600;
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
    padding-left: 1px;
  }

  .scroll-box__wrapper::-webkit-scrollbar {
   display: none; /* Chrome and Safari */
  }

  .scroll-box__container {
    height: 100%;
    display: inline-flex;
  }
`;
