import Search from "../imgs/identificaition/search.png"

import IdentificationRings from "../imgs/identificaition/identification-rings.jpg"

const DataIdentification = {
    hero: {
        classNames: "offset-lg-7 col-lg-5",
        title: "Gabriel & Co.’s Certification",
        subtitle: "Look up the ID number on your Gabriel & Co. jewelry piece and enter it in the field below. Click Submit to generate your digital Certificate of Authenticity and Stone Certification. Please contact customer service if you have any problems or questions.",
        alt: "image of rings",
        img: IdentificationRings
    },
    search: {
        action: "/",
        type: "text",
        placeholder: "Serial Number",
        name: "submit",
        btnName: "Submit",
        icon: Search,
        alt:"search"
    }
}

export default DataIdentification;