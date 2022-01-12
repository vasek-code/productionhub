import {
  Box,
  Container,
  Flex,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import NextLink from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertRed, setAlertRed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (password.length < 8) {
      setAlertMessage("");
      setTimeout(() => {
        setAlertMessage("Password is too short.");
      }, 50);
      return;
    }

    fetch("http://localhost:3000/api/signIn", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message === "success") {
          setAlertMessage("");
          setTimeout(() => {
            setAlertRed(true);
            setAlertMessage("Success!");
          }, 50);

          return;
        }

        if (data.error) {
          setAlertMessage("");
          setTimeout(() => {
            setAlertRed(false);
            setAlertMessage(data.error);
          }, 50);

          return;
        }
      });
  }

  return (
    <>
      {alertMessage ? (
        <Flex
          width="100%"
          position="fixed"
          zIndex="5"
          px="20px"
          data-aos="fade-down"
          mt={5}
        >
          <Alert status={!alertRed ? "error" : "success"} borderRadius="10px">
            <Flex align="center" justify="space-between" w="100%">
              <Flex>
                <AlertIcon />
                {alertMessage}
              </Flex>
              <CloseButton onClick={() => setAlertMessage("")} />
            </Flex>
          </Alert>
        </Flex>
      ) : (
        <></>
      )}
      <Box w="100%" minH="100vh" backgroundImage="images/1.jpg" pt="90px">
        <Flex
          align="center"
          h="100%"
          pb="20px"
          pt={["20px", "60px", "60px", "60px"]}
        >
          <Container maxW="container.md">
            <VStack
              p="40px"
              borderRadius="20px"
              shadow="xl"
              backgroundColor="#fff"
            >
              <Flex w="100%">
                <VStack align="flex-start">
                  <Heading>Log In</Heading>
                  <NextLink href="/signup">
                    <Button variant="link">Don't have an account?</Button>
                  </NextLink>
                </VStack>
              </Flex>
              <Flex w="100%" pt="50px">
                <FormControl
                  border="1px"
                  as="form"
                  borderColor="gray.200"
                  p={5}
                  borderRadius="20px"
                  onSubmit={handleSubmit}
                >
                  <Box mb="50px">
                    <FormLabel htmlFor="email" fontWeight="bold">
                      Email address
                    </FormLabel>
                    <Input
                      id="email"
                      type="email"
                      maxW="500px"
                      shadow="xs"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </Box>

                  <Box mb="50px">
                    <FormLabel htmlFor="password" fontWeight="bold">
                      Create password
                    </FormLabel>
                    <Input
                      id="password"
                      type="password"
                      maxW="500px"
                      shadow="xs"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                    <FormHelperText>
                      We'll never ask for your password.
                    </FormHelperText>
                  </Box>

                  <Button
                    type="submit"
                    colorScheme="blue"
                    background="#6597c5"
                    rightIcon={<HiArrowSmRight />}
                  >
                    Log In
                  </Button>
                </FormControl>
              </Flex>
            </VStack>
          </Container>
        </Flex>
      </Box>
    </>
  );
}
