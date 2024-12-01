import {welcome} from '../components/welcome.js'
import {v} from '../../packages/module.js'

v.arguments = [
  {
    title: "why diagne js is created ??",
    body:`
        I won't lie and say that I'm disappointed with existing javascript frameworks because I created this framework simply because I wanted to have my own
    `
  },
  {
    title: "so, why use it ?",
    body: "Diagne.js is a scalabe, lightweight, compatible and simple but powerful tool to create your user interfaces with less code"
  },
  {
    title: "scalable",
    body: "if you want to make websites as a freelance, a startup or an society, we are here for you!"
  }
]


export const homepage = () => {
    document.title = "diagneJs"
    return`
      ${welcome()}
      <div>
         <article d-for="argument in arguments" style="margin:60px 0;padding:0 50px;">
             <h2>{ argument.title }</h2>
             <p>{ argument.body }</p>
         </article>
      </div>
    `
}
