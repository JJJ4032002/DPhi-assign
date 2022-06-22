import React from "react";
import HeroImage from "../../assets/icons/HeroImg.svg";
import Button from "../Elements/Button";
import {
  HeroComponent,
  Content,
  HeroHeading,
  HeroImg,
  HeroText,
  LineDecorator,
  FlexBox,
  FlexItem,
} from "./HeroCss";

function Hero() {
  return (
    <HeroComponent>
      <Content>
        <FlexItem>
          <HeroImg src={HeroImage} alt="Hero Img"></HeroImg>
        </FlexItem>
        <FlexItem>
          <FlexBox>
            <LineDecorator></LineDecorator>
            <HeroHeading>
              Accelerate Innovation with Global AI Challenges
            </HeroHeading>
          </FlexBox>
          <HeroText>
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </HeroText>
          <Button>Create Challenge</Button>
        </FlexItem>
      </Content>
    </HeroComponent>
  );
}

export default Hero;
