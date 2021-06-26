import * as React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/Seo/Seo"

export default function NotFoundPage() {
  return (
    <Layout className="not-found">
      <Seo title="Page not found" />

      <div className="wrap">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Not Found</h2>
      </div>
    </Layout>
  )
}
