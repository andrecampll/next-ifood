import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0 35px;
  max-width: 430px;
  position: absolute;
  background: #fff;
  top: 65px;
  z-index: 9999;
  min-width: 100px;
  cursor: auto !important;
  right: 0;
  margin-right: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  svg {
    height: 280px !important;
  }

  h3 {
    margin-top: 20px;
    font-size: 1rem;
    color: #3e3e3e;
    font-weight: 600;
  }

  span {
    text-transform: none !important;
    font-size: 0.875rem;
    font-weight: 500;
    color: #717171;
    margin-top: 10px;
  }
`;
