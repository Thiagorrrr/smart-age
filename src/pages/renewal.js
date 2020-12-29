import * as React from "react"
import ImgSide from "../components/ImgSide/index"
import BtnSee from "../components/BtnSee/index"
import Hero from "../components/Hero/index"
import List from "../components/List/index"
import TitleMark from "../components/TitleMark/index"
import TextLinkBtn from "../components/TextLinkBtn/index"
import dataRenewal from "../data/dataRenewal"
import "../styles/Base/index.scss"

const RenewalPage = () => (
    <main>
        <Hero
            subtitle={dataRenewal.hero.subtitle}
            title={dataRenewal.hero.title}
            alt={dataRenewal.hero.alt}
            img={dataRenewal.hero.img}
            link={dataRenewal.hero.link}
            linkName={dataRenewal.hero.linkName}
            classNames={dataRenewal.hero.classNames}
        />

        <TitleMark
            title={dataRenewal.titleMark.title}
        />

        <List
            dataCards={dataRenewal.dataCards}
        />

        <TextLinkBtn
            classNames={dataRenewal.TextLinkBtn.classNames}
            title={dataRenewal.TextLinkBtn.title}
            subtitle={dataRenewal.TextLinkBtn.subtitle}
        />

        <BtnSee
            title={dataRenewal.BtnSee.title}
            url={dataRenewal.BtnSee.url}
            target={dataRenewal.BtnSee.target}
        />

        <ImgSide
            classNames={dataRenewal.ImgSide1.TextLinkBtn1.classNames}
            img={dataRenewal.ImgSide1.img}
            alt={dataRenewal.ImgSide1.alt}
            position={dataRenewal.ImgSide1.position}
            title={dataRenewal.ImgSide1.TextLinkBtn1.title}
            subtitle={dataRenewal.ImgSide1.TextLinkBtn1.subtitle}
            linkNamebtn={dataRenewal.ImgSide1.TextLinkBtn1.linkNamebtn}
            linkBtn={dataRenewal.ImgSide1.TextLinkBtn1.linkBtn}
        />

        <ImgSide
            classNames={dataRenewal.ImgSide2.TextLinkBtn1.classNames}
            img={dataRenewal.ImgSide2.img}
            alt={dataRenewal.ImgSide2.alt}
            position={dataRenewal.ImgSide2.position}
            title={dataRenewal.ImgSide2.TextLinkBtn1.title}
            subtitle={dataRenewal.ImgSide2.TextLinkBtn1.subtitle}
            linkNamebtn={dataRenewal.ImgSide2.TextLinkBtn1.linkNamebtn}
            linkBtn={dataRenewal.ImgSide2.TextLinkBtn1.linkBtn}
        />


    </main>
)
export default RenewalPage