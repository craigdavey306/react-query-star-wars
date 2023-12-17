import React from 'react';
import { Planet as PlanetInterface } from '../models/interfaces';

type Props = {
  planet: PlanetInterface;
};

const Planet: React.FC<Props> = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
