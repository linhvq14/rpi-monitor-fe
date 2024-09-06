import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface PaginationState {
    pageIndex: number;
    pageSize: number;
    pageToken: string;
    nextPageToken: string;
    prevPageToken: string;
  }
}
