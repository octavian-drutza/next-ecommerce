import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-dark bg-primary mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">Next Ecommerce</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/contact"><a className="nav-link">Contact Us</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/privacy"><a className="nav-link">Privacy and Policy</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/login"><a className="nav-link">Login</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/cart"><a className="nav-link">Cart</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/details"><a className="nav-link">Product Details</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/list"><a className="nav-link">Product List</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);


export default Navbar;

