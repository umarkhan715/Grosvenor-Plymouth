import React from 'react'
import Styles from './description.module.css'

function Description() {
    return (
        <div className="container">
            <div className="row w-75">
                <div className={Styles.description}>
                    <div> <h1 className={Styles.heading}> For best prices, book directly through our website or please call us on 01752 260411 </h1> </div>
                    <div> <p className={Styles.paragraph}> Originally built in 1879 this beautiful Victorian property was formerly used as a private residential dwelling before being transformed into the Grosvenor Hotel in 1990. Currently operating on a bed and breakfast basis, a full locally sourced and freshly cooked breakfast is included in your overnight price. Our two guest lounges and TV room are friendly and inviting places to relax outside of your room and host a fully stocked licensed bar, a selection of freshly ground coffees and bar snacks. We have good quality WiFi with unlimited wireless fibre broadband throughout all guest rooms and communal areas. Being situated on the Plymouth Hoe, just 50 yards from the stunning views of the Plymouth Sound and less than 200 yards from the modern and bustling city centre, the Grosvenor Plymouth is the perfect residence for a wide variety of visitors. Whether for work, study, a holiday, visiting family or simply a well earned break, the personal touch and comforts of the hotel will certainly ensure an enjoyable stay.</p> </div>
                </div>
            </div>

        </div>
    )
}

export default Description