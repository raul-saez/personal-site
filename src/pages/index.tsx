import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../components/globalStyles"
import { ctaColor, btnTxtColor } from "../components/variables"
import { IntlProvider, FormattedMessage } from "react-intl"

const StyledContent = styled.div`
  display: grid;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 3rem;
  gap: 5rem;
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  img,
  svg {
    fill: #ff8906;
    display: none;
    @media (min-width: 1000px) {
      display: block;
    }
    max-height: 350px;
    width: 100%;
    align-self: center;
  }
`

const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  background-color: ${ctaColor};
  color: ${btnTxtColor};
  padding: 1.2rem 2rem;
  border-radius: 3px;
  font-size: 1.1em;
  font-weight: 700;
  margin-top: 2.5rem;
  width: max-content;
`

const translationsEn = {
  hello: "Hello",
  description: `My name is Raúl Sáez and I'm a passionate
  Full Stack Developer with experience in JavaScript and PHP
  frameworks and libraries such as React, Angular and
  Laravel.`,
  description2: `Some clients I have worked with and that you might recognise are:
  Liverpool FC, Bentley and Unison.`,
  contact: "Drop me a line",
  footer: "This site was built by me with TypeScript, Gatsby and a lot of",
}

const translationsEs = {
  hello: "Hola",
  description: `Mi nombre es Raúl Sáez y soy un apasionado Full Stack Developer con experiencia en frameworks y librerias the JavaScript y PHP como React, Angular y
  Laravel.`,
  description2: `Algunos clientes con los que he trabajado y puede que conozcas son:
  Liverpool FC, Bentley y Ayto. Orihuela.`,
  contact: "Contacta conmigo",
  footer: "Esta web ha sido creada por mi con TypeScript, Gatsby y mucho",
}

const IndexPage: React.FC = () => {
  const [lg, setLg] = useState<string>("en-uk")

  return (
    <IntlProvider
      locale={lg}
      messages={lg === "en-uk" ? translationsEn : translationsEs}
    >
      <Layout lg={setLg}>
        <GlobalStyle />
        <SEO title="👨🏽‍💻" />
        <StyledContent>
          <div>
            <h1>
              <FormattedMessage id="hello" /> 👋🏽
            </h1>
            <p>
              <FormattedMessage id="description" />
            </p>
            <p>
              <FormattedMessage id="description2" />
            </p>
            <StyledLink
              target="_blank"
              href="mailto:raulsaezp@gmail.com?subject=Enquiry&body=Hey Raul,"
            >
              <FormattedMessage id="contact" />
            </StyledLink>
          </div>
          <svg fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"
            />
            <path
              fill="#a7a9be"
              fillRule="evenodd"
              d="M6.854 4.646a.5.5 0 010 .708L4.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0zm2.292 0a.5.5 0 000 .708L11.793 8l-2.647 2.646a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0z"
            />
          </svg>
        </StyledContent>
      </Layout>
    </IntlProvider>
  )
}

export default IndexPage
