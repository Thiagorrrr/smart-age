const DataWarranty = {
    titleMark: {
        classNames: "bottom",
        title: 'Product Registration / Warranty Registration'
    },
    listInput: {
         title: 'Serial Number',
    },
    dataInput: [
        {
            type: 'text',
            name: 'serialNumber',
            placeholder: 'Serial Number'
        }
    ],
    listInput2: {
         title: 'Customer Details',
    },
    dataInput2: [
        {
            type: 'text',
            name: 'Name',
            required: true,
            label:'Customer Details',
            placeholder: 'Your Name'
        },
        {
            type: 'email',
            name: 'Email',
            required: true,
            label:'Email',
            placeholder: 'Email Address'
        },
        {
            type: 'number',
            name: 'Phone',
            required: false,
            label:'Phone',
            placeholder: 'Phone Number'
        }
    ],
    listInput3: {
         title: 'Customer Address',
    },
    dataInput3: [
        {
            type: 'text',
            name: 'Address1',
            required: true,
            label:'Address 1',
        },
        {
            type: 'text',
            name: 'City',
            required: true,
            label:'City',
        },
        {
            type: 'text',
            name: 'stateCounty',
            required: true,
            label:'State / County',
        },
        {
            type: 'text',
            name: 'ZipPostCode',
            required: true,
            label:'Zip / Post Code',
        },
        {
            type: 'text',
            name: 'Country',
            required: true,
            label:'Country',
        }
    ],
    listInput4: {
         title: 'Purchase Details',
    },
    dataInput4: [
        {
            type: 'text',
            name: 'PurchaseDate',
            required: true,
            label:'Purchase Date',
        },
        {
            type: 'text',
            name: 'StyleNumber',
            required: true,
            label:'Style Number',
        }
    ],

    textArea: {
        classNames: "textLeft top",
        title: 'Warranty Policy',
        subtitle: 'Gabriel & Co. takes immeasurable pride in the quality and precision of our jewelry. We will therefore make any necessary repairs or replacements that prove to have manufacturing defects. But because we want you to wear your purchase with as much frequency, as joy, we are offering extended warranty protection beyond our regular guarantee. Gabriel & Co. will cover damages and repair jewelry due to normal wear and tear or accidental damage from one year of the date of purchase. The warranty is only valid if registered by its unique Gabriel Serial Number within 30 days of purchase. Detailed terms and conditions available online. Keep the original sales receipt and ensure the requested information is filled out online. By completing the warranty card and registering the serial number online, you have validated that you have read and fully understand the terms and conditions of the Gabriel & Co. warranty. Contact your local retailer or Gabriel & Co. at warranty@gabrielny.com. Thank you for purchasing Gabriel & Co. fine jewelry. We hope our heartfelt inspiration and commitment to peerless craftsmanship has created a work of beauty that you will cherish and wear for a lifetime.'
    },

    dataInput5: [
        {
            classNames: "inline",
            type: 'checkbox',
            name: 'Terms',
            required: true,
            label:' I Accept The Terms & Conditions ',
        },
    ],
    btn: {
        title: 'submit'
    }
}

export default DataWarranty;