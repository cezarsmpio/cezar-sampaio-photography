import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Layout } from "../components/layout"
import { Intro } from "../components/Intro/Intro"
import { Seo } from "../components/Seo/Seo"

export default function AboutMePage() {
  return (
    <Layout className="about-me">
      <Seo title="Who is Cezar" />

      <section className="wrap about-me__title">
        <h3>
          Who is <span>Cezar</span>
        </h3>
      </section>

      <section className="wrap">
        <div className="about-me__intro">
          <Intro />
        </div>

        <div className="about-me__intro-zwei">
          <div>
            <h2 className="about-me__intro-zwei-title">
              I’m Brazilian, 28 years old, married to a beautiful woman,
              software developer by formation and a photographer by passion.
            </h2>
          </div>

          <div>
            <StaticImage
              src="../../static/assets/images/bastei.jpg"
              width="428"
              height="594"
              quality="100"
              className="about-me__intro-zwei-pic"
            />
          </div>
        </div>

        <div className="about-me__intro-drei">
          <div>
            <StaticImage
              src="../../static/assets/images/vatican.jpg"
              width="808"
              height="538"
              quality="100"
              className="about-me__intro-drei-pic"
            />
          </div>

          <div>
            <h2 className="about-me__intro-drei-title">
              I'm looking forward to meeting you and save your best memories,{" "}
              <br />
              <i>forever.</i>
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  )
}
