// import { lazy } from 'react'
import Home from "../pages/Home";
import About from "../pages/About";
import Test from "../pages/Test";

// const Home = lazy(()=>import('../pages/Home'))
// const About = lazy(()=>import('../pages/About'))

const routes = [
    {
        path: '/home',
        component: Home,
        // 如果要求严格路径
        isExact: true,
        element:Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        component: About,
        element: About,
        meta: {
            title: '关于页面'
        }
    },
    {
        path: '/test',
        component: Test,
        element: Test,
        meta: {
            title: '测试页面'
        }
    }
    // {
    //     path: null,
    //     redirect: lazy(() => import('../pages/NotFound')),
    //     meta: {
    //         title: '404'
    //     }
    // },
]

export default routes
