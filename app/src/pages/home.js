import {welcome} from '../components/welcome.js'


export const homepage = () => {
    document.title = "diagneJs"
    return`
      ${welcome()}
    `
}
