import * as React from "react"
import ListInput from "../components/ListInput/index"
import TitleMark from "../components/TitleMark/index"
import TextArea from "../components/TextArea/index"
import Btn from "../components/Btn/index"

import DataWarranty from "../data/dataWarranty"

import "../styles/Base/index.scss"

const WarrantyPage = () => (
    <main>
        <TitleMark
            title={DataWarranty.titleMark.title}
        />

        <form className="warranty container" id="warrantyForm" name="warrantyForm" method="post">
            <div className="warranty--left">
                <ListInput
                    classNames={DataWarranty.listInput.classNames}
                    title={DataWarranty.listInput.title}
                    dataInput={DataWarranty.dataInput}
                />
                <ListInput
                    classNames={DataWarranty.listInput2.classNames}
                    title={DataWarranty.listInput2.title}
                    dataInput={DataWarranty.dataInput2}
                />
                <ListInput
                    classNames={DataWarranty.listInput3.classNames}
                    title={DataWarranty.listInput3.title}
                    dataInput={DataWarranty.dataInput3}
                />

            </div>

            <div className ="warranty--right">

                <ListInput
                    classNames={DataWarranty.listInput4.classNames}
                    title={DataWarranty.listInput4.title}
                    dataInput={DataWarranty.dataInput4}
                />

                <TextArea
                    classNames={DataWarranty.textArea.classNames}
                    title={DataWarranty.textArea.title}
                    subtitle={DataWarranty.textArea.subtitle}
                />

                <ListInput
                    dataInput={DataWarranty.dataInput5}
                />
                <Btn
                    title={DataWarranty.btn.title}
                />
            </div>
        </form>

    </main>
)
export default WarrantyPage