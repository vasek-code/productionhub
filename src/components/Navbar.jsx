import { Flex, Container, Image, Button } from "@chakra-ui/react";
import { CgMenuRightAlt } from "react-icons/cg";
import Menu from "./Menu";
import { useState } from "react";
import NextLink from "next/link";

export default function Navbar() {
  const [menuShowed, setMenuShowed] = useState(false);

  return (
    <>
      {menuShowed ? <Menu /> : <></>}
      <Flex
        w="100%"
        h="90px"
        background="#fff"
        boxShadow="0 0.5rem 1rem rgb(0 0 0 / 15%)"
        position="fixed"
        zIndex="3"
      >
        <Container maxW="container.md">
          <Flex w="100%" h="100%" justify="space-between">
            <Flex h="100%" align="center">
              <NextLink href="/">
                <Image
                  src="/images/productionhub.png"
                  w="250px"
                  cursor="pointer"
                />
              </NextLink>
            </Flex>
            <Flex h="100%" align="center">
              <Button
                _hover={{ cursor: "pointer" }}
                onClick={() => {
                  setMenuShowed(!menuShowed);
                }}
                background="transparent"
                p={0}
                h="45px"
              >
                <CgMenuRightAlt
                  style={{
                    width: "35px",
                    height: "auto",
                    color: "#020303",
                    margin: "5px",
                  }}
                />
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
