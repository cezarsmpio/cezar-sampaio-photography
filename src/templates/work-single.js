import "../../static/assets/css/reset.css"
import * as React from "react"
import { graphql, Link } from "gatsby"
import PhotoGallery from "react-photo-gallery"
import { useWindowWidth } from "@react-hook/window-size/throttled"
import { Layout } from "../components/layout"
// import { GatsbyImage } from "gatsby-plugin-image"
import { WorkTogether } from "../components/WorkTogether/WorkTogether"
import { Seo } from "../components/Seo/Seo"

export default function WorkPage(props) {
  const { session } = props.data
  const windowWidth = useWindowWidth()
  const images = React.useMemo(
    () =>
      session.pictures.map(
        ({ gatsbyImageData: { images, width, height } }) => ({
          src: images.fallback.src,
          srcSet: images.fallback.srcSet.split("\n"),
          sizes: [images.fallback.sizes],
          width,
          height,
        })
      ),
    [] // eslint-disable-line
  )
  const isWindowBig = windowWidth >= 1280
  const isWindowSmall = windowWidth >= 600 && windowWidth < 1280
  const columns = isWindowBig ? 3 : isWindowSmall ? 2 : 1

  return (
    <Layout className="work-single">
      <Seo
        title={session.name}
        image={`https:${session.cover.gatsbyImageData.images.fallback.src}`}
      />

      <div className="wrap">
        <div className="work-single__header">
          <h1 className="work-single__name">{session.name}</h1>
          <p className="work-single__description">{session.description}</p>
        </div>
      </div>

      <div>
        <PhotoGallery
          photos={images}
          margin={3}
          columns={columns}
          direction="column"
          // renderImage={image => {
          //   return (
          //     <GatsbyImage
          //       key={image.key}
          //       image={{
          //         width: image.photo.width,
          //         height: image.photo.height,
          //         layout: "constrained",
          //         images: {
          //           sources: [],
          //           fallback: {
          //             src: image.photo.src,
          //             sizes: image.photo.sizes.join(""),
          //             srcSet: image.photo.srcSet.join(""),
          //           },
          //         },
          //       }}
          //       style={{
          //         position: "absolute",
          //         top: image.top,
          //         left: image.left,
          //         margin: image.margin,
          //       }}
          //       alt=""
          //     />
          //   )
          // }}
          renderImage={image => {
            return (
              <img
                key={image.key}
                src={image.photo.src}
                width={image.photo.width}
                height={image.photo.height}
                srcSet={image.photo.srcSet.join("")}
                sizes={image.photo.sizes.join("")}
                loading="lazy"
                style={{
                  position: "absolute",
                  top: image.top,
                  left: image.left,
                  margin: image.margin,
                }}
                alt=""
              />
            )
          }}
        />
      </div>

      <div className="work__cta">
        <Link to="/work" className="link">
          All Work{" "}
          <span role="img" aria-label="Finger pointing right">
            👉
          </span>
        </Link>
      </div>

      <div className="wrap">
        <div className="work-single__together">
          <WorkTogether />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query WorkSingle($id: String) {
    session: contentfulSession(contentful_id: { eq: $id }) {
      name
      description
      cover {
        gatsbyImageData(
          jpegProgressive: true
          quality: 90
          width: 800
          cropFocus: CENTER
          formats: AUTO
          outputPixelDensities: 2
        )
      }
      pictures {
        gatsbyImageData(
          quality: 60
          outputPixelDensities: 2
          width: 800
          jpegProgressive: true
          formats: AUTO
        )
      }
    }
  }
`
