import * as React from "react"
import Hero from "../components/Hero/index"
import TextLinkBtn from "../components/TextLinkBtn/index"
import DataPromotions from "../data/dataPromotions"
import "../styles/Base/index.scss"
const PromotionsPage = () => (
    <main>
        <Hero
            subtitle={DataPromotions.hero.subtitle}
            title={DataPromotions.hero.title}
            alt={DataPromotions.hero.alt}
            img={DataPromotions.hero.img}
            link={DataPromotions.hero.link}
            linkName={DataPromotions.hero.linkName}
            classNames={DataPromotions.hero.classNames}
        />

        <section className={DataPromotions.TextLinkBtn.classNames} >
            <TextLinkBtn
                classNames={DataPromotions.TextLinkBtn1.classNames}
                title={DataPromotions.TextLinkBtn1.title}
                subtitle={DataPromotions.TextLinkBtn1.subtitle}
                list={DataPromotions.TextLinkBtn1.list}
                paragraph={DataPromotions.TextLinkBtn1.paragraph}
            />
        </section>
        <section className={DataPromotions.TextLinkBtn2.bg} >
            <TextLinkBtn
                classNames={DataPromotions.TextLinkBtn2.classNames}
                title={DataPromotions.TextLinkBtn2.title}
                subtitle={DataPromotions.TextLinkBtn2.subtitle}
                info={DataPromotions.TextLinkBtn2.info}
                list={DataPromotions.TextLinkBtn2.list}
                paragraph={DataPromotions.TextLinkBtn2.paragraph}
                linkNamebtn={DataPromotions.TextLinkBtn2.linkNamebtn}
                linkBtn={DataPromotions.TextLinkBtn2.linkBtn}
            />

        </section>

    </main>
)
export default PromotionsPage