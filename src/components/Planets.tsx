import { useQuery } from 'react-query';

import { PlanetApiService } from '../services/PlanetService';
import Planet from './Planet';
import { useState } from 'react';

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(['planets', page], () =>
    PlanetApiService(page)
  );

  return (
    <div>
      <h2>Planets</h2>
      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>
      <button onClick={() => setPage(4)}>Page 4</button>

      {status === 'loading' && <div>Loading data..</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet, index) => (
            <Planet planet={planet} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
