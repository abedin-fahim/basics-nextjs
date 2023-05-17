import { Fragment } from 'react';
import Link from 'next/link';

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News page</h1>
      <ul>
        <li>
          <Link href='/news/react-is-great'>React is great</Link>
        </li>
        <li>
          <Link href='/news/vue-is-also-great'>Vue is also great</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
