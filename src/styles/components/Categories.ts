import styled from 'styled-components';

export const Container = styled.header`
  ul {
    display: flex;
    list-style: none;
    padding: 20px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      & + li {
        margin-left: 20px;

      }

      figure {
        width: 80px;
        height: 80px;
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
      }
    }
  }
`;

export const Category = styled.header`
  
`;
