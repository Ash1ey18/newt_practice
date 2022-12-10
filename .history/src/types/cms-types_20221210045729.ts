// type Reference<T, R> = T extends 'get' ? R : string | null;
export interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

type Basic_information = {
  createdAt: string;
  id: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

export type Area = {
  name: string;
} & Basic_information;

export type Blog = {
  areas: Area[];
  body: string;
  description: string;
  main_img: {
    height: number;
    url: string;
    width: number;
  };
  recommend: boolean;
  title: string;
  topArticle: boolean;
} & Basic_information;
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
