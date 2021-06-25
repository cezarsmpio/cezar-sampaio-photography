import "../../static/assets/css/reset.css"
import "../../static/assets/css/main.css"

import * as React from "react"
import PropTypes from "prop-types"
import Head from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"
import { Logo } from "./Logo/Logo"
import { Menu } from "./Menu/Menu"

export function Layout(props) {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className={props.className}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="header">
        <div className="header__grid">
          <div className="header__logo">
            <Logo />
          </div>
          <div>
            <Menu />
          </div>
        </div>
      </header>

      <main className="main">{props.children}</main>

      <footer className="footer">
        <div className="footer__grid">
          <div>
            <Logo />
          </div>
          <div>
            <Menu />
          </div>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
