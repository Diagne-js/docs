import {homepage} from './pages/home.js'
import {guide} from './pages/guide.js'
import {notFound} from './pages/notFound.js'

export const routes = {
    '/': homepage,
    '/guide': guide,
    '*': notFound
}
