export const notFound = () => {
  const linkStyle = "width: 200px; height: 80px; border: solid 3px white; border-radius: 10px; margin: 30px 10px; display: flex; justify-content: center; align-items: center; font-size: 1.5vh;"
  
  return `
    <h1>404</h1>
    <p style="text-align: center; font-size: 1.5vh">The Route ${window.location.pathname} Is Not Found!</p>
    <h2 style="color: white; text-align: left">Maybe You Wanna Go to...</h2>
     <br><br>
    <a to="/"><h2>Home</h2></a>
    <a to="/guide"><h2>Guide</h2></a>
  `
}
