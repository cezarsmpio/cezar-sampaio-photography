import "./WorkTogether.css"
import * as React from "react"
import { Link } from "gatsby"

export function WorkTogether() {
  return (
    <h3 className="work-together-title">
      Cezar is a <i>passionated</i> photographer. Want your <i>memories</i> kept{" "}
      <i>forever</i>? <Link to="/pricing">Let’s work together.</Link>
    </h3>
  )
}
