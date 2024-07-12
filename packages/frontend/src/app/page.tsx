'use client';
import { FC, memo } from 'react';
import { Box, ThemeProvider, Typography } from '@mui/material';
import theme from '@root/theme';
import { useAppSelector } from '@lib/hooks';
import BackgroundSetter from '@components/widgets/BackgroundSetter';
import BrandLogo from '@components/widgets/BrandLogo';


const Home: FC = memo(({}, searchParams) => {
    const username = useAppSelector((state) => state.app.username);
    const KL_theme = theme;
    return (        
        <ThemeProvider theme={KL_theme}>
            <BackgroundSetter />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '100%',
                        fontWeight: 'bold',
                        height: '50vh',
                        gap: '30px',
                    }}
                >
                    <Typography variant='h4'>Welcome: {username}</Typography>
                    <BrandLogo />
                </Box>
            </Box>
        </ThemeProvider>
    );
});
export default Home;
