// type Reference<T, R> = T extends 'get' ? R : string | null;
export interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type area = {
  createdAt: string;
  id: string;
  name: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};
export type DateType = {
  areas: area[];
  body: string;
  createdAt: string;
  description: string;
  id: string;
  main_img: {
    height: number;
    url: string;
    width: number;
  };
  publishedAt: string;
  title: string;
  updatedAt: string;
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
