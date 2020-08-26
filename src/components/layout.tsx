import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import styled from "styled-components"
import { pColor, btnTxtColor, ctaColor } from "./variables"
// @ts-ignore
import favicon from "../images/favicon.png"
import Helmet from "react-helmet"
import { FormattedMessage } from "react-intl"
import GoodreadsIcon from "./goodreads"
import GithubIcon from "./github"
import LinkedinIcon from "./linkedin"

const StyledFooter = styled.footer`
  text-align: center;
  color: ${pColor};
  padding: 3rem 3rem 2rem 3rem;
`

const StyledLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 10px;
  justify-content: center;
  svg {
    width: 40px;
    height: auto;
    fill: ${btnTxtColor};
  }
  svg:hover {
    fill: ${ctaColor};
  }
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
          <StyledLinks>
            <a href="https://www.github.com/raul-saez">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/raul-saez/">
              <LinkedinIcon />
            </a>
            <a href="https://www.goodreads.com/user/show/117148033-raul">
              <GoodreadsIcon />
            </a>
          </StyledLinks>
          ©️ <FormattedMessage id="footer" /> ♥️
        </StyledFooter>
      </div>
    </>
  )
}

export default Layout
