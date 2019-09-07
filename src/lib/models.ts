export interface Live {
  slug: string;
  title: string;
  date: string;
  venue: string;
  article?: {
    childMarkdownRemark: {
      html: string;
    };
  };
}
