import { Button, Flex, Stack, Text, VStack } from "@chakra-ui/react"
import image from "../assets/1.jpg"

export default function Header() {
  return(
    <Flex 
      width="100vw" height="30vh"
      justify="center" align="center"
      backgroundImage={image}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <VStack color="white">
        <Text fontSize="3xl" fontWeight="200">DOMINA EL TERRENO</Text>
        <Stack marginTop={"20px"} flexDir={["column", "row", "row"]}>
          <Button background="transparent"
            border="1px" borderColor="white"
            color="white"
            rounded={"none"}
            _hover={{ background: "white", color: "black", border: "none" }}
            w={["282px", "120px", "120px"]}
            fontWeight="200"
          >
            VER DETALLES
          </Button>
          <Button background="transparent"
            border="1px" borderColor="white"
            color="white" rounded={"none"}
            _hover={{ background: "white", color: "black", border: "none" }}
            w={["282px", "120px", "120px"]}
            fontWeight="200"
          >
            VER VIDEO
          </Button>
        </Stack>
      </VStack>
    </Flex>
  )
}