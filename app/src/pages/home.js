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
  },{
    title:"compatible",
    body:"We have chosen to use '.js' file extension instead of '.di' for reason of compatibility with other tool. With this way, we ensure a simple integration with other libraries"
  }
]


export const homepage = () => {
    document.title = "diagneJs"
    document.description = "Diagne js is the lightweight and flexible javascript framework for an higher UI with less code"
    document.keywords = "diagne, diagne.js, diagneJs, javascript, js framework, front-end"
    return`
      ${welcome()}
      <div id="parent">
       ${document.location.origin}
         <article d-for="argument in arguments" style="margin:60px 0;padding:0 50px;">
             <h2>{ argument.title }</h2>
             <p>{ argument.body }</p>
         </article>
      
      </div>
    `
}
