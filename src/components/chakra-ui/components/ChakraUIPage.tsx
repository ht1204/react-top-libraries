import { ChakraProvider } from "@chakra-ui/react";
import { Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import Header from "./Header";
import Hero from "./Hero";
import CustomModal from './CustomModal';

export function ChakraUIPage() {

  return (
    <ChakraProvider>
      <Header />
      <Hero />
      <CustomModal />
      <Text
        style={{
            position: 'absolute',
            bottom: '5%',
            left: '40%'
        }}
      >
        For more info, go to{' '}
        <Link href='https://chakra-ui.com/getting-started' isExternal>
            Chakra Design system documentation <ExternalLinkIcon mx='2px' />
        </Link>
      </Text>
    </ChakraProvider>
  );
}
