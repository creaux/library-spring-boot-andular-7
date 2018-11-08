
export class BookModel {
  constructor(
    public id: string,
    public title: string,
    public authors: string[],
    public published: string,
    public description: string,
    public _links?: {
      self: { href: string },
      book: { href: string },
    },
  ) {}
}
