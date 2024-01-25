import { BrowserRouter as Router } from 'react-router-dom';

import { AppRouter } from './components/App-Router';
import { Layout } from './components/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  );
}

export default App;
