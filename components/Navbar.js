import styled from "styled-components/macro";
import tw from "twin.macro";
import { Link, animateScroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Brand from "./Brand";

const Navbar = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => open && setOpen(false);

  const router = useRouter();
  const gotoSignin = () => {
    router.push("/signin");
    closeMenu();
  };
  

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () =>
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  useEffect(() => window.addEventListener("scroll", changeNav), []);

  return (
    <Wrapper path={router.pathname} scrollNav={scrollNav}>
      <Container open={open}>
        <NavSection>
          <Brand closeMenu={closeMenu} />
          <NavToggle open={open} onClick={() => setOpen(!open)} />
        </NavSection>
        <NavMenu open={open}>
          <NavLink onClick={closeMenu} to="about">
            About
          </NavLink>
          <NavLink onClick={closeMenu} to="discover">
            Discover
          </NavLink>
          <NavLink onClick={closeMenu} to="services">
            Services
          </NavLink>
          <NavLink onClick={closeMenu} to="signup">
            Sign up
          </NavLink>
        </NavMenu>
        <Button onClick={gotoSignin} open={open}>
          Sign in
        </Button>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  ${tw`transition fixed w-full top-0 left-0 z-10`}
  ${({ scrollNav, path }) => (scrollNav || path !== "/") && tw`bg-black`}
`;

const Container = styled.div`
  ${tw`transition text-white px-6 py-4 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between`}
  ${({ open }) =>
    open ? tw`h-screen md:h-auto bg-black md:bg-transparent` : tw`h-auto`}
`;

const NavSection = styled.section`
  ${tw`flex items-center w-full md:w-auto`}
`;

const NavLink = styled(({ children, ...props }) => (
  <Link {...props} smooth offset={-72} activeClass="active" spy={true}>
    {children}
  </Link>
))`
  ${tw`transition cursor-pointer hover:text-green-500`}
  &.active {
    ${tw`text-green-500`}
  }
`;

const NavToggle = styled(({ open, ...props }) =>
  open ? <FaTimes {...props} /> : <FaBars {...props} />
)`
  ${tw`md:hidden ml-auto text-xl cursor-pointer z-10`}
`;

const NavMenu = styled.div`
  ${tw`md:flex md:flex-row items-center md:space-x-6 md:font-medium md:text-lg`}
  ${({ open }) =>
    open ? tw`flex flex-col space-y-8 md:space-y-0 text-3xl` : tw`hidden`}
`;

const Button = styled.button`
  ${tw`transition bg-green-500 hover:bg-white py-2 px-4 rounded-full text-black font-semibold text-center w-48 md:w-24`}
  ${({ open }) => (open ? tw`inline-block` : tw`hidden md:inline-block`)}
`;

export default Navbar;
