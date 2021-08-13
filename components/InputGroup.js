import styled from 'styled-components/macro';
import tw from 'twin.macro';

const InputGroup = ({ label, name, type, ...props}) => {
  return (
    <Container>
      <Label for={name}>{label}</Label>
      <Input name={name} type={type}/>
    </Container>
  )
};

const Container = styled.div`
  ${tw`flex flex-col space-y-1`}
`;

const Label = styled.label`
  ${tw``}
`;

const Input = styled.input`
  ${tw`text-xl w-72 p-2 text-black rounded`}
`;

export default InputGroup;