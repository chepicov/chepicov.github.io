import React from 'react';
import { Route } from 'react-router-dom';

import Repos from 'components/repos';
import Commits from 'components/commits';

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Repos} />
      <Route path="/:name/commits" component={Commits} />
    </div>
  );
};

export default App;
