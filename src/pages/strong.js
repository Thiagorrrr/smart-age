import * as React from "react"

import Hero from "../components/Hero/index"
import List from "../components/List/index"
import Video from "../components/Video/index"
import TextLinkBtn from "../components/TextLinkBtn/index"
import Carousel from "../components/Carousel/index"
import InfoProduct from "../components/InfoProduct/index"
import DataStrong from "../data/dataStrong"
import "../styles/Base/index.scss"

const StrongPage = () => (
  <main>
    <Hero
      subtitle={DataStrong.hero.subtitle}
      title={DataStrong.hero.title}
      alt={DataStrong.hero.alt}
      img={DataStrong.hero.img}
      imgTablet={DataStrong.hero.imgTablet}
      imgDesk={DataStrong.hero.imgDesk}
      link={DataStrong.hero.link}
      linkName={DataStrong.hero.linkName}
      classNames={DataStrong.hero.classNames}
    />

    <TextLinkBtn
      classNames={DataStrong.TextLinkBtn.classNames}
      slug={DataStrong.TextLinkBtn.slug}
      title={DataStrong.TextLinkBtn.title}
      subtitle={DataStrong.TextLinkBtn.subtitle}
    />

    <section className="video__container">
      <Video
        title={DataStrong.Video.title}
        src={DataStrong.Video.src} />
    </section>

    <TextLinkBtn
      classNames={DataStrong.TextLinkBtn2.classNames}
      slug={DataStrong.TextLinkBtn2.slug}
      title={DataStrong.TextLinkBtn2.title}
      subtitle={DataStrong.TextLinkBtn2.subtitle}
      paragraph={DataStrong.TextLinkBtn2.paragraph}
    />

    <List
      dataCards={DataStrong.dataCards}
    />

    <TextLinkBtn
      classNames={DataStrong.TextLinkBtn3.classNames}
      slug={DataStrong.TextLinkBtn3.slug}
      title={DataStrong.TextLinkBtn3.title}
      subtitle={DataStrong.TextLinkBtn3.subtitle}
    />

    <section className="strong__container container">
      <Carousel
        DataStrong={DataStrong.dataCarousel}
      />

      <InfoProduct
        dataInfoProduct={DataStrong.dataInfoProduct}
      />
    </section>

    <List
      classNames={DataStrong.list.classNames}
      dataCards={DataStrong.dataCards2}
    />

  </main>
)
export default StrongPage