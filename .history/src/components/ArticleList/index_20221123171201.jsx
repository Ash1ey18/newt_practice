import React from "react";

export default function ArticleList() {
  const isTablet = useTabletMqContext();
  return (
    <Layout>
      <ArticlesWraper>
        {blog.map((_blog) => {
          const id = _blog.id;
          const areaList = _blog.areas;
          const publishedAt = _blog.publishedAt;
          const description = _blog.description;
          return (
            <ArticleWraper key={id}>
              <ArticleImg
                src={_blog.main_img.url}
                alt="メインビジュアル"
                priority
                id={id}
              />
              <Title>
                <Link href={`/blog/${id}`}>
                  <a>{_blog.title}</a>
                </Link>
              </Title>
              <LocationPoint areaList={areaList} />
              {isTablet && (
                <>
                  <ArticleDate date={publishedAt} />
                  <ArtiDescriotn>{description}</ArtiDescriotn>
                </>
              )}
            </ArticleWraper>
          );
        })}
      </ArticlesWraper>
    </Layout>
  );
}
