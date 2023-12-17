import { useQuery } from 'react-query';

import Person from './Person';
import { PersonApiService } from '../services/PersonService';
import { useState } from 'react';

const People = () => {
  const [page, setPage] = useState(1);

  const { data, status } = useQuery(['people', page], () =>
    PersonApiService(page)
  );
  return (
    <div>
      <h2>People</h2>

      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>
      <button onClick={() => setPage(4)}>Page 4</button>

      {status === 'loading' && <div>Loading data..</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <div>
          {data.results.map((person, index) => (
            <Person person={person} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
