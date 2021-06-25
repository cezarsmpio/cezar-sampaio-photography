import "./Logo.css"
import * as React from "react"
import { Link } from "gatsby"

export function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <h1 className="logo__name">Cezar Sampaio</h1>
        <p className="logo__desc">Photography</p>
      </Link>
    </div>
  )
}
