type Reference<T, R> = T extends "get" ? R : string | null;
export interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
export type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export interface EndPoints {
  get: {};
  gets: {};
  post: {};
  put: {};
  patch: {};
}
