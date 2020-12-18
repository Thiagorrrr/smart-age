import * as React from "react"
import { Link } from "gatsby"
// markup
const IndexPage = () => {
  return (
    <main >
      <nav>
        <ul>
          <li><Link to="/bujukan/">bujukan</Link> </li>
          <li><Link to="/amavida/">amavida</Link> </li>
          <li><Link to="/holiday/">holiday</Link> </li>
        </ul>
      </nav>
    </main>
  )
}

export default IndexPage
