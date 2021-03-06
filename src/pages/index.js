import * as React from "react"
import { Link } from "gatsby"
// markup
const IndexPage = () => {
  return (
    <main >
      <nav>
        <ul>
          <li><Link to="/bujukan/">Bujukan</Link> </li>
          <br></br>
          <li><Link to="/amavida/">Amavida</Link> </li>
          <br></br>
          <li><Link to="/holiday/">Holiday</Link> </li>
          <br></br>
          <li><Link to="/contact/">Contact</Link> </li>
          <br></br>
          <li><Link to="/shipping/">Shipping</Link> </li>
          <br></br>
          <li><Link to="/privacy/">Privacy</Link> </li>
          <br></br>
          <li><Link to="/promotions/">Promotions</Link> </li>
          <br></br>
          <li><Link to="/renewal/">Renewal</Link> </li>
          <br></br>
          <li><Link to="/gaby/">Gaby</Link> </li>
          <br></br>
          <li><Link to="/warranty/">Warranty</Link> </li>
          <br></br>
          <li><Link to="/identification/">Identification</Link> </li>
          <br></br>
          <li><Link to="/strong/">Strong Together</Link> </li>
        </ul>
      </nav>
    </main>
  )
}

export default IndexPage
