import React from 'react';
import Head from '../helper/Head';
import Loading from '../helper/Loading';
import useFetch from '../Hooks/useFetch';
import { STATS_GET } from '../api';
const UserStatus = React.lazy(() => import('./UserStatus'));

const UserEstatisticas = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };
    getData();
  }, [request]);
  if (loading) return <Loading />;
  if (error) return <p className="error">{error}</p>;
  if (data)
    return (
      <React.Suspense fallback={<></>}>
        <Head title="Estatisticas" />
        <UserStatus data={data} />
      </React.Suspense>
    );
  else return <></>;
};

export default UserEstatisticas;
