import styled from "styled-components/macro";
import tw from "twin.macro";
import { useRouter } from "next/router";
import { animateScroll } from "react-scroll";

const Brand = styled(({ closeMenu, ...props }) => {
  const router = useRouter();
  const gotoHome = (e) => {
    e.preventDefault();
    if (router.pathname === "/") {
      animateScroll.scrollToTop();
      closeMenu();
    } else router.push("/");
  };
  return (
    <a {...props} onClick={gotoHome} href="#">
      dolla
    </a>
  );
})`
  ${tw`text-2xl text-white font-bold md:w-24 h-10 grid items-center`}
`;

export default Brand;
