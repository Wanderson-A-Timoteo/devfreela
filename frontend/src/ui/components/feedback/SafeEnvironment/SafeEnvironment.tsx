import React from 'react';
import { SafeEnvironmentContainer } from './SafeEnvironment.style';
import { Container } from '@material-ui/core';

const SafeEnvironment = () => {
    return (
        <SafeEnvironmentContainer>
            <Container>
                Ambiente Seguro <img src={'/img/icones/lock.png'} alt={'Cadeado Site Seguro'} />
            </Container>
        </SafeEnvironmentContainer>
    );
};

export default SafeEnvironment;
