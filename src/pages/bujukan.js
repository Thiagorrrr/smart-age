import * as React from "react"
import Hero from "../components/Hero/index"
import List from "../components/List/index"
import BtnSee from "../components/BtnSee/index"
import DataBujukan from "../data/dataBujukan"
import "../styles/Base/index.scss"
const BujukanPage = () => (
    <main>
        <Hero
            classNames={DataBujukan.hero.classNames}
            subtitle={DataBujukan.hero.subtitle}
            title={DataBujukan.hero.title}
            alt={DataBujukan.hero.alt}
            img={DataBujukan.hero.img}
        />

        <List
            dataCards={DataBujukan.dataCards}
        />

        <BtnSee
            title={DataBujukan.BtnSee.title}
            url={DataBujukan.BtnSee.url}
            target={DataBujukan.BtnSee.target}
        />

    </main>
)
export default BujukanPage