import { ListOutputItemWithPath } from '@aws-amplify/storage/dist/esm/providers/s3/types';
export type SectionId = 'files' | 'portal';
export type PDFItem = {
    url: URL;
    pageNumbers?: number;
    listItem: ListOutputItemWithPath;
};