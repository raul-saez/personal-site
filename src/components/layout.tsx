import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import styled from "styled-components"
import { pColor } from "./variables"
// @ts-ignore
import favicon from "../images/favicon.ico"
import Helmet from "react-helmet"
import { FormattedMessage } from "react-intl"

const StyledFooter = styled.footer`
  text-align: center;
  color: ${pColor};
  padding: 3rem 3rem 2rem 3rem;
`

interface Props {
  lg?: (value: string) => void
}

const Layout: React.FC<Props> = ({ children, lg }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleLgChange = (value: string) => {
    lg(value)
  }

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
        <link
          href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header setLg={handleLgChange} siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <StyledFooter>
          ©️ <FormattedMessage id="footer" /> ♥️
        </StyledFooter>
      </div>
    </>
  )
}

export default Layout
