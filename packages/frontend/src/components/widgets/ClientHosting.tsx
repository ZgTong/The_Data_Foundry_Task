'use client';
import { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Box, Fade, Button } from '@mui/material';
import Loading from '@app/loading';
import awsExports from '@src/aws-exports';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);
const ClientHosting: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const handleLoad = () => setIsLoaded(true);
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);
    return isLoaded ? (
        <Authenticator>
            {({ signOut, user }) => (
                <Fade in={isLoaded} timeout={1500} key={'topFade'}>
                    <Box>
                        {children}
                        <Button onClick={signOut}>Sign out</Button>
                    </Box>
                </Fade>
            )}
        </Authenticator>
    ) : (
        <Loading />
    );
};

export default ClientHosting;
