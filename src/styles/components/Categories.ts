import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;

  @media (min-width:960px) {
    margin-top: 81px;
  }

  div {
    display: flex;
    list-style: none;
    padding: 4px 20px;

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      & + main {
        margin-left: 10px;

        @media (min-width:960px) {
          margin-left: 8px;
        }

        @media (min-width: 1140px) {
          margin-left: 15px;
        }
      }

      :last-child {
        padding-right: 20px;
      }

      figure {
        width: 80px;
        height: 80px;

        @media (min-width:960px) {
          width: 110px;
          height: 110px;
        }

        overflow: hidden;
        position: relative;
        border-radius: 10%;

        img {
          position: absolute;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          z-index: 0;
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
        }
      }

      span {
        margin-top: 20px;
        font-size: 1rem;
        color: #717171;
        font-weight: 300;
        line-height: 1.125rem;
        text-align: center;
      }
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

export const Category = styled.header`
  
`;
