import * as React from "react"
import TextLinkBtn from "../components/TextLinkBtn/index"
import DataPrivacy from "../data/DataPrivacy"
import "../styles/Base/index.scss"
const PrivacyPage = () => (
    <main>
        <section className={DataPrivacy.TextLinkBtn.classNames} >
            <TextLinkBtn
                classNames={DataPrivacy.TextLinkBtn1.classNames}
                title={DataPrivacy.TextLinkBtn1.title}
                subtitle={DataPrivacy.TextLinkBtn1.subtitle}
                list={DataPrivacy.TextLinkBtn1.list}
                paragraph={DataPrivacy.TextLinkBtn1.paragraph}
            />
            <TextLinkBtn
                classNames={DataPrivacy.TextLinkBtn2.classNames}
                title={DataPrivacy.TextLinkBtn2.title}
                subtitle={DataPrivacy.TextLinkBtn2.subtitle}
                list={DataPrivacy.TextLinkBtn2.list}
                paragraph={DataPrivacy.TextLinkBtn2.paragraph}
            />
            <TextLinkBtn
                classNames={DataPrivacy.TextLinkBtn3.classNames}
                title={DataPrivacy.TextLinkBtn3.title}
                subtitle={DataPrivacy.TextLinkBtn3.subtitle}
                list={DataPrivacy.TextLinkBtn3.list}
                paragraph={DataPrivacy.TextLinkBtn3.paragraph}
            />
        </section>
    </main>
)
export default PrivacyPage