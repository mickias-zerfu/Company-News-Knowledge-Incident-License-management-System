export class FileDetails {
  ID: number;
  FileName?: string;
  FileData?: Array<number>;
  FileType: FileType;
  FileUrl?: string;
}

export enum FileType {
  Image = 'Image',
  Document = 'Document',
  Video = 'Video',
  Audio = 'Audio',
  Other = 'Other'
}
