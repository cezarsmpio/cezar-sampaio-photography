import * as React from "react"
import { Link, graphql } from "gatsby"
import { Layout } from "../components/layout"
import { Intro } from "../components/Intro/Intro"
import { TheBestTitle } from "../components/TheBestTitle/TheBestTitle"
import { PhotoCard } from "../components/PhotoCard/PhotoCard"
import { Seo } from "../components/Seo/Seo"

export default function IndexPage(props) {
  return (
    <Layout className="homepage">
      <Seo title="Homepage" />

      <section className="wrap homepage__intro">
        <Intro />
      </section>

      <section className="wrap homepage__works">
        <div className="homepage__works-title">
          <TheBestTitle />
        </div>

        <div className="homepage__gallery">
          {props.data.sessions.nodes.map((session, index) => (
            <div key={index}>
              <PhotoCard
                title={session.name}
                description={session.description}
                slug={session.slug}
                image={session.cover}
              />
            </div>
          ))}
        </div>

        <div className="homepage__cta">
          <Link to="/work" className="link">
            All Work{" "}
            <span role="img" aria-label="Finger pointing right">
              👉
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    sessions: allContentfulSession(sort: { fields: createdAt, order: DESC }, limit: 4) {
      nodes {
        slug
        cover {
          gatsbyImageData(
            jpegProgressive: true
            quality: 90
            width: 450
            height: 450
            cropFocus: CENTER
            formats: AUTO
            outputPixelDensities: 2
          )
        }
        name
        description
      }
    }
  }
`
