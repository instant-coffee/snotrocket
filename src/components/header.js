import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle , siteSection }) => (
  <header
    style={{
      background: `#000`,
      marginBottom: `3rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1160,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#AEF100`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#AEF100`,
            textDecoration: `none`,
          }}
        >
          {siteSection}
        </Link>
      </h2>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
