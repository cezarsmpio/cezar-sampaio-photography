import "./Menu.css"

import * as React from "react"
import { Link } from "gatsby"

export function Menu() {
  return (
    <nav className="nav-menu">
      <Link className="link" to="/about-me">
        About me
      </Link>
      <Link className="link" to="/work">
        Work
      </Link>
      <Link className="link" to="/pricing">
        Pricing
      </Link>
      <Link
        className="link"
        to="https://instagram.com/cezarsmpio"
        target="_blank"
      >
        Instagram
      </Link>
    <Link
        className="link"
        to="https://unsplash.com/@cezarsmpio"
        target="_blank"
      >
        Unsplash
      </Link>
    </nav>
  )
}
