import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,Text
} from "@chakra-ui/react";
import React from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import {BsPhone } from 'react-icons/bs'
import {AiOutlineGoogle} from 'react-icons/ai'
export const Navbarfirst = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#F7F8F9" }}
      >
        <a className="navbar-brand" href="kk" style={{ marginTop: "-10px" }}>
          <svg
            width="48px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
            fillRule="evenodd"
          >
            <path
              className="rui-4K4Y7"
              d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
            ></path>
          </svg>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <HStack>
              <li className="nav-item active">
                <select
                  className="custom-select custom-select-lg mb-3"
                  style={{ width: "250px", border: "2px solid #000" }}
                >
                  <option>India</option>
                  <option value="1">Maharshtra</option>
                  <option value="2">Kerla</option>
                  <option value="3">Goa</option>
                  <option value="3">Kernatak</option>
                </select>
              </li>
            </HStack>
            <li className="nav-item">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Find car, mobiles phones and more..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  style={{
                    width: "600px",
                    padding: "10px",
                    marginLeft: "20px",
                    border: "2px solid #000",
                  }}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    id="basic-addon2"
                    style={{
                      backgroundColor: "#002F34",
                      padding: "10px",
                      border: "2px solid #002F34",
                    }}
                  >
                    <FiSearch color="#fff" fontSize={"25px"} />
                  </span>
                </div>
              </div>
            </li>

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="kk"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b>English</b>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="kk">
                  English
                </a>
                <a className="dropdown-item" href="kk">
                  हिंदी
                </a>
              </div>
            </li> */}
            <li className="nav-item">
              <select
                className="custom-select  border-0"
                style={{
                  backgroundColor: "#F7F8F9",
                  fontWeight: "700",
                  marginLeft: "20px",
                }}
              >
                <option value="1">English</option>
                <option value="2">हिंदी</option>
              </select>
            </li>
            <li className="nav-item" style={{ marginLeft: "20px" }}>
              <Button
                colorScheme="gray"
                border={"none"}
                variant="outline"
                onClick={onOpen}
              >
                Login
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Box width={'100%'} >
                        <Button width={'100%'} textAlign="center" colorScheme='teal' variant='outline'> 
                        <BsPhone /> Continue With Phone
                        </Button>
                        <Button my={'20px'} width={'100%'} colorScheme='teal' variant='outline'> 
                        <AiOutlineGoogle />  Continue With Google
                        </Button>
                      </Box>
                      <Container mb="100px">
                        <VStack>
                        <Heading  size="xs">
                          OR
                          </Heading>
                          <Heading   size="xs" textAlign={'center'}>
                            Login with Email
                          </Heading>
                        </VStack>
                      </Container>
                      <Container>
                        <VStack>
                        
                          <Heading   size="xs" fontWeight="400">
                            All your personal details are safe with us.
                          </Heading>
                          <Heading  size="xs" textAlign={'center'} fontWeight="400">
                            If you continue, you are accepting 
                            <Text  color={'blue'} size="xs" textAlign={'center'} fontWeight="400">
                            OLX Terms and
                            Conditions and Privacy Policy
                            </Text>
                          </Heading>
                        </VStack>
                      </Container>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Button>
            </li>
            <li className="nav-item">
              <Button
                leftIcon={<FiPlus />}
                borderRadius="20px"
                colorScheme="light"
                color={'#000'}
                variant="solid"
                marginLeft={"20px"}
                width="90px"
                onClick={onOpen}
                borderTop="5px solid #23E5DB"
                borderRight="5px solid #3A77FF"
                borderLeft="5px solid #FFCE32"
                borderBottom="5px solid red"
              >
                SELL
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
