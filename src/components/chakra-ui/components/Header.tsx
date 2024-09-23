import { useState } from "react";
import { Box, Link, Text, Stack, Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

type MenuToggleProps = {
    toggle: () => void;
    isOpen: boolean;
}

type MenuLinksProps = {
    isOpen: boolean;
}


const Logo = () => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" color="black">
        Company
      </Text>
    </Box>
  );
};

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <Box 
      display={{ base: "flex", md: "block" }} 
      onClick={toggle}
    >
      {isOpen ? (
        <IconButton 
          icon={<CloseIcon />} 
          aria-label={"Close Menu"}
        />
      ) : (
        <IconButton 
          icon={<HamburgerIcon />} 
          aria-label={"Open Menu"}
        />
      )}
    </Box>
  );
};

const MenuItem = ({ children, to = "/chakra-ui", ...rest }: any) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }: MenuLinksProps) => {
  return (
    <Box
      display={{ base: isOpen ? "flex" : "none"}}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem>Home</MenuItem>
        <MenuItem to="#">Products</MenuItem>
        <MenuItem to="#">Company Profile</MenuItem>
        <MenuItem to="#">Services</MenuItem>
        <MenuItem to="#">Contact Us</MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children }: any) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      width="100%"
      padding={8}
      bg={"transparent"}
      color={"gray.600"}
    >
      {children}
    </Flex>
  );
};

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo />
      <MenuLinks isOpen={isOpen} />
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
    </NavBarContainer>
  );
}

export default Header;
