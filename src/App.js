import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import CreateProduct  from './pages/CreateProduct';
import Layout from './comps/Layout';
import ReadProducts from './pages/ReadProducts';
import SingleProduct from './pages/SingleProduct';
import UpdateProduct from './pages/UpdateProduct';

function App() {
  return (

    <Router>
      <Layout>

        <Switch>
          <Route exact path='/' >
            Home Page
          </Route>
          <Route exact path='/create' >
            <center><h2>Create Page</h2></center>
            <CreateProduct />
          </Route>          
          <Route exact path='/product' >
            <center><h2>All The Products</h2></center>
            <ReadProducts />
          </Route>
          <Route exact path='/product/:productId' >
            <center><h2>Single Product</h2></center>
            <SingleProduct />
          </Route>
          <Route exact path='/product/update/:productId' >
            <center><h2>Update a Single Products</h2></center>
            <UpdateProduct />
          </Route>
          <Route exact path='*' >
            <center><h2>Page Not Found</h2></center>
          </Route>
        </Switch>

      </Layout>
    </Router>
  );
}

export default App;
