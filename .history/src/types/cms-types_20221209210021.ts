// type Reference<T, R> = T extends 'get' ? R : string | null;
export interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type area = {
  createdAt:string;
  id:string;
  name: string;
  publishedAt: string;
  revisedAt:string;
  updatedAt:string;
}
export type DateType = {
  areas:
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
// type Structure<T, P> = T extends 'get'
//   ? { id: string } & DateType & Required<P>
//   : T extends 'gets'
//   ? GetsType<{ id: string } & DateType & Required<P>>
//   : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

// export interface EndPoints {
//   get: {
//   }
//   gets: {
//   }
//   post: {
//   }
//   put: {
//   }
//   patch: {
//   }
// }
