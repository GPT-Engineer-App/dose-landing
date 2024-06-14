import { Container, VStack, Text, Heading, Button, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          Welcome to InHaDose
        </Heading>
        <Text fontSize="lg">Innovative Medical Devices for a Healthier Future</Text>
        <Image src="https://images.unsplash.com/photo-1565647946321-a146ac24a220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGV2aWNlfGVufDB8fHx8MTcxODM5OTExMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Medical Device" borderRadius="md" boxSize="300px" objectFit="cover" />
        <Text fontSize="md">At InHaDose, we are committed to developing cutting-edge medical devices that improve patient outcomes and enhance the quality of healthcare. Our team of experts is dedicated to innovation, safety, and efficacy in every product we create.</Text>
        <Button colorScheme="teal" size="lg">
          Learn More
        </Button>
        <HStack spacing={4}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
