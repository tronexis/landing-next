import styled from "styled-components/macro";
import tw from "twin.macro";
import Button from "./Button";

const Signup = ({ ...props }) => {
  return (
    <Wrapper>
      <Container id="signup">
        <TextGroup>
          <SubHeading>Lorem, ipsum.</SubHeading>
          <Heading>Lorem ipsum dolor sit amet.</Heading>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            dolores ipsam officia nisi facilis vero, sit maiores porro sint
            ducimus!
          </Description>
          <Button>Get Started</Button>
        </TextGroup>
        <ImageWrapper>
          <Image src="/undraw_off_road_9oae.svg" alt="Off Road Driving" />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${tw`bg-white text-black`}
`;

const Container = styled.div`
  ${tw`max-w-4xl mx-auto py-14 grid grid-cols-1 md:grid-cols-2`}
`;

const TextGroup = styled.div`
  ${tw`space-y-4 p-6`}
`;

const SubHeading = styled.h3`
  ${tw`text-green-500 uppercase font-semibold text-xl`}
`;

const Heading = styled.h2`
  ${tw`text-5xl font-bold`}
`;

const Description = styled.p`
  ${tw``}
`;

const ImageWrapper = styled.div`
  ${tw`p-6 md:order-first`}
`;

const Image = styled.img`
  ${tw``}
`;

export default Signup;
