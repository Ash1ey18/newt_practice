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
