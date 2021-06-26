import * as React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Layout } from "../components/layout"
import { Seo } from "../components/Seo/Seo"

export default function PricingPage(props) {
  return (
    <Layout className="pricing">
      <Seo title="Pricing" />

      <div className="wrap">
        <section className="pricing__prices">
          {props.data.pricing.nodes.map((price, index) => (
            <div className="pricing__price" key={index}>
              <div>
                <h3
                  className={`pricing__name ${
                    price.highlighted ? "pricing__name--highlighted" : ""
                  }`}
                >
                  {price.name}
                </h3>
                <div className="pricing__content">
                  {documentToReactComponents(JSON.parse(price.description.raw))}
                </div>
              </div>

              <div>
                <p className="pricing__price-number">{price.price}</p>
                <Link to="mailto:cezarsmpio@gmail.com" className="link">
                  Book
                </Link>
              </div>
            </div>
          ))}
        </section>

        <p className="pricing__discount">
          *Get 10% off by allowing me to share your photos on my portfolio and
          social medias.
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    pricing: allContentfulPricing(sort: { fields: price, order: ASC }) {
      nodes {
        highlighted
        name
        price
        description {
          raw
        }
      }
    }
  }
`
