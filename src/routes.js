import React from 'react';

// Import all components
const MiaoMiaoSetUp = React.lazy(() => import('./pages/MiaoMiao/MiaoMiaoSetUp'));
const MiaoMiaoInfo = React.lazy(() => import('./pages/MiaoMiao/MiaoMiaoInfo'));
const PageBlog = React.lazy(() => import('./pages/PageBlog'));
const PageBlogDetail = React.lazy(() => import('./pages/PageBlogDetail'));
const PageBlogSidebar = React.lazy(() => import('./pages/PageBlogSidebar'));
const Home = React.lazy(() => import('./pages/MiaoMiao/index'));

const routes = [

    // public Routes
    { path: '/PageBlogSidebar', component: PageBlogSidebar },
    { path: '/PageBlogDetail', component: PageBlogDetail },
    { path: '/PageBlog', component: PageBlog },
    { path: '/MiaoMiaoSetUp', component: MiaoMiaoSetUp },
    { path: '/MiaoMiaoInfo', component: MiaoMiaoInfo },
    { path: '/', component: Home }
];

export default routes;