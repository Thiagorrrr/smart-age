import * as React from "react"
import Hero from "../components/Hero/index"
import List from "../components/List/index"
import DataHoliday from "../data/dataHoliday"
import "../styles/Base/index.scss"
const HolidayPage = () => (
    <main>
        <Hero
            classNames={DataHoliday.hero.classNames}
            subtitle={DataHoliday.hero.subtitle}
            title={DataHoliday.hero.title}
            alt={DataHoliday.hero.alt}
            img={DataHoliday.hero.img}
        />

        <List
            classNames={DataHoliday.list.classNames}
            dataCards={DataHoliday.dataCards}
        />

    </main>
)
export default HolidayPage