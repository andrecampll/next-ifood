import styled from 'styled-components';

interface IPropsContainer {
  isFamousContainer?: boolean;
}

export const Container = styled.div<IPropsContainer>`
  padding: 8px 0;
  width: 100%;

  @media (min-width: 772px) {
    padding: ${props => props.isFamousContainer ? "8px 0" : "0"};
  }

  :first-child {
    padding: ${props => props.isFamousContainer && "8px 0 8px 20px"};
  }

  :last-child {
    padding: ${props => props.isFamousContainer && "8px 20px 8px 0px"};
  }

  & + & {
    margin-left: 20px;
  }

  div {
    display: flex;
    align-items: center;
    min-width: 280px;

    @media (min-width: 768px) {
      min-width: 312px;
    }

    padding: 16px;
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.4);
    transition: 0.3s all;

    &:hover {
      box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.8);
    }

    border-radius: 2px;

    main {
      display: flex;
      flex-direction: column;
      margin-left: 12px;

      h5 {
        font-size: 0.875em;
        color: #3e3e3e;
        margin-bottom: 5px;
        line-height: 0.875rem;
        font-weight: 600;
        height: 18px;
      }

      span {
        font-weight: 300;
        color: #717171;
        font-size: 0.875rem;
        line-height: 0.9375rem;
        display: flex;

        svg {
          margin-right: 5px;
        }

        .starred {
          color: #e7a74e;
        }

        & + span {
          margin-top: 10px;
        }
      }
    }

    img {
      height: 54px;
      width: 54px;
      border-radius: 5px;
      object-fit: contain;
    }
  }
`;
