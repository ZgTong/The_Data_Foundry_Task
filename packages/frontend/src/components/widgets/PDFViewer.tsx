'use client';
import { useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { PDFItem } from '@data/dataDef';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Files({
    pdfFiles,
    setPdfFiles,
    item,
    index,
}: Readonly<{
    pdfFiles: PDFItem[];
    setPdfFiles: React.Dispatch<React.SetStateAction<PDFItem[]>>;
    item: PDFItem;
    index: number;
}>) {
    useEffect(() => {}, []);

    const onDocumentLoadSuccess = (
        { numPages }: { numPages: number },
        index: number
    ): void => {
        const newPdfFiles = [...pdfFiles];
        newPdfFiles[index].pageNumbers = numPages;
        setPdfFiles(newPdfFiles);
    };
    return (
        <Document
            file={item.url.href}
            onLoadSuccess={(pdf) => onDocumentLoadSuccess(pdf, index)}
        >
            {Array.apply(null, Array(item.pageNumbers))
                .map((x: null, i: number) => i + 1)
                .map((page: number) => (
                    <Page key={page} pageNumber={page} />
                ))}
        </Document>
    );
}

export default Files;
