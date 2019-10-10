import React from 'react';

import blogService from './services/blogs';

function App() {
  const func = async () => {
    console.log(await blogService.getAll());
  };

  func();
  return <div className="App">Velcomment</div>;
}

export default App;
