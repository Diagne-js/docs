import {v} from '../../packages/module.js'



export function welcome(content) {
  return`
     <section class="welcome">
        <div class="shadow"></div>
        <img src="./app/src/assets/diagne.png" />
        <h1>Diagne</h1>
        <h4>The lightweight and useful javascript framework</h4>
        <a class="getStartedBtn" to="/guide">get started</a>
     </section>
     
  `
}
