const routePrefix = process.env.ROUTE_PREFIX || ""

const routes = {
    LOGIN : `${routePrefix}/login`,
    REGISTER: `${routePrefix}/register`,
    DASHBOARD:`${routePrefix}/dashboard`,
    ABOUTUS:`${routePrefix}/`,
    LOGOUT:`${routePrefix}/logout`
}

export default routes