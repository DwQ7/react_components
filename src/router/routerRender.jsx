import {Route} from "react-router-dom";
import React from "react";

const routerRender = (routeList) => {
    return routeList.map((item, index) => {
        return (
            <Route
                key={index}
                path={item.path}
                element={ <item.element /> }
            >
                {item.children ? routerRender(item.children) : null}
            </Route>
        )
    })
}

export default routerRender