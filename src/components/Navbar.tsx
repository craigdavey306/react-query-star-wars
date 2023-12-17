import React from 'react';

import { Page } from '../models/types';

type Props = {
  setPage: (page: Page) => void;
};

const Navbar: React.FC<Props> = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage('planets')}>Planets</button>
      <button onClick={() => setPage('people')}>People</button>
    </nav>
  );
};

export default Navbar;
