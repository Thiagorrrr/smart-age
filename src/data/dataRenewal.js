//imgs
import WhyShop from "../imgs/amavida/why-shop.jpg"
import Halo from "../imgs/renewal/halo.jpg"
import splintShank from "../imgs/renewal/splint-shank.jpg"
import threeStone from "../imgs/renewal/three-stone.jpg"
import freeForm from "../imgs/renewal/free-form.jpg"
import bypass from "../imgs/renewal/bypass.jpg"
import twisted from "../imgs/renewal/twisted.jpg"
import doubleHalo from "../imgs/renewal/double-halo.jpg"

import Renewal from "../imgs/renewal/Renewal.jpg"
import Diamonds from "../imgs/amavida/diamond-band.jpg"

const dataRenewal = {
    hero: {
        classNames: "dark offset-lg-7 col-lg-5",
        title: "Renewal",
        subtitle: "Our remount collection is inspired by the momentous occasion of renewing your vows and celebrating the beauty of your marriage. Reflected in your continuous and evolving love for one another.",
        alt: "ring and jewelry",
        img: Renewal,
        link: "#",
        linkName: "View All >"
    },
    titleMark: {
        title: 'Shop by Style'
    },
    dataCards: [
        {
            img: Halo,
            alt: "image Halo",
            title: "Halo",
            link: "#"
        },
        {
            img: splintShank,
            alt: "image splint Shank",
            title: "Splint Shank",
            link: "#"
        },
        {
            img: threeStone,
            alt: "image Three Stone",
            title: "Three Stone",
            link: "#"
        },
        {
            img: freeForm,
            alt: "image Free Form",
            title: "Free Form",
            link: "#"
        },
        {
            img: bypass,
            alt: "image bypass",
            title: "Bypass",
            link: "#"
        },
        {
            img: twisted,
            alt: "image Twisted",
            title: "Twisted",
            link: "#"
        },
        {
            img: doubleHalo,
            alt: "image Double Halo",
            title: "Double Halo",
            link: "#"
        },
    ],
    TextLinkBtn: {
        classNames: "dark  top container",
        title: 'Best Sellers',
        subtitle: 'Our most unique and sought after Renewal engagement rings.'
    }, 
    BtnSee: {
        title: "Shop Remount Bridal",
        url: "#",
        target: "__blank"
    },
    ImgSide1:{
        position: "left top",
        img: WhyShop,
        alt: "image Why shop",
        TextLinkBtn1: {
            classNames: "dark col-lg-6",
            title: "Why shop Gabriel?",
            subtitle: "Did you know that all Gabriel & Co. products are hand crafted by our artisans with utmost care in the highest quality?",
            linkNamebtn: "Learn More",
            linkBtn: "#",
        }
    },
    ImgSide2:{
        position: "right",
        img: Diamonds,
        alt: "image Diamonds Bands",
        TextLinkBtn1: {
            classNames: "dark col-lg-6",
            title: "Diamonds Bands",
            subtitle: "An array of settings that go beyond singular beauty, possessing stunning and unexpected flourishes of romantic artistry",
            linkNamebtn: "Discover",
            linkBtn: "#",
        }
    }
}

export default dataRenewal;