//imgs
import whyShop from "../imgs/gaby/whyShop.jpg"
import view from "../imgs/gaby/view.jpg"
import necklaces from "../imgs/gaby/Necklaces.jpg"
import rings from "../imgs/gaby/Rings.jpg"
import earrings from "../imgs/gaby/Earrings.jpg"
import bracelets from "../imgs/gaby/Bracelets.jpg"


import callMe from "../imgs/gaby/callMe.jpg"

const dataGaby = {
    hero: {
        classNames: "offset-lg-7 col-lg-5",
        slug: "FROM GABRIEL & CO.",
        title: "Call me Gaby",
        subtitle: "An attractively priced, curated fine jewelry label celebrating the vibrant individuality of the young-at-heart. Perfect for gift giving or treating yourself every day. Meet - Gaby.",
        alt: "ring and jewelry",
        img: callMe,
    },
    titleMark: {
        title: 'Shop Gaby Collection'
    },
    dataCards: [
        {
            classNames: 'items4',
            img: necklaces,
            alt: "image necklaces",
            title: "Necklaces",
            link: "#"
        },
        {
            classNames: 'items4',
            img: rings,
            alt: "image Rings",
            title: "Rings",
            link: "#"
        },
        {
            classNames: 'items4',
            img: earrings,
            alt: "image earrings",
            title: "Earrings",
            link: "#"
        },
        {
            classNames: 'items4',
            img: bracelets,
            alt: "image Bracelets",
            title: "Bracelets",
            link: "#"
        },
    ],
    BtnSee: {
        classNames: "down",
        title: "Shop Gaby Collection",
        url: "#",
        target: "__blank"
    },
    ImgSide1:{
        position: "left top",
        img: whyShop,
        alt: "image why shop",
        TextLinkBtn1: {
            classNames: "col-lg-6",
            title: "Why shop Gabriel?",
            subtitle: "Did you know that all Gabriel & Co. products are hand crafted by our artisans with utmost care in the highest quality?",
            linkNamebtn: "Learn More",
            linkBtn: "#",
        }
    },
    ImgSide2:{
        position: "right",
        img: view,
        alt: "image View in Store",
        TextLinkBtn1: {
            classNames: "col-lg-6",
            title: "View in Store",
            subtitle: "Schedule a free viewing and consultation at any Gabriel & Co. Authorized retail store near you.",
            linkNamebtn: "Learn More",
            linkBtn: "#",
        }
    }
}

export default dataGaby;