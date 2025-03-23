export const notFound = () => {
  return `
    <h1>404</h1>
    <p style="text-align: center; font-size: 1.5vh">The Route ${window.location.pathname} Is Not Found!</p>
    <h2 style="color: white; text-align: left">Maybe You Wanna Go to...</h2>

    <a to="/">Home</a>
    <a to="/guide">Guide</a>
  `
}
