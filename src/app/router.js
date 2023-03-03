import Home from "../pages/Home"
import AntDesign from "../pages/AntDesign";
import I18next from "../pages/I18next";
import RouterV6 from "../pages/RouterV6"
import Api from "../pages/Api"
import Redux from "../pages/Redux";

const RouteList = [
    {
        path : '/',
        element :  <Home/>
    },
    {
        path : '/i18next',
        element :  <I18next/>
    },
    {
        path : '/antDesign',
        element :  <AntDesign/>
    },
    {
        path : '/router/:id',
        element :  <RouterV6/>
    },
    {
        path : '/api',
        element :  <Api/>
    },
    {
        path : '/redux',
        element :  <Redux/>
    }

]

export default RouteList;
