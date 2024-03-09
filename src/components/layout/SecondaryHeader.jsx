import React from 'react'
import { Link } from 'react-router-dom'

const SecondaryHeader = () => {
  return (
    <div className="secondary-header">
  <nav className="navbar">
    <ul className="unorderd-list">
      <li className="dropdown">
        <Link to={""}>Furniture</Link>
        <div className="dropdown-content">
          <Link to={""}>Category 1</Link>
          <Link to={""}>Category 2</Link>
          <Link to={""}>Category 3</Link>
        </div>
      </li>
      <li className="dropdown">
        <Link to={""}>Kitchen item</Link>
        <div className="dropdown-content">
          <Link to={""}>Category 1</Link>
          <Link to={""}>Category 2</Link>
          <Link to={""}>Category 3</Link>
        </div>
      </li>
      <li className="dropdown">
        <Link to={""}>Fashion &amp; fitness point</Link>
        <div className="dropdown-content-small">
          <Link to={""}>Category 1</Link>
          <Link to={""}>Category 2</Link>
          <Link to={""}>Category 3</Link>
        </div>
      </li>
      <li className="dropdown">
        <Link to={""}>Home decor</Link>
        <div className="dropdown-content">
          <Link to={""}>Category 1</Link>
          <Link to={""}>Category 2</Link>
          <Link to={""}>Category 3</Link>
        </div>
      </li>
      <li className="dropdown">
        <Link to={""}>Brands</Link>
        <div className="dropdown-content-small">
          <Link to={""}>Category 1</Link>
          <Link to={""}>Category 2</Link>
          <Link to={""}>Category 3</Link>
        </div>
      </li>
      <li className="dropdown">
        <Link to={""}>Mix &amp; match</Link>
      </li>
      <li className="dropdown">
        <Link to={""}>Our Specialization</Link>
        <div className="dropdown-content">
          <Link to={""}>Category 1</Link>
          <Link to={""}>Category 2</Link>
          <Link to={""}>Category 3</Link>
        </div>
      </li>
      <li className="dropdown">
        <Link to={""}>Who we are</Link>
        <div className="dropdown-content-small">
          <Link to={""}>Category 1</Link>
          <Link to={""}>Category 2</Link>
          <Link to={""}>Category 3</Link>
        </div>
      </li>
    </ul>
  </nav>
</div>

  )
}

export default SecondaryHeader