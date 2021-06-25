import * as React from "react"
import { Layout } from "../components/layout"

export default function NotFoundPage() {
  return (
    <Layout className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Not Found</h2>
    </Layout>
  )
}
