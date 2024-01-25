import { Routes, Route } from 'react-router-dom';
import { routes } from '../Routes';


export const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({path, Component}) => {
        return <Route path={path} element={<Component />} key={path}/>;
      })}
    </Routes>
  );
}
