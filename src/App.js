import './App.scss';
import Logo from "./assets/Logo.svg";

function App() {
  return (
    <div className="main-grid">
      <header>
        <img id="logo" src={Logo} alt="Little Lemon logo"/>
        <nav>
          <ul class="nav-links">
            <li><a href="/home">Homepage</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
