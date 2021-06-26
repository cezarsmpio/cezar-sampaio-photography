import "./Intro.css"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function Intro() {
  return (
    <div className="intro">
      <div>
        <StaticImage
          src="../../../static/assets/images/cezar-sampaio.jpg"
          width={450}
          height={562}
          quality="100"
          className="intro__pic"
          alt="A portrait picture of Cezar Sampaio"
        />
      </div>
      <div>
        <div className="intro__children">
          <h3>
            Hi there.{" "}
            <span role="img" aria-label="Waving with hand">
              👋
            </span>
          </h3>
          <h2>
            I’m Cezar, a passionated photographer based in Berlin, Germany. I’m
            inspired by these three pricinples: <i>connection</i>,{" "}
            <i>emotion</i> and <i>sensitivity</i>.
            <br />
            <br />I hope you enjoy my work.
          </h2>
        </div>
      </div>
    </div>
  )
}
