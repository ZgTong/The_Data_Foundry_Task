'use client';
import { FC, memo, useEffect } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import theme from '@root/theme';
import { useAppDispatch, useAppSelector } from '@lib/hooks';
import BackgroundSetter from '@components/widgets/BackgroundSetter';
import { initialAppState } from '@lib/features/appSlice';


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
                        height: '50'
                    }}
                >
                    Welcome: {username}
                </Box>
            </Box>
        </ThemeProvider>
    );
});
export default Home;
