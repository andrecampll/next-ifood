import styled from 'styled-components';

export const Container = styled.header`
  ul {
    display: flex;
    list-style: none;
    padding: 0px 20px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      & + li {
        margin-left: 20px;
      }

      figure {
        height: 140px;
        overflow: hidden;
        position: relative;
        border-radius: 5px;

        img {
          left: 0;
          top: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: none;
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
`;

export const Category = styled.header`
  
`;
