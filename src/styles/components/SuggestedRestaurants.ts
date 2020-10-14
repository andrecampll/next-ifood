import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 20px 14px 20px;

  h4 {
    font-size: 1rem;
    color: #3f3e3e;
    font-weight: 600;

    @media (min-width: 772px) {
      font-size: 1.25rem;
      line-height: 1.5625rem;
    }
  }

  div {
    main {
      display: flex;
    }

    ul {
      margin-top: 20px;
      list-style: none;

      @media (min-width: 772px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }
    }
  }
`;
