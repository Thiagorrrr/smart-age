//imgs

import View from "../imgs/contact/View-In-Store.jpg"
import Schedule from "../imgs/contact/Schedule.jpg"
import VisitStore from "../imgs/contact/Visit-Store.jpg"
import Shipping from "../imgs/contact/Shipping.jpg"
import International from "../imgs/contact/International-Shipping.jpg"
import Conditions from "../imgs/contact/Return-Conditions.jpg"
import Returns from "../imgs/contact/Returns.jpg"

const DataContact = {
    TextLinkBtn: {
        classNames: "container",
        title: 'Shop by Style',
        subtitle: 'Browse online, shop in store. Gabriel & Co. offers you to view, wear, and experience any ring in a store near you.'
    },
    list: {
        classNames: "top center",
    },
    dataCards: [
        {
            classNames: 'items3',
            img: View,
            alt: "image Select View In Store",
            title: 'Select "View In Store” ',
            subtitle: "With the biggest selection of engagement and bridal rings in the industry, take your time and browse all the different collections offered on the website.",
            link: "#"
        },
        {
            classNames: 'items3',
            img: Schedule,
            alt: "image Schedule Appointment",
            title: "Schedule Appointment",
            subtitle: "Our dedicated Concierge service team will contact you within 24 hours to arrange your preview at the nearest partner store. ",
            link: "#"
        },
        {
            classNames: 'items3',
            img: VisitStore,
            alt: "image Visit Store",
            title: "Visit Store",
            subtitle: "Visit the Gabriel & Co. partner store to try on your rings, discuss customized options and to purchase. No commitments.",
            link: "#"
        },
    ],
    BtnSee: {
        title: "start here",
        url: "#",
        target: "__blank"
    },
    ImgSide1: {
        position: "left top bottom",
        img: Shipping,
        alt: "image Shipping",
        TextLinkBtn1: {
            classNames: "textLeft col-lg-6",
            title: "Shipping",
            subtitle: "We offer free and fast standard shipping with all U.S.orders.",
            list: [
                "• All orders are shipped from the US.",
                "• Receive your order within 4 - 6 working days.Working days are Monday to Friday excluding federal holidays within the United States.",
                "• All orders are processed and shipped during Gabriel & Co.business hours – Monday through Friday from 8 AM to 8 PM.",
                "We do not deliver to freight forwarding addresses or PO Boxes.",
                "• When shipping your order, we will send a confirmation email with your tracking number to confirm that your order has been accepted.",
                "• Once you have received your tracking number, you may check the status of your order online.You may login into your account or visit the Customer Service page to use “Find Your Order.",
                "Please note all orders will require a signature on delivery."
            ]
        }
    },
    ImgSide2: {
        position: "right bottom",
        img: International,
        alt: "image International",
        TextLinkBtn2: {
            classNames: "textLeft col-lg-6",
            title: "International Shipping",
            subtitle: "We offer free and fast standard shipping with all U.S.orders.",
            paragraph: [
                "At this time, we are able to ship to the following countries:",
                "USA, Canada, UK, and Australia.",
                "Please note that customers are responsible to pay the cost of custom duties and taxes.",
                "We are only able to deliver to the shipping address that matches the billing address on your preferred method of payment. Item changes are not permitted once your order has been shipped.",
                "If your country is not listed, you may inquire about shipping with our Concierge Team here.",
            ]
        }
    },
    ImgSide3: {
        position: "left bottom",
        img: Returns,
        alt: "image Returns",
        TextLinkBtn3: {
            classNames: "textLeft col-lg-6",
            title: "Returns",
            paragraph: [
                {
                    title: "Please note that all customers are held responsible for return shipping postage costs."},
                {
                    title: "Returns are accepted within 30 days of shipping provided the return conditions specified below are met. Instructions are provided below."
                },
                {
                    classNames: "bold", 
                    title: "How to Return Your Purchase:",
                },
                {
                    title: "1. Contact our Customer Service Department via Email, Live Chat, or Call us at (212) 519-1400 to request a return (RA#)."
                },
                {
                    title: "2. Once you have arranged your return, complete the following steps: (a) Place the item(s) in the original shipping box or any other suitable box; (b) Attach the return label to the outside of the box and seal the box securely."
                },
                {
                    title: "Important: We do not accept liability for goods returned using any method other than our collection service."
                },
            ],
        }
    },
    ImgSide4: {
        position: "right",
        img: Conditions,
        alt: "image Conditions",
        TextLinkBtn4: {
            classNames: "textLeft col-lg-6",
            title: "Return Conditions",
            subtitle: "We offer free and fast standard shipping with all U.S.orders.",
            list: [
                "• Items must be returned in their original condition with the security tag intact.",
                "• All return packages must have the RA# clearly written/placed on the return package.",
                "• Note: If different authorized returns are being shipped in the same package, write/place additional RA#s on the return package.",
                "• Merchandise must be shipped with pre-paid postage to the address indicated on the RA label. We suggest insuring the package for the full purchase price of the item(s) for coverage.",
                "• Processing for returns or repairs will begin after package is delivered to us. All returns are subject to inspection by our Quality Control team before a refund is processed."
            ]
        }
    },
    TextLinkBtn2: {
        bg: "TextLinkBtn bg-gray top",
        classNames: "container padding",
        title: 'Exchanges',
        subtitle: 'To arrange an exchange, please contact our Customer Service Department directly. A new order for the new item must be placed on the Gabriel website within 30 days of the original purchase.'
    },
}

export default DataContact;