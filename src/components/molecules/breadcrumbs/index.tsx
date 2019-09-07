import React from 'react';
import { Link } from 'gatsby';

interface ItemProps {
  href?: string;
}

export const BreadcrumbItem: React.FC<ItemProps> = props => (
  <>
    {props.href ? (
      <Link to={props.href} className="m-bredcrumb__item">
        {props.children}
      </Link>
    ) : (
      <div className="m-breadcrumb__item">{props.children}</div>
    )}

    <div className="m-breadcrumb__separator">/</div>
  </>
);

const Breadcrumb: React.FC = props => <nav className="m-breadcrumb">{props.children}</nav>;

export default Breadcrumb;
