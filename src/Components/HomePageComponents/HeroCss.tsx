import styled from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";
const HeroComponent = styled.section`
  background-color: #003145;
  padding: 5em 0em 2.5em 0em;
`;
const Content = styled.div`
  width: 80%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 3em;
  max-width: 1200px;
  text-align: center;
  @media ${devices.laptop} {
    text-align: left;
    flex-direction: row-reverse;
    gap: 2.5em;
  }
  @media ${devices.laptopL} {
    gap: 6em;
  }
`;
const HeroHeading = styled.h1`
  color: white;
  font-size: clamp(1rem, -0.125rem + 5vw, 2.5rem);
`;
const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  align-items: center;
  @media ${devices.laptop} {
    align-items: flex-start;
  }
`;
const HeroImg = styled.img`
  width: 80%;
  @media ${devices.laptop} {
    width: initial;
  }
`;
const FlexBox = styled.div`
  display: flex;
  gap: 2.5em;
`;
const LineDecorator = styled.div`
  width: min-content;
  padding: 0 0.3em;
  background-color: #ffce5c;
  display: none;
  @media ${devices.laptop} {
    display: block;
  }
`;
const HeroText = styled.p`
  color: white;

  font-size: 1.2rem;
  line-height: 1.75em;
  @media ${devices.laptop} {
    margin: 0 3.1em;
  }
`;

export {
  HeroComponent,
  Content,
  HeroHeading,
  HeroImg,
  HeroText,
  LineDecorator,
  FlexBox,
  FlexItem,
};
