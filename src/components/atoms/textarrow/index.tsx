import React from 'react';
import { Link } from 'gatsby';

interface NormalProps {
  children: string | string[];
}

interface LinkProps extends NormalProps {
  href: string;
  external?: boolean;
}

interface Component extends React.FC<NormalProps> {
  Link: React.FC<LinkProps>;
}

const Textarrow: Component = props => (
  <span className="a-textarrow">
    <span className="a-textarrow__text">{props.children}</span>
  </span>
);

Textarrow.Link = props =>
  props.external ? (
    <a href={props.href} rel="noreferrer noopener" className="a-textarrow a-textarrow--link">
      <span className="a-textarrow__text">{props.children}</span>
    </a>
  ) : (
    <Link to={props.href} className="a-textarrow a-textarrow--link">
      <span className="a-textarrow__text">{props.children}</span>
    </Link>
  );

Textarrow.Link.displayName = 'Textarrow.Link';

export default Textarrow;
