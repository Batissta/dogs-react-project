import React from 'react';
import styles from './UserStatus.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatus = ({ data }) => {
  const [grafico, setGrafico] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graficoData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );
    setGrafico(graficoData);
  }, []);

  return (
    <section className={styles.grafico}>
      <div className={`${styles.total} ${styles.graficoItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={`${styles.graficoItem}`}>
        <VictoryPie
          data={grafico}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={`${styles.graficoItem}`}>
        <VictoryChart>
          <VictoryBar alignment="start" data={grafico}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatus;
