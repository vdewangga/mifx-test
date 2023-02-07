import React from 'react';

const Detail = React.lazy(() => import('../pages/Detail'));
const List = React.lazy(() => import('../pages/List'));

export const ProductRoute = [
  {
    path: 'list',
    component: List,
  },
  {
    path: 'detail/:id',
    component: Detail,
  },
];