import { useState } from 'react';
import './App.css';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Layout from './Layout';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <>
      {showLanding ?
        <Landing setShowLanding={setShowLanding} /> :
        <Layout>
          <Dashboard />
        </Layout>
      }
    </>
  );
}

export default App;
