import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 70px;

  h3 {
    margin-bottom: 20px;
  }
`;

export const FoodsContainer = styled.div`
  padding: 0 20px 0 10px;

  display: grid;
  grid-template-columns: minmax(400px, 1fr);
  gap: 12px;

  @media (min-width: 743px) {
    grid-template-columns: repeat(2, minmax(320px, 1fr));
    grid-gap: 20px;
  }
`;
