import {homepage} from './pages/home.js'
import {guide} from './pages/guide.js'

export const routes = {
    '/': () => homepage(),
    '/guide': () => guide(),
    '*': () => "<h1>404</h1><br><br><p>Page not found !</p>"
}
