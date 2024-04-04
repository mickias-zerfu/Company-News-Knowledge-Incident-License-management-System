export class FileDetails {
  ID: number;
  FileName?: string;
  FileData?: Array<number>;
  FileType: FileType;
  FileUrl?: string;
}

export enum FileType {
  Image,
  Document,
  Video,
  Audio,
  Software,
  Archive
}
