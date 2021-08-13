import styled from 'styled-components/macro';
import tw from 'twin.macro';

const LinkGroup = ({...props}) => {
  return (
    <Container>
      <Title>About Us</Title>
      <Link href="#">How it Works</Link>
      <Link href="#">Testimonials</Link>
      <Link href="#">Careers</Link>
      <Link href="#">Investors</Link>
      <Link href="#">Terms of Service</Link>
    </Container>
  )
};

const Container = styled.div`
  ${tw`grid text-white`}
`;

const Title = styled.h5`
  ${tw`font-bold mb-3`}
`;

const Link = styled.a`
  ${tw`transition font-medium hover:text-green-500`}
`;

export default LinkGroup;