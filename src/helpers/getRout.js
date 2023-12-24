import { menuItems } from './../data/menuItems'

const preRoutes = menuItems.map(({ alias, page }) => {
  return ['/' + alias, page]
})

const routes = Object.fromEntries(preRoutes)

export const getRout = path => {
  console.log('routes = ', routes);
  console.log('path = ', path);
  return routes[path]
}