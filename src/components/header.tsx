import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { pColor } from "./variables"

const StyledHeader = styled.header`
  padding: 3rem;
  max-width: 70rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 2rem;
  align-items: center;
  h1 {
    font-size: 1.75em;
    font-family: "Yellowtail";
  }
  p {
    /* font-size: 1em; */
  }
  * {
    margin: 0;
  }
  > div {
    cursor: pointer;
    span {
      color: ${pColor};
    }
  }
`

interface Props {
  siteTitle: string
  setLg: (value: string) => void
}

const Header: React.FC<Props> = ({ siteTitle, setLg }) => {
  const handleClick = (v: string) => {
    setLg(v)
  }

  return (
    <StyledHeader>
      <h1>{siteTitle}</h1>
      <div>
        <span onClick={() => handleClick("en-uk")}>🇬🇧</span>
        <span onClick={() => handleClick("es-es")}>🇪🇸</span>
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
