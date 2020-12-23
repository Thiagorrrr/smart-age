import * as React from "react"
import TextLinkBtn from "../components/TextLinkBtn/index"
import DataShipping from "../data/DataShipping"
import "../styles/Base/index.scss"
const ShippingPage = () => (
    <main>
        <section className={DataShipping.TextLinkBtn.classNames} >
            <TextLinkBtn
                classNames={DataShipping.TextLinkBtn1.classNames}
                title={DataShipping.TextLinkBtn1.title}
                subtitle={DataShipping.TextLinkBtn1.subtitle}
                list={DataShipping.TextLinkBtn1.list}
                paragraph={DataShipping.TextLinkBtn1.paragraph}
            />
            <TextLinkBtn
                classNames={DataShipping.TextLinkBtn2.classNames}
                title={DataShipping.TextLinkBtn2.title}
                subtitle={DataShipping.TextLinkBtn2.subtitle}
                list={DataShipping.TextLinkBtn2.list}
                paragraph={DataShipping.TextLinkBtn2.paragraph}
            />
        </section>
    </main>
)
export default ShippingPage