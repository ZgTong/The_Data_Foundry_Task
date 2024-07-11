'use client';
import { ListOutputItemWithPath } from '@aws-amplify/storage/dist/esm/providers/s3/types';
import { list, ListAllWithPathOutput, getUrl } from 'aws-amplify/storage';
import { Document, Page, pdfjs } from 'react-pdf';
import { Collection, Text, Card } from '@aws-amplify/ui-react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { useState, useEffect } from 'react';
import { Box, Typography, Pagination } from '@mui/material';
import { PDFItem } from '@data/dataDef';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

function Files() {
    const [imgFiles, setImgFiles] = useState<ListOutputItemWithPath[]>([]);
    const [pdfFiles, setPdfFiles] = useState<PDFItem[]>([]);
    const onDocumentLoadSuccess = (
        { numPages }: { numPages: number },
        index: number
    ): void => {
        // update the number of pages for the pdf
        const newPdfFiles = [...pdfFiles];
        newPdfFiles[index].pageNumbers = numPages;
        setPdfFiles(newPdfFiles);
    };
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
            const finalPdfFiles: PDFItem[] = [];
            pdf_processed.files.forEach(async (pdf) => {
                const url = await getUrl({ path: pdf.path });
                // console.log("getUrl", url.url)
                finalPdfFiles.push({ url: url.url, listItem: pdf });
            });
            img_processed.files && setImgFiles(img_processed.files);
            pdf_processed.files && setPdfFiles(finalPdfFiles);
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
                gap: '20px',
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
                            <StorageImage
                                alt={item.path.split('/').pop()}
                                path={item.path}
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
                        <Card key={index} variation='outlined'>
                            <Text
                                variation='primary'
                                as='p'
                                style={{
                                    textAlign: 'left',
                                    textDecoration: 'underline',
                                }}
                            >
                                {item.listItem.path.split('/').pop()}
                            </Text>
                            <Document
                                file={item.url.href}
                                onLoadSuccess={(pdf) =>
                                    onDocumentLoadSuccess(pdf, index)
                                }                                
                            >
                                {Array.apply(null, Array(item.pageNumbers))
                                    .map((x: null, i: number) => i + 1)
                                    .map((page: number) => (
                                        <Page key={page} pageNumber={page} />
                                    ))}
                            </Document>
                        </Card>
                    )}
                </Collection>
            </Box>
        </Box>
    );
}

export default Files;
