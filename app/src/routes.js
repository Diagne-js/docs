import {homepage} from './pages/home.js'
import {guide} from './pages/guide.js'

export const routes = {
    '/': () => homepage(),
    '/guide': () => guide()
}