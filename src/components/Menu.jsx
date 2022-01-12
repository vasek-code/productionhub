import { VStack, Flex, Button } from "@chakra-ui/react";

export default function Menu() {
  return (
    <Flex
      h="100%"
      w="100%"
      position="absolute"
      pt="90px"
      background="blackAlpha.400"
      zIndex="2"
    >
      <Flex w="70%" background="#fff" zIndex="2" data-aos="fade-right">
        <VStack w="100%" h="100%" p="20px">
          <Flex w="100%">
            <Button size="lg">About</Button>
          </Flex>
          <Flex w="100%" pt="12px">
            <Button size="lg">Services</Button>
          </Flex>
          <Flex w="100%" pt="12px">
            <Button size="lg">Portfolio</Button>
          </Flex>
          <Flex w="100%" pt="12px">
            <Button size="lg">Contact</Button>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
}
