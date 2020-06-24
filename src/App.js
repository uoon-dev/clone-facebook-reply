import React from 'react';
import Layout from 'hocs/Layout/Layout';
import Comments from 'containers/Feed/Comments/Comments';

function App() {
  return (
    <div>
      <Layout>
        <Comments></Comments>
      </Layout>
    </div>
  );
}

export default App;
