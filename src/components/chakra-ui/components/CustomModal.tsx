import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react';

function CustomModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            style={{
                position: 'absolute',
                bottom: '10%',
                left: '50%'
            }}
        >
            <Button onClick={onOpen}>Click Me!</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Chakra Modal</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>Hello, I'm a modal created with ChakraUI</Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default CustomModal;