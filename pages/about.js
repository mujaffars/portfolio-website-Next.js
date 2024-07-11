import Head from 'next/head';
import { Box, Container, Heading, Text, Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ModalComponent from '../components/ModalComponent'; // Import your ModalComponent
import FormikForm from '../components/FormikForm';
import { useState } from 'react'; // Import useState hook
import UserList from '../components/ComponentDidMountHook';

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

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

                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td isNumeric>30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td isNumeric>0.91444</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>

                <FormikForm />

                <CircularProgress value={30} size='120px' />
                <UserList />
            </Box>
        </ChakraProvider>
    );
}
