import * as React from "react"
import ImgSide from "../components/ImgSide/index"
import BtnSee from "../components/BtnSee/index"
import Hero from "../components/Hero/index"
import List from "../components/List/index"
import TitleMark from "../components/TitleMark/index"
import dataGaby from "../data/dataGaby"
import "../styles/Base/index.scss"

const RenewalPage = () => (
    <main>
        <Hero
            subtitle={dataGaby.hero.subtitle}
            slug={dataGaby.hero.slug}
            title={dataGaby.hero.title}
            alt={dataGaby.hero.alt}
            img={dataGaby.hero.img}
            link={dataGaby.hero.link}
            linkName={dataGaby.hero.linkName}
            classNames={dataGaby.hero.classNames}
        />

        <TitleMark
            title={dataGaby.titleMark.title}
        />

        <List
            dataCards={dataGaby.dataCards}
        />

        <BtnSee
            classNames={dataGaby.BtnSee.classNames}
            title={dataGaby.BtnSee.title}
            url={dataGaby.BtnSee.url}
            target={dataGaby.BtnSee.target}
        />

        <ImgSide
            classNames={dataGaby.ImgSide1.TextLinkBtn1.classNames}
            img={dataGaby.ImgSide1.img}
            alt={dataGaby.ImgSide1.alt}
            position={dataGaby.ImgSide1.position}
            title={dataGaby.ImgSide1.TextLinkBtn1.title}
            subtitle={dataGaby.ImgSide1.TextLinkBtn1.subtitle}
            linkNamebtn={dataGaby.ImgSide1.TextLinkBtn1.linkNamebtn}
            linkBtn={dataGaby.ImgSide1.TextLinkBtn1.linkBtn}
        />

        <ImgSide
            classNames={dataGaby.ImgSide2.TextLinkBtn1.classNames}
            img={dataGaby.ImgSide2.img}
            alt={dataGaby.ImgSide2.alt}
            position={dataGaby.ImgSide2.position}
            title={dataGaby.ImgSide2.TextLinkBtn1.title}
            subtitle={dataGaby.ImgSide2.TextLinkBtn1.subtitle}
            linkNamebtn={dataGaby.ImgSide2.TextLinkBtn1.linkNamebtn}
            linkBtn={dataGaby.ImgSide2.TextLinkBtn1.linkBtn}
        />


    </main>
)
export default RenewalPage