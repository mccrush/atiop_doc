import { menuItems } from './../data/menuItems'

const preRoutes = menuItems.map(({ alias, page }) => {
  return ['/' + alias, page]
})

const routes = Object.fromEntries(preRoutes)

export const getRout = path => {
  //console.log('getRout() path = ', path);
  return routes[path]
}