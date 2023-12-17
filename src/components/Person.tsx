import React from 'react';
import { Person as PersonInterface } from '../models/interfaces';

type Props = {
  person: PersonInterface;
};

const Person: React.FC<Props> = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Birth year - {person.birth_year}</p>
    </div>
  );
};

export default Person;
