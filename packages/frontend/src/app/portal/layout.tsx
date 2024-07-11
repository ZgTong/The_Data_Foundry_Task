'use client';
import { useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import BackgroundSetter from '@components/widgets/BackgroundSetter';
import { useAppDispatch } from '@lib/hooks';
import theme from '@root/theme';

export default function SelectedWorksLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const dispatch = useAppDispatch();
    const KL_theme = theme;
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                position: 'relative',
            }}
            id={"portal"}
        >
            <BackgroundSetter />
            {children}
        </Box>
    );
}
