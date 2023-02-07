import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import RoutePath from './route';
import { Loading } from './component/molecule';
const NotFound = React.lazy(() => import('./pages/Notfound'));

function App() {
  return (
    <Routes>
      {RoutePath.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <React.Suspense fallback={<Loading />}>
              <Component />
            </React.Suspense>
          }
        />
      ))}
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Navigate to="/list" replace />} />
    </Routes >
  );
}

export default App;
