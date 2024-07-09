import Head from 'next/head';
import { Box, Container, Heading, Text, Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import ModalComponent from '../components/ModalComponent'; // Import your ModalComponent
import { useState } from 'react'; // Import useState hook

export default function About() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('More details About me'); // Default title
    const [modalDescription, setModalDescription] = useState('Modal description goes here...'); // Default description


    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <ChakraProvider>
            <Box bg="gray.100" minH="100vh">
                <Navbar />
                <Head>
                    <title>About Me</title>
                </Head>
                <Container maxW="4xl" py={8}>
                    <Heading as="h1" size="2xl" mb={4} color="gray.800">
                        About Me
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                        Here's a bit about me...
                    </Text>
                    <Button mt={4} onClick={handleOpenModal}>
                        Open Modal
                    </Button>
                    <ModalComponent
                        isOpen={isOpen}
                        onClose={handleCloseModal}
                        title={modalTitle}
                        description={modalDescription}
                    />
                </Container>
            </Box>
        </ChakraProvider>
    );
}
