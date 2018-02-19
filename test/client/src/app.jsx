import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Repositories from './components/repositories';
import Commits from './components/commits';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Repositories} />
        <Route path="/:repoId/commits" component={Commits} />
      </div>
    </BrowserRouter>
  );
};

export default App;
