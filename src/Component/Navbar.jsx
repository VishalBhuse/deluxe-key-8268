import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  MenuOptionGroup,
  MenuItemOption,
  MenuGroup,
} from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            // icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink>fi</NavLink>
              <NavLink>fi</NavLink>
              <NavLink>fi</NavLink>
              <Menu closeOnSelect={false}>
                <MenuButton>All Category</MenuButton>
                <Box>
                  <HStack>
                    <Box>
                      <MenuList>
                        <MenuGroup title="Profile">
                          <MenuItem> For Sale: Houses & Apartments</MenuItem>
                          <MenuItem>For Rent: Houses & Apartments</MenuItem>
                          <MenuItem>Lands & Plots</MenuItem>
                          <MenuItem>For Rent: Shops & Offices</MenuItem>
                          <MenuItem>For Sale: Shops & Offices</MenuItem>
                          <MenuItem>PG & Guest Houses </MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title="Mobiles">
                          <MenuItem>Mobile Phones</MenuItem>
                          <MenuItem>Accessories</MenuItem>
                          <MenuItem>Tablets</MenuItem>
                        </MenuGroup>
                      </MenuList>
                    </Box>
                    <Box>
                      <MenuList>
                        <MenuGroup title="Profile">
                          <MenuItem> For Sale: Houses & Apartments</MenuItem>
                          <MenuItem>For Rent: Houses & Apartments</MenuItem>
                          <MenuItem>Lands & Plots</MenuItem>
                          <MenuItem>For Rent: Shops & Offices</MenuItem>
                          <MenuItem>For Sale: Shops & Offices</MenuItem>
                          <MenuItem>PG & Guest Houses </MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title="Mobiles">
                          <MenuItem>Mobile Phones</MenuItem>
                          <MenuItem>Accessories</MenuItem>
                          <MenuItem>Tablets</MenuItem>
                        </MenuGroup>
                      </MenuList>
                    </Box>
                  </HStack>
                </Box>
              </Menu>
              <NavLink>fi</NavLink>
              <NavLink>fi</NavLink>
              <NavLink>fi</NavLink>


            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
};
