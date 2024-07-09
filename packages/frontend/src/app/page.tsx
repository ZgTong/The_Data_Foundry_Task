'use client';
import { FC, memo, useEffect } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import theme from '@root/theme';
import { useAppDispatch } from '@lib/hooks';
import BackgroundSetter from '@components/widgets/BackgroundSetter';
import { initialAppState } from '@lib/features/appSlice';

const Home: FC = memo(({}, searchParams) => {
    const dispatch = useAppDispatch();
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
                Test Home
            </Box>
        </ThemeProvider>
    );
});
export default Home;
