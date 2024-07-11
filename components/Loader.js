import React from 'react';
import { ClipLoader } from 'react-spinners';
import { Center } from '@chakra-ui/react';

const Loader = ({ loading }) => (
    <Center h="100vh">
        <ClipLoader color="#319795" loading={loading} size={150} />
    </Center>
);

export default Loader;
