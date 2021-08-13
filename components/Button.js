import styled from "styled-components/macro";
import tw from "twin.macro";

const Button = styled.button`
  ${tw`transition bg-green-500 px-6 py-2 rounded-full text-black hover:bg-white text-lg xl:text-xl font-semibold flex items-center justify-center`}
  ${({ alternate }) =>
    alternate && tw`bg-black text-white hover:bg-green-500 hover:text-black`}
`;

export default Button;
