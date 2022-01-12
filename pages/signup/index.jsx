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

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertRed, setAlertRed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConf) {
      setAlertMessage("");
      setTimeout(() => {
        setAlertMessage("Your passwords doesn't match.");
      }, 50);

      return;
    }

    if (password.length < 8) {
      setAlertMessage("");
      setTimeout(() => {
        setAlertMessage("Your passwords is too short.");
      }, 50);

      return;
    }

    fetch("http://localhost:3000/api/createAccount", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setAlertMessage("");
          setTimeout(() => {
            setAlertMessage("User already exists.");
          }, 50);
          return;
        }
        setAlertMessage("");
        setTimeout(() => {
          setAlertMessage("Success!");
          setAlertRed(true);
        }, 50);
        setEmail("");
        setPassword("");
        setPasswordConf("");

        console.log(data);
      })
      .catch((e) => console.error(e));
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
          <Container maxW="container.md" data-aos="fade-right">
            <VStack
              p="40px"
              borderRadius="20px"
              shadow="xl"
              backgroundColor="#fff"
            >
              <Flex w="100%">
                <VStack align="flex-start">
                  <Heading>Create an account</Heading>
                  <NextLink href="/login">
                    <Button variant="link">Already have an account?</Button>
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
                    <FormHelperText>
                      We'll never share your email.
                    </FormHelperText>
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

                  <Box mb="50px">
                    <FormLabel htmlFor="password" fontWeight="bold">
                      Confirm password
                    </FormLabel>
                    <Input
                      id="passwordConf"
                      type="password"
                      maxW="500px"
                      shadow="xs"
                      onChange={(e) => setPasswordConf(e.target.value)}
                      value={passwordConf}
                      required
                    />
                    <FormHelperText>
                      Please make your password strong.
                    </FormHelperText>
                  </Box>

                  <Button
                    type="submit"
                    colorScheme="blue"
                    background="#6597c5"
                    rightIcon={<HiArrowSmRight />}
                  >
                    Next
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
