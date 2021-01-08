import * as React from "react"
import Hero from "../components/Hero/index"
import Search from "../components/Search/index"

import DataIdentification from "../data/dataIdentification"
import "../styles/Base/index.scss"
const IdentificationPage = () => (
    <main>
        <Hero
            classNames={DataIdentification.hero.classNames}
            subtitle={DataIdentification.hero.subtitle}
            title={DataIdentification.hero.title}
            alt={DataIdentification.hero.alt}
            img={DataIdentification.hero.img}
        />

        <Search
            alt={DataIdentification.search.alt}
            icon={DataIdentification.search.icon}
            action={DataIdentification.search.action}
            type={DataIdentification.search.type}
            placeholder={DataIdentification.search.placeholder}
            name={DataIdentification.search.name}
            btnName={DataIdentification.search.btnName}
        />

    </main>
)
export default IdentificationPage