import "./PhotoCard.css"
import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export function PhotoCard(props) {
  const image = getImage(props.image)

  return (
    <div className="photo-card">
      <Link to={`/work/${props.slug}`} className="photo-card__link">
        <GatsbyImage image={image} className="photo-card__picture" alt="" />
        <h3 className="photo-card__title">{props.title}</h3>
        <p className="photo-card__description">{props.description}</p>
      </Link>
    </div>
  )
}
