
import './App.css';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Header from './components/Header';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Product List - Best Deals on Electronics</title>
        <meta name="description" content="Browse our latest selection of electronics products. Find the best deals on smartphones, laptops, and more." />

      </Helmet>
      <Header />
      <Filter />
      <Footer />
    </div>

  )
}
export default App;
