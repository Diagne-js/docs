import posts from './posts.js'

export const blogHomePage = () => {
   return `
     <h1>Blog</h1>
      <div class="parent">
         <a to="/blog/::i" for="post in posts">
           <h2>{ post.title }</h2>
           <p>{ post.description }</p>
         </a>
      </div
   `
}
