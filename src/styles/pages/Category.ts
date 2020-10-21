import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 20px 14px 20px;
  margin-top: 100px;

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

      @media (min-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 35px;
      }

      @media (min-width: 1204px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
      }
    }

    button {
      border: 1px solid #f0f0f0;
      background: #fff;
      color: #ea1d2c;
      width: 100%;
      margin-top: 20px;
      padding: 12px;
      font-size: 16px;
      border-radius: 4px;
      transition: all 0.04s;

      &:hover {
        background: #f0f0f0;

        @media (min-width: 960px) {
          color: #fff;
          background: #ea1d2c;
        }
      }
    }

    .not-found {
      text-align: center !important;
    }

    h5 {
      font-size: 1rem;
      color: #555;
      font-weight: 600;
      margin-top: 20px;
      width: 100%;

      

      @media (min-width: 772px) {
        font-size: 1.25rem;
        line-height: 1.5625rem;
      }
    }
  }

`;

export const EmptyContainer = styled.div`
  tspan{white-space:pre}.svg-empty-cart-variant-10-shp0{opacity:.502;fill:url(#grd1)}.svg-empty-cart-variant-10-shp1{fill:#feecec}.svg-empty-cart-variant-10-shp2{fill:#771212}.svg-empty-cart-variant-10-shp3{fill:#f0dfdc}.svg-empty-cart-variant-10-shp4{fill:#d9b3b3}.svg-empty-cart-variant-10-shp5{fill:#d06060}.svg-empty-cart-variant-10-shp6{fill:#ffc4c0}.svg-empty-cart-variant-10-shp7{fill:#fff4f2}.svg-empty-cart-variant-10-shp8{fill:#ff9595}.svg-empty-cart-variant-10-shp9{fill:#c8b163}.svg-empty-cart-variant-10-shp10{fill:#ffc8c4}.svg-empty-cart-variant-10-shp11{fill:#dcbdd8}.svg-empty-cart-variant-10-shp12{fill:#cda7c8}.svg-empty-cart-variant-10-shp13{opacity:.31;fill:#ead0df}

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 450px;
  }
`;
