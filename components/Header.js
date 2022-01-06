import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { staticMenuItems } from "../utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Breakpoints, theme } from "../styles/styles";
import { useMenuItems } from "../hooks/useMenuItems";
import { AiOutlineArrowRight } from "react-icons/ai";
import { DropDownContent } from "./DropDownContent";
import { Loader } from "./Loader";

const StyledHeader = styled.header({
  display: "flex",
  paddingTop: 20,
  paddingBottom: 20,
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: theme.colors.primary,
});

const Items = styled.ul(() => ({
  display: "none",
  fontSize: "1.2em",
  position: "relative",
  [Breakpoints.Large]: {
    display: "flex",
  },
  listStyle: "none",
  padding: 0,
  li: {
    padding: "0px 1em",
  },
  a: {
    textDecoration: "none",
    color: theme.colors.dark,
    textTransform: "capitalize",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Logo = styled.div({
  height: 38,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  a: {
    textDecoration: "none",
    color: theme.colors.dark,
  },
});

const HeaderTitle = styled.h1({
  padding: 0,
  fontSize: 24,
});

const MobileHeader = styled.div(({ isOpen }) => ({
  height: "100%",
  width: isOpen ? "100%" : 0,
  position: "fixed",
  zIndex: 1,
  top: 0,
  left: 0,
  backgroundColor: theme.colors.light,
  overflowX: "hidden",
  transition: "0.5s",
  zIndex: 10,
  a: {
    textDecoration: "none",
    color: theme.colors.dark,
    textTransform: "capitalize",
    width: "100%",
  },
}));

const HeaderTop = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  backgroundColor: theme.colors.accent,
  height: 60,
});

const CloseButton = styled(ImCross)({
  padding: "0.5em",
  fontSize: 36,
  color: theme.colors.dark,
});
const MobileItems = styled.ul(() => ({
  display: "block",
  [Breakpoints.Large]: {
    display: "none",
  },
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: 0,
  height: "70%",
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.1rem",
    padding: " 1em",
    borderBottom: `1px solid ${theme.colors.divider}`,
    a: {
      textDecoration: "none",
    },
  },
}));

const Cart = styled.div({
  display: "flex",
  justifyContent: "center",
});

const MenuButton = styled(GiHamburgerMenu)({
  display: "block",
  [Breakpoints.Large]: {
    display: "none",
  },
});

const Badge = styled.span({
  fontWeight: "bold",
});

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [subMenu, setSubMenu] = useState();
  const menuItems = useMenuItems();

  return (
    <>
      <StyledHeader>
        {menuItems ? (
          <>
            <MenuButton size={24} onClick={() => setToggle(!toggle)} />
            <Logo>
              <Link href="/">
                <a>
                  <HeaderTitle>by.ewa.ang</HeaderTitle>
                </a>
              </Link>
            </Logo>

            <Items>
              {staticMenuItems.map((item) => {
                return (
                  <li>
                    <Link href={item.url} key={item.name}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              {menuItems.map((item) => {
                return (
                  <li
                    key={item._id}
                    onMouseEnter={() => {
                      setToggleDropDown(true), setSubMenu(item.subCategories);
                    }}
                  >
                    <Link
                      href={{
                        pathname: "/category/[param]",
                        query: { param: item.title },
                      }}
                      passHref
                    >
                      <a>{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </Items>

            <Cart>
              <a
                className="header__summary snipcart-checkout snipcart-summary"
                href="#"
                style={{ textDecoration: "none" }}
              >
                <svg
                  width="31"
                  height="27"
                  viewBox="0 0 31 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.10512 0.368718C0.560256 0.368718 0.118164 0.812066 0.118164 1.35848C0.118164 1.9049 0.560256 2.34824 1.10512 2.34824H4.90887L8.30138 18.4009C8.43503 19.0053 8.83085 19.5079 9.32946 19.5041H25.7788C26.3005 19.5118 26.7799 19.0375 26.7799 18.5143C26.7799 17.9911 26.3006 17.5168 25.7788 17.5245H10.1315L9.71003 15.545H27.095C27.5371 15.5412 27.9547 15.2048 28.0511 14.7718L30.354 4.87412C30.4825 4.29933 29.9852 3.67172 29.3979 3.66786H7.21171L6.6771 1.15221C6.58329 0.71276 6.15921 0.368652 5.7107 0.368652L1.10512 0.368718ZM7.623 5.64746H12.7634L13.2569 8.61674H8.25005L7.623 5.64746ZM14.7785 5.64746H20.9881L20.4946 8.61674H15.2719L14.7785 5.64746ZM23.0031 5.64746H28.1537L27.4649 8.61674H22.5097L23.0031 5.64746ZM8.67181 10.5963H13.5862L14.0797 13.5656H9.29919L8.67181 10.5963ZM15.6009 10.5963H20.1656L19.6721 13.5656H16.0944L15.6009 10.5963ZM22.1807 10.5963H27.0023L26.3135 13.5656H21.6872L22.1807 10.5963ZM12.6197 20.164C10.8141 20.164 9.32979 21.6525 9.32979 23.4632C9.32979 25.2739 10.8141 26.7624 12.6197 26.7624C14.4252 26.7624 15.9095 25.2739 15.9095 23.4632C15.9095 21.6525 14.4252 20.164 12.6197 20.164ZM22.4892 20.164C20.6837 20.164 19.1994 21.6525 19.1994 23.4632C19.1994 25.2739 20.6837 26.7624 22.4892 26.7624C24.2948 26.7624 25.7791 25.2739 25.7791 23.4632C25.7791 21.6525 24.2948 20.164 22.4892 20.164ZM12.6197 22.1435C13.3586 22.1435 13.9356 22.7222 13.9356 23.4632C13.9356 24.2042 13.3586 24.7829 12.6197 24.7829C11.8807 24.7829 11.3037 24.2042 11.3037 23.4632C11.3037 22.7222 11.8807 22.1435 12.6197 22.1435ZM22.4892 22.1435C23.2282 22.1435 23.8052 22.7222 23.8052 23.4632C23.8052 24.2042 23.2282 24.7829 22.4892 24.7829C21.7503 24.7829 21.1733 24.2042 21.1733 23.4632C21.1733 22.7222 21.7503 22.1435 22.4892 22.1435Z"
                    fill={theme.colors.dark}
                  />
                </svg>
              </a>
              <Badge>
                (<span className="snipcart-items-count"></span>)
              </Badge>
            </Cart>
            {toggle && (
              <MobileHeader isOpen={toggle}>
                <HeaderTop>
                  <CloseButton size={16} onClick={() => setToggle(!toggle)} />
                </HeaderTop>

                {menuItems && (
                  <MobileItems isMobile>
                    {staticMenuItems.map((item) => {
                      return (
                        <li onClick={() => setToggle(!toggle)} key={item.name}>
                          <Link href={item.url}>{item.name}</Link>
                          <AiOutlineArrowRight size={"1.5rem"} />
                        </li>
                      );
                    })}
                    {menuItems.map((item) => {
                      return (
                        <li key={item._id} onClick={() => setToggle(!toggle)}>
                          <Link
                            href={{
                              pathname: "/category/[param]",
                              query: { param: item.title },
                            }}
                            passHref
                          >
                            <a>{item.title}</a>
                          </Link>
                          <AiOutlineArrowRight size={"1.5rem"} />
                        </li>
                      );
                    })}
                  </MobileItems>
                )}
              </MobileHeader>
            )}
          </>
        ) : (
          <Loader />
        )}
      </StyledHeader>
      {toggleDropDown && subMenu && (
        <div onMouseLeave={() => setToggleDropDown(false)}>
          {subMenu.map((sub) => (
            <DropDownContent>{sub.name}</DropDownContent>
          ))}
        </div>
      )}
    </>
  );
}
