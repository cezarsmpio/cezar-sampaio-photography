import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { TheBestTitle } from "../components/TheBestTitle/TheBestTitle"
import { PhotoCard } from "../components/PhotoCard/PhotoCard"
import { Seo } from "../components/Seo/Seo"

export default function WorkPage(props) {
  return (
    <Layout className="work">
      <Seo title="Work" />

      <section className="wrap">
        <div className="work__works-title">
          <TheBestTitle />
        </div>

        <div className="work__quote-container">
          <figure className="work__quote">
            <blockquote className="work__quote-text">
              <p>
                Love is friendship that has caught fire{" "}
                <span role="img" aria-label="Fire">
                  🔥
                </span>
              </p>
            </blockquote>
            <figcaption className="work__quote-caption">
              ― Ann Landers
            </figcaption>
          </figure>
        </div>

        <div className="work__gallery">
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
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    sessions: allContentfulSession(sort: { fields: createdAt, order: DESC }) {
      nodes {
        slug
        cover {
          gatsbyImageData(
            jpegProgressive: true
            quality: 100
            width: 900
            height: 900
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
