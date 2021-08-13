import styled from "styled-components/macro";
import tw from "twin.macro";
import Card from "./Card";

const Services = ({ ...props }) => {
  return (
    <Wrapper>
      <Container id="services">
        <Content>
          <Heading>Our Services</Heading>
          <CardGroup>
            <Card />
            <Card />
            <Card />
          </CardGroup>
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${tw`bg-black text-white`}
`;

const Container = styled.div`
  ${tw`max-w-4xl mx-auto py-14`}
`;

const Content = styled.div`
  ${tw`p-6 space-y-10`}
`;

const Heading = styled.h2`
  ${tw`text-5xl font-bold text-center`}
`;

const CardGroup = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-3 gap-6`}
`;

export default Services;
