import {LibraryModel} from './LibraryModel';

export interface Link {
  href: string;
  templated: boolean;
}

export interface Links {
  first: Link;
  self: Link;
  next: Link;
  last: Link;
  profile: Link;
  search: Link;
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

export interface LibraryEmbedded {
  library: LibraryModel;
}

export class LibraryHttpModel {
  constructor(
    public _embedded: LibraryEmbedded,
    public _links?: Links,
    public page?: Page,
  ) {}
}
