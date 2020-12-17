import * as React from "react"
import ImgSide from "../components/ImgSide/index"
import BtnSee from "../components/BtnSee/index"
import Hero from "../components/Hero/index"
import List from "../components/List/index"
import TitleMark from "../components/TitleMark/index"
import DataAmavida from "../data/dataAmavida"
import "../styles/Base/index.scss"
const AmavidaPage = () => (
    <main>
        <Hero
            subtitle={DataAmavida.hero.subtitle}
            title={DataAmavida.hero.title}
            alt={DataAmavida.hero.alt}
            img={DataAmavida.hero.img}
            link={DataAmavida.hero.link}
            linkName={DataAmavida.hero.linkName}
            classNames={DataAmavida.hero.classNames}
        />

        <TitleMark
            title={DataAmavida.titleMark.title}
        />

        <List
            dataCards={DataAmavida.dataCards}
        />
          <BtnSee
            title={DataAmavida.BtnSee.title}
            url={DataAmavida.BtnSee.url}
            target={DataAmavida.BtnSee.target}
        />

        <ImgSide
            classNames={DataAmavida.ImgSide1.TextLinkBtn1.classNames}
            img={DataAmavida.ImgSide1.img}
            alt={DataAmavida.ImgSide1.alt}
            position={DataAmavida.ImgSide1.position}
            title={DataAmavida.ImgSide1.TextLinkBtn1.title}
            subtitle={DataAmavida.ImgSide1.TextLinkBtn1.subtitle}
            linkNamebtn={DataAmavida.ImgSide1.TextLinkBtn1.linkNamebtn}
            linkBtn={DataAmavida.ImgSide1.TextLinkBtn1.linkBtn}
        />

        <ImgSide
            classNames={DataAmavida.ImgSide2.TextLinkBtn1.classNames}
            img={DataAmavida.ImgSide2.img}
            alt={DataAmavida.ImgSide2.alt}
            position={DataAmavida.ImgSide2.position}
            title={DataAmavida.ImgSide2.TextLinkBtn1.title}
            subtitle={DataAmavida.ImgSide2.TextLinkBtn1.subtitle}
            linkNamebtn={DataAmavida.ImgSide2.TextLinkBtn1.linkNamebtn}
            linkBtn={DataAmavida.ImgSide2.TextLinkBtn1.linkBtn}
        />
        

    </main>
)
export default AmavidaPage