import './Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
