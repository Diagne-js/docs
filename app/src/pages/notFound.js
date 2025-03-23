export const notFound = () => {
  const linkStyle = "display: block;width: 350px; height: 50px; border: solid 3px white; border-radius: 10px; margin: 30px 10px; display: flex; justify-content: center; align-items: center; font-size: 1.1vh;"
  
  return `
    <h1>404</h1>
    <p style="text-align: center; font-size: 1.5vh">The Route ${window.location.pathname} Is Not Found!</p>
    <br><br>
    <h2 style="color: white; text-align: left">Maybe You Wanna Go to...</h2>
     <br>
    <a style="${linkStyle}" to="/"><h1>Home</h1></a>
    <a style="${linkStyle}" to="/guide"><h1>Guide</h1></a>
  `
}
