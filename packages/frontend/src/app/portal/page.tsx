'use client';
import { list, ListAllWithPathOutput, getUrl } from 'aws-amplify/storage';
import { Collection, Text, Card } from '@aws-amplify/ui-react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

function Files() {
    useEffect(() => {
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                padding: '30px 5%',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
            }}
        >
        </Box>
    );
}

export default Files;
