import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { MovieProvider } from './context/movie-context';


function App() {
  return (
    <MovieProvider>
         <RouterProvider router={router}></RouterProvider>
    </MovieProvider>
    
  );
}

export default App;
