import styled from "styled-components/macro";
import tw from "twin.macro";

const Card = ({ ...props }) => {
  return (
    <Container>
      <Image src="/undraw_off_road_9oae.svg" alt="Off Road Driving" />
      <TextWrapper>
        <Title>Lorem, ipsum.</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          obcaecati!
        </Description>
      </TextWrapper>
    </Container>
  );
};

const Container = styled.div`
  ${tw`transition bg-white text-black rounded-xl text-center p-6 space-y-6 transform hover:scale-105 cursor-pointer`}
`;

const Image = styled.img`
  ${tw`w-48 mx-auto`}
`;

const TextWrapper = styled.div`
  ${tw``}
`;

const Title = styled.h4`
  ${tw`font-black text-lg`}
`;

const Description = styled.p`
  ${tw`font-medium`}
`;

export default Card;
