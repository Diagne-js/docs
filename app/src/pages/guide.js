export const guide = () => {
    document.title = "diagne.js guide"
    document.querySelector("meta[name='description']").content = "The official guide of diagne.js"
   // document.querySelector("meta[name='keywords']").content = "diagne js, guide, learn diagne.js, guide of diagne.js, diagne"
    return`
    <main class="parent">
<h1>Guide</h1>
<article>
<h2>What is diagne js</h2>
<p>
Diagne js is a javascript framework using less code and that gives a set of tools to
build awesome user interfaces with less code. For that, we don't use virtual DOM, this will reduce the
size of your website
</p>
<article/>

<article>
<h2>What you need to learn to use diagne.js</h2>
<p>
The js frameworks basics are very simalar, so learn a new framework will be easy if you have already use
one of them.<br>
This is what you will learn
</p>
</article>

<article>
<h3>The reactivity systeme</h3>
<p>
Our reactivity system is very simple.
To declare a variable, you will use the <code>create</code> methods with the value of your variable
and the name as a string in param<br>
This is the syntax: <code> const variableName = create(value, "variableName")</code>
</p>

</article>

<article>
<h3>The specials attributes</h3>
<p>
   samely to <a href="https://vuejs.org">Vue.js</a> and <a href="https://svelte.dev">Svelte</a>, we have specials attributes like
   <code>if</code>, <code>for</code> , <code>show</code> and so on. The specials attributes will help you to did specifics actions 
   without needing to add javascript.
</p>

</article>
</main>
    `
}
