import React from 'react';

// Import all components
const MiaoMiao = React.lazy(() => import('./pages/MiaoMiao/MiaoMiao'));
const Home = React.lazy(() => import('./pages/MiaoMiao/index'));

const routes = [

    // public Routes
   
    { path: '/MiaoMiao', component: MiaoMiao },
    { path: '/', component: Home }
];

export default routes;