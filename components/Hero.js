import { useState } from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowRightSLine, RiArrowRightLine } from "react-icons/ri";
import Button from "./Button";

const Hero = ({ ...props }) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(!hover);
  return (
    <Container>
      <VideoBG autoPlay loop muted src="/video.mp4" type="video/mp4" />
      <Overlay />
      <Content>
        <Heading>Virtual Banking Made Easy</Heading>
        <SubHeading>
          Sign up for a new account today and receive $250 in credit towards
          your next payment
        </SubHeading>
        <Button onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
          <span>Get Started</span>&nbsp;
          {hover ? <RiArrowRightLine /> : <RiArrowRightSLine />}
        </Button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  ${tw`h-screen w-full relative`}
`;

const VideoBG = styled.video`
  ${tw`absolute w-full h-full object-cover z-[-1]`}
  &:after {
    content: 'A'
    ${tw`bg-black text-white w-full h-full top-0 left-0`}
  }
`;

const Overlay = styled.div`
  ${tw`absolute w-full h-full bg-gradient-to-b from-[#0008] to-[#0008] z-[-1]`}
`;

const Content = styled.section`
  ${tw`flex flex-col items-center justify-center text-white text-center p-8 pt-20 space-y-8 h-full max-w-3xl mx-auto`}
`;

const Heading = styled.h1`
  ${tw`text-4xl xl:text-5xl font-bold`}
`;

const SubHeading = styled.p`
  ${tw`text-2xl xl:text-3xl`}
`;

export default Hero;
