import React, { Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import routerRender from "./routes/routerRender";
import routes from "./routes";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
function App() {
  return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>   }>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        {/* 默认页面 */}
                        <Route path={"/"} element={<Home />} />

                        {routerRender(routes)}

                        {/* 匹配未定义的路由地址 */}
                        <Route path={"*"} element={<div>暂无此页面</div>} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    )
  }
export default App;
