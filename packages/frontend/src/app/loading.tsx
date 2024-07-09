import { FC, memo } from 'react';
import { Box, CircularProgress } from '@mui/material';
const Loading: FC = memo(() => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundSize: '100% auto',
                backgroundPosition: 'top left',
                backgroundRepeat: 'no-repeat',
                zIndex: 100000,
            }}
        >
            <CircularProgress color={'warning'} />
        </Box>
    );
});
export default Loading;
