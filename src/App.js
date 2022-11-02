import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cards from './components/Cards';
import Home from './components/Home';
import {AppStateProvider} from './appstate';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home>
        <Cards />
      </Home>
    ),
  },
], {basename: '/weather-app'});

const App = () => {
  return (
    <AppStateProvider>
      <RouterProvider router={router} />
    </AppStateProvider>
  );
}

export default App;
