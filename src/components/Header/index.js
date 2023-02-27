import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="container-1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-logo"
      />
    </div>
    <div className="container-2">
      <ul className="items-container">
        <li className="items">Home</li>
        <li className="items">Products</li>
        <li className="items">Cart</li>
      </ul>
      <div>
        <button type="button" className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  </nav>
)

export default Header
