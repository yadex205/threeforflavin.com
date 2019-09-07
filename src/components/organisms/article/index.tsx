import React from 'react';

interface Props {
  html?: string;
};

const Article: React.FC<Props> = props => (
  props.html ? (
    <article className="o-article" dangerouslySetInnerHTML={{ __html: props.html }} />
  ) : (
    <article className="o-article">{props.children}</article>
  )
);

export default Article;
