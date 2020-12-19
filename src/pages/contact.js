import * as React from "react"
import ImgSide from "../components/ImgSide/index"
import BtnSee from "../components/BtnSee/index"
import List from "../components/List/index"
import TextLinkBtn from "../components/TextLinkBtn/index"
import DataContact from "../data/dataContact"
import "../styles/Base/index.scss"
const ContactPage = () => (
    <main>
        <TextLinkBtn
            classNames={DataContact.TextLinkBtn.classNames}
            title={DataContact.TextLinkBtn.title}
            subtitle={DataContact.TextLinkBtn.subtitle}
            list={DataContact.TextLinkBtn.list}
            paragraph={DataContact.TextLinkBtn.paragraph}
        />

        <List
            classNames={DataContact.list.classNames}
            dataCards={DataContact.dataCards}
        />
        <BtnSee
            title={DataContact.BtnSee.title}
            url={DataContact.BtnSee.url}
            target={DataContact.BtnSee.target}
        />

        <ImgSide
            classNames={DataContact.ImgSide1.TextLinkBtn1.classNames}
            list={DataContact.ImgSide1.TextLinkBtn1.list}
            img={DataContact.ImgSide1.img}
            alt={DataContact.ImgSide1.alt}
            position={DataContact.ImgSide1.position}
            title={DataContact.ImgSide1.TextLinkBtn1.title}
            subtitle={DataContact.ImgSide1.TextLinkBtn1.subtitle}
            linkNamebtn={DataContact.ImgSide1.TextLinkBtn1.linkNamebtn}
            linkBtn={DataContact.ImgSide1.TextLinkBtn1.linkBtn}
        />

        <ImgSide
            classNames={DataContact.ImgSide2.TextLinkBtn2.classNames}
            paragraph={DataContact.ImgSide2.TextLinkBtn2.paragraph}
            img={DataContact.ImgSide2.img}
            alt={DataContact.ImgSide2.alt}
            position={DataContact.ImgSide2.position}
            title={DataContact.ImgSide2.TextLinkBtn2.title}
            subtitle={DataContact.ImgSide2.TextLinkBtn2.subtitle}
            linkNamebtn={DataContact.ImgSide2.TextLinkBtn2.linkNamebtn}
            linkBtn={DataContact.ImgSide2.TextLinkBtn2.linkBtn}
        />

        <ImgSide
            classNames={DataContact.ImgSide3.TextLinkBtn3.classNames}
            paragraph={DataContact.ImgSide3.TextLinkBtn3.paragraph}
            img={DataContact.ImgSide3.img}
            alt={DataContact.ImgSide3.alt}
            position={DataContact.ImgSide3.position}
            title={DataContact.ImgSide3.TextLinkBtn3.title}
            subtitle={DataContact.ImgSide3.TextLinkBtn3.subtitle}
            linkNamebtn={DataContact.ImgSide3.TextLinkBtn3.linkNamebtn}
            linkBtn={DataContact.ImgSide3.TextLinkBtn3.linkBtn}
        />

        <ImgSide
            classNames={DataContact.ImgSide4.TextLinkBtn4.classNames}
            list={DataContact.ImgSide4.TextLinkBtn4.list}
            img={DataContact.ImgSide4.img}
            alt={DataContact.ImgSide4.alt}
            position={DataContact.ImgSide4.position}
            title={DataContact.ImgSide4.TextLinkBtn4.title}
            subtitle={DataContact.ImgSide4.TextLinkBtn4.subtitle}
            linkNamebtn={DataContact.ImgSide4.TextLinkBtn4.linkNamebtn}
            linkBtn={DataContact.ImgSide4.TextLinkBtn4.linkBtn}
        />

        <section className={DataContact.TextLinkBtn2.bg} >
            <TextLinkBtn
                classNames={DataContact.TextLinkBtn2.classNames}
                title={DataContact.TextLinkBtn2.title}
                subtitle={DataContact.TextLinkBtn2.subtitle}
                list={DataContact.TextLinkBtn2.list}
                paragraph={DataContact.TextLinkBtn2.paragraph}
            />
        </section>
    </main>
)
export default ContactPage