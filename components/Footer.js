import styled from "styled-components/macro";
import tw from "twin.macro";
import LinkGroup from "./LinkGroup";

const Footer = ({ ...props }) => {
  return (
    <Wrapper>
      <Container>
        <LinkGrid>
          <LinkGroup />
          <LinkGroup />
          <LinkGroup />
          <LinkGroup />
        </LinkGrid>
        <TextGroup>
          <Brand>dolla</Brand>
          <Text>&copy; {new Date().getFullYear()} All rights reserved.</Text>
        </TextGroup>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  ${tw`bg-gray-900`}
`;

const Container = styled.div`
  ${tw`max-w-4xl py-14 mx-auto text-white space-y-4`}
`;

const LinkGrid = styled.div`
  ${tw`grid grid-cols-2 md:grid-cols-4 gap-8 px-20 py-8`}
`;

const TextGroup = styled.div`
  ${tw`text-center space-y-1 flex flex-col`}
`;

const Brand = styled.b`
  ${tw`text-2xl`}
`;

const Text = styled.small`
  ${tw``}
`;

export default Footer;
