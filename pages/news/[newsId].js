import { useRouter } from 'next/router';
import { Fragment } from 'react';

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query;

  return (
    <Fragment>
      <h1>The Detail page</h1>
    </Fragment>
  );
};

export default DetailPage;
