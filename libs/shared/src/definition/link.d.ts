export type DownloadableFileLink = {
  excel: string;
  csv: string;
  tsv: string;
};

export type DownloadableFileType = keyof DownloadableFileLink;
