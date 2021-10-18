import React from 'react';
import { ShareStateProvider } from './store';

import './index.css';

const App = () => {
  return (
    <div className="order">
      <ShareStateProvider>
        <div>Hello Order</div>
      </ShareStateProvider>
    </div>
  );
};

export default App;
