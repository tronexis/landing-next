import styled from "styled-components/macro";
import tw from "twin.macro";
import InputGroup from "./InputGroup";

const SigninForm = ({ ...props }) => {
  return (
    <Container action="#">
      <Heading>Sign in to your account</Heading>
      <InputGroup label="Email" name="email" type="email" />
      <InputGroup label="Password" name="password" type="password" />
      <Button>Continue</Button>
      <Link href="https://">Forgot Password</Link>
    </Container>
  );
};

const Container = styled.form`
  ${tw`bg-black text-white px-8 py-12 flex flex-col items-center space-y-6 rounded-md`}
`;

const Heading = styled.h1`
  ${tw`font-bold text-xl text-center`}
`;

const Button = styled.button`
  ${tw`bg-green-600 w-full text-xl p-3 rounded`}
`;

const Link = styled.a`
  ${tw`hover:underline`}
`;

export default SigninForm;
