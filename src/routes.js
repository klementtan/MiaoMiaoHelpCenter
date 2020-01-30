import React from 'react';

// Import all components
const MiaoMiaoSetUp = React.lazy(() => import('./pages/MiaoMiao/MiaoMiaoSetUp'));
const MiaoMiaoInfo = React.lazy(() => import('./pages/MiaoMiao/MiaoMiaoInfo'));
const Home = React.lazy(() => import('./pages/MiaoMiao/index'));

const routes = [

    // public Routes
    { path: '/MiaoMiaoSetUp', component: MiaoMiaoSetUp },
    { path: '/MiaoMiaoInfo', component: MiaoMiaoInfo },
    { path: '/', component: Home }
];

export default routes;