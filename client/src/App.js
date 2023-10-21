import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import DieuHuongURL from './Router';

function App() {
  return (
    <>
      <Router>
        <Header />
        <DieuHuongURL />
        <Footer />
      </Router>
    </>
  );
}

export default App;
