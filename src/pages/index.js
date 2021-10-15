import { Center, Text } from "@chakra-ui/react"
import Clock from "../components/Clock"

export default function Home() {
  return (
    <div>
      <Center bg="white" h="100vh" color="black">
        <Text textStyle="clock" fontSize="18vw" fontWeight="extrabold" fontFamily="Roboto">
          <Clock />
        </Text>
      </Center>
    </div>
  )
}
