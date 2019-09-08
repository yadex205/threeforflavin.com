import React from 'react';
import classnames from 'lib/classnames';
import Appear from 'components/utils/appear';

interface Props {
  html?: string;
}

const Article: React.FC<Props> = props => (
  <Appear>
    {appear => {
      const className = classnames('o-article', { 'o-article--appeared': appear });
      return props.html ? (
        <article className={className} dangerouslySetInnerHTML={{ __html: props.html }} />
      ) : (
        <article className={className}>{props.children}</article>
      );
    }}
  </Appear>
);

export default Article;
