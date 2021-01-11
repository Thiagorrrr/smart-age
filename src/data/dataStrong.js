import video1 from "../imgs/strong/video1.jpg"
import video2 from "../imgs/strong/video2.jpg"
import video3 from "../imgs/strong/video3.jpg"
import video4 from "../imgs/strong/video4.jpg"
import video5 from "../imgs/strong/video5.jpg"
import casaGal from "../imgs/strong/casa-gal.jpg"
import gaEco from "../imgs/strong/gabriel-e-co.jpg"
import ForChildren from "../imgs/strong/jewelers-for-children.jpg"
import RingBig from "../imgs/strong/ring-strong-big.jpg"
import RingThumb from "../imgs/strong/ring-strong.jpg"



import Strong from "../imgs/strong/strongTogether.jpg"
import StrongDesk from "../imgs/strong/strongTogether-desk.jpg"


const DataStrong = {
    hero: {
        classNames: "offset-lg-7 col-lg-5 ",
        title: "Stronger <br> Together",
        alt: "woman with jewelry",
        img: Strong,
        imgTablet: StrongDesk,
        imgDesk: StrongDesk,
    },
    TextLinkBtn: {
        classNames: "container top",
        slug: "THE INITIATIVE",
        title: "A strong necklace with a powerful cause",
        subtitle: "Following up on our successful 91>19 bracelet campaign that raised $91,000 in donations for Jewelers for Children (JFC), the new Stronger Together initiative is centered around a beautiful circle pendant made from two intertwined strands representing the strength of togetherness. A simple, timeless yet elegant necklace to wear everyday as a reminder of the power of humanity, it also makes for a meaningful gift to a friend or loved one."
    },

    Video: {
        title: "video",
        src: "https://www.youtube.com/embed/KDMbfu-Um9k"
    },
    TextLinkBtn2: {
        classNames: "container top",
        slug: "THE CAUSE",
        title: "Our passion is crafting fine jewelry, our purpose is giving back with love",
        paragraph: [
            {
                title: "Following up on our successful 91>19 bracelet campaign that raised $91,000 in donations for Jewelers for Children (JFC), the new Stronger Together initiative is centered around a beautiful circle pendant made from two intertwined strands representing the strength of togetherness. A simple, timeless yet elegant necklace to wear everyday as a reminder of the power of humanity, it also makes for a meaningful gift to a friend or loved one.",
            },
            {
                classNames: "center",
                title: "Thank You & God Bless You"
            },           
        ]
    },


    dataCards: [
        {
            classNames: "items5",
            videoImg: video1,
            alt: "image video1",
            videoTitle: "video1",
            videoSrc: "https://www.youtube.com/embed/3p9J9zyd9GY"
            
        },
        {
            classNames: "items5",
            videoImg: video2,
            alt: "image video2",
            videoTitle: "video",
            videoSrc: "https://www.youtube.com/embed/GgpN3-iZKdc"
            
        },
        {
            classNames: "items5",
            videoImg: video3,
            alt: "image video3",
            videoTitle: "video",
            videoSrc: "https://www.youtube.com/embed/oXgfrnWRTp8"
            
        },
        {
            classNames: "items5",
            img: video4,
            alt: "image video4",             
        },
        {
            classNames: "items5",
            img: video5,
            alt: "image video5",             
        },
     
    ],

    TextLinkBtn3: {
        classNames: "container top",
        slug: "THE NECKLACE",
        title: "Crafted for strength & beauty",
        subtitle: "We designed and handcrafted this special edition necklace with the finest materials at an attractive price point in the hope to attract as many people as possible to buy and wear it as a sign of togetherness and strength in these challenging times."
    },

    list: {
        classNames: "topLine mobileHidden",
    },
    dataCards2: [
        {
            classNames: "items3",
            img: casaGal,
            alt: "image Casa Gal", 
        },
        {
            classNames: "items3",
            img: gaEco,
            alt: "image Gabriel e Co",           
        },  
        {
            classNames: "items3",
            img: ForChildren,
            alt: "image Jewelers For Children",           
        },  
    ],

    dataInfoProduct: [
        {
            title: "Design",
            paragraph: ['Twisted rope in circle form']
        },
        {
            title: "Material",
            paragraph: ['925 silver']
        },
        {
            title: "Fit",
            paragraph: [
                {
                    info: 'Size: 21mm'
                },
                {
                    info: 'Size: 21mm'
                },
                {
                    info: 'Thickness: 3.1mm'
                }
            ]
        },
        {
            title: "Packaging",
            paragraph: ['Suede pouch & box']
        },
        {
            price: "Price: $100",
            obs: "*All sales proceeds going to JFC benefiting CASA",
            btnTitle: "Add to Cart",
            btnLink: "#"
        },
    ],
    dataCarousel: [
        {
            img: RingBig,
            imgThumb: RingThumb,
            alt: 'hills'
        },
        {
            img: RingBig,
            imgThumb: RingThumb,
            alt: 'hills'
        },
        {
            img: RingBig,
            imgThumb: RingThumb,
            alt: 'hills'
        },
        {
            img: RingBig,
            imgThumb: RingThumb,
            alt: 'hills'
        },
    ]
}

export default DataStrong;