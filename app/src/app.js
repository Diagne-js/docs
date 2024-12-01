import { v, observe, set } from '../packages/module.js'


v.theme = "dark"
v.src = "./app/src/assets/sun.svg"
v.content = {
  title: "You did it",
  body: `You have joined the freedom and clear js framework       <br> Below is the steps to use 
          <span style='color:var(--primary)'>Diagne js</span>
        `
}
v.changeTheme = () => {
  v.theme = v.theme == 'light' ? 'dark' : 'light'
  v.src = v.theme == 'light' ? './app/src/assets/moon.svg' : './app/src/assets/sun.svg'
}

export const App = () => {
  return `
    <header d-class="[ theme ]">

       <div class="logo">
        <img src="./app/src/assets/diagne.png"/>
        <p class="title">diagne.js</p>
        </div>

        <nav>
           <a to='/'>home</a>
           <a to='/guide'>guide</a>
        </nav>

        <button d-click="changeTheme">
           <img class="dark-mode-btn" d-src="[ src ]" alt="dark/light"/>
        </button>

    </header>


    <main d-class="[ theme ]" id="view"></main>
  `

}
