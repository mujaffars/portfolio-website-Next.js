import React, { Component } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    TableCaption,
    Center
} from '@chakra-ui/react';
import { ClipLoader } from 'react-spinners';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        // Fetch data from an API when the component is mounted
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({ users: data, loading: false }))
            .catch(error => this.setState({ error, loading: false }));
    }

    render() {
        const { users, loading, error } = this.state;

        if (loading) {
            return (
                <Center h="100vh">
                    <ClipLoader color="#319795" loading={loading} size={150} />
                </Center>
            );
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Phone</Th>
                            <Th>Website</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map(user => (
                            <Tr key={user.id}>
                                <Td>{user.name}</Td>
                                <Td>{user.email}</Td>
                                <Td>{user.phone}</Td>
                                <Td>{user.website}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        );
    }
}

export default UserList;