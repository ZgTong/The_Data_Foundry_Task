'use client';
import { ListOutputItemWithPath } from '@aws-amplify/storage/dist/esm/providers/s3/types';
import { list, ListAllWithPathOutput, getUrl } from 'aws-amplify/storage';
import { Collection, Image, Text, Card } from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

function Files() {
    const [imgFiles, setImgFiles] = useState<ListOutputItemWithPath[]>([]);
    const [pdfFiles, setPdfFiles] = useState<ListOutputItemWithPath[]>([]);

    useEffect(() => {
        const listFiles = async () => {
            const processStorageList = (response: ListAllWithPathOutput) => {
                let files: ListOutputItemWithPath[] = [];
                let folders = new Set();
                response.items.forEach((res: ListOutputItemWithPath) => {
                    if (res.size) {
                        files.push(res);
                        // sometimes files declare a folder with a / within then
                        let possibleFolder = res.path
                            .split('/')
                            .slice(0, -1)
                            .join('/');
                        if (possibleFolder) folders.add(possibleFolder);
                    } else {
                        folders.add(res.path);
                    }
                });
                return { files, folders };
            };
            const allImgFiles: ListAllWithPathOutput = await list({
                path: 'public/images/',
                options: {
                    listAll: true,
                },
            });
            const allPdfFiles: ListAllWithPathOutput = await list({
                path: 'public/pdf/',
                options: {
                    listAll: true,
                },
            });
            const img_processed = processStorageList(allImgFiles);
            const pdf_processed = processStorageList(allPdfFiles);
            
            img_processed.files && setImgFiles(img_processed.files);
            pdf_processed.files && setPdfFiles(pdf_processed.files);
        };
        listFiles();
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                padding: '30px 5%',
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <Box
                sx={{
                    width: '50%',
                }}
            >
                <Typography variant='h4'>Images</Typography>
                <Collection items={imgFiles} type='list'>
                    {(item, index) => (
                        <Card key={index} variation='outlined'>
                            <Text
                                variation='primary'
                                as='p'
                                style={{
                                    textAlign: 'left',
                                    textDecoration: 'underline',
                                }}
                            >
                                {item.path.split('/').pop()}
                            </Text>
                            <Image
                                alt={item.path.split('/').pop()}
                                src={item.path}
                                objectFit='initial'
                                objectPosition='50% 50%'
                                backgroundColor='initial'
                                height='75%'
                                width='75%'
                                opacity='100%'
                            />
                        </Card>
                    )}
                </Collection>
            </Box>
            <Box
                sx={{
                    width: '50%',
                }}
            >
                <Typography variant='h4'>PDFs</Typography>
                <Collection items={pdfFiles} type='list'>
                    {(item, index) => (
                        <Text
                            variation='primary'
                            as='p'
                            key={index}
                            style={{
                                textAlign: 'left',
                                textDecoration: 'underline',
                            }}
                        >
                            {item.path.split('/').pop()}
                        </Text>
                    )}
                </Collection>
            </Box>
        </Box>
    );
}

export default Files;
