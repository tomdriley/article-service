import { Article, ArticleTitleDate } from "../article-schemas";

const ArticleService = {
  async getArticleList(): Promise<ArticleTitleDate[]> {
    return [
      {
        name: "2021-01-29-meaning",
        title: "Meaning",
        date: "2021-01-29",
      },
      {
        title: "Finding Happiness",
        date: "2021-01-30",
        name: "2021-01-30-finding-happiness",
      },
    ];
  },
  async getArticle(name: string): Promise<Article | undefined> {
    return {
      title: "Meaning",
      author: "Tom Riley",
      date: "2021-01-29",
      categories: ["Positive Psychology"],
      tags: ["Positive Psychology", "PSYCH 226R"],
      name: "2021-01-29-meaning",
      content_type: "markdown",
      content: "# Article content",
    };
  },
} as const;

export default ArticleService;
