import React from 'react';
import { range } from 'lodash';

interface ItemProps {
  isCurrent?: boolean;
  onClick: () => void;
}

const Item: React.FC<ItemProps> = props => (
  <div
    className={props.isCurrent ? 'm-pagination__item m-pagination__item--current' : 'm-pagination__item'}
    onClick={() => props.onClick()}
  >
    {props.children}
  </div>
);

interface Props {
  currentIndex: number;
  length: number;
  onRequest: (index: number) => void;
}

const MAX_AMOUNT = 3;

const Pagination: React.FC<Props> = props => {
  if (props.currentIndex < 1 || props.currentIndex > props.length) {
    return null;
  }

  const startIndex = props.length <= MAX_AMOUNT ? 1 : Math.min(Math.max(props.currentIndex - 1, 1), props.length - 2);
  const showFirst = props.length > 3 && props.currentIndex > 2;
  const showLast = props.length > 3 && props.currentIndex < props.length - 1;

  return (
    <nav className="m-pagination">
      {showFirst ? (
        <>
          <Item isCurrent={props.currentIndex === 1} onClick={() => props.onRequest(1)}>
            1
          </Item>
          <div className="m-pagination__ellipsis">&hellip;</div>
        </>
      ) : null}

      {range(startIndex, Math.min(startIndex + 3, props.length + 1)).map(index => (
        <Item isCurrent={props.currentIndex === index} onClick={() => props.onRequest(index)} key={index}>
          {index}
        </Item>
      ))}

      {showLast ? (
        <>
          <div className="m-pagination__ellipsis">&hellip;</div>
          <Item isCurrent={props.currentIndex === props.length} onClick={() => props.onRequest(props.length)}>
            {props.length}
          </Item>
        </>
      ) : null}
    </nav>
  );
};

export default Pagination;
