'use client';
import { useState, useEffect } from 'react';
import { Box, Fade } from '@mui/material';
import Loading from '@app/loading';
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
        <Fade in={isLoaded} timeout={1500} key={'topFade'}>
            <Box>{children}</Box>
        </Fade>
    ) : (
        <Loading />
    );
};

export default ClientHosting;
