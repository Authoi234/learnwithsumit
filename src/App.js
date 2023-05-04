import './App.css';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Videos from './components/Videos/Videos';
import Main from './layout/Main';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
          <Main></Main>,
      children: [
        {
          path: '/',
          element:
            <div>
              <Section1></Section1>
              <Section2></Section2>
              <Section3></Section3>
              <Section4></Section4>
              <Section5></Section5>
            </div>,
        },
        {
          path: 'videos',
          element: <Videos></Videos>
        },
        {
          path: '*',
          element: <div style={{ textAlign: 'center' }}><h1 style={{ color: 'red', boxShadow: '0 0 2px 3px gray', padding: '30px' }}>404 NOT FOUND</h1>
            <Link to="/" style={{ textAlign: 'center', fontSize: '30px', textDecoration: 'none' }}>Go Back Home</Link>
          </div>
        }
      ],
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
