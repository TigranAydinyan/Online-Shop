import React from "react";
import Styles from "./RegularPage.module.css";
import bg8 from "./image/bg-8.jpg";
import Footer from "../Footer/Footer";

function RegularPage(){

    return(
        <div className={Styles.regular}>
            <div>
                <img src={bg8} alt="" className={Styles.img} />
            </div>
            <div className={Styles.item1}>
                <h2 className={Styles.title}>Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada</h2>
                <p className={Styles.text}>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis ac eu nisi. In accumsan tellus ut dapibus blandit.</p>
                <div className="d-flex mb-5">
                    <i  aria-hidden="true" className={`fa fa-quote-left ${Styles.icon}`}></i>
                    <div>
                        <h6 className={Styles.h6}> Quisque sagittis non ex eget vestibulum. Sed nec ultrices dui. Cras et sagittis erat. Maecenas pulvinar, turpis in dictum tincidunt, dolor nibh lacinia lacus.</h6>
                        <span className={Styles.liam}>Liam Neeson</span>
                    </div>
                </div>
                <p  className={Styles.text}>Praesent ac magna sed massa euismod congue vitae vitae risus. Nulla lorem augue, mollis non est et, eleifend elementum ante. Nunc id pharetra magna. Praesent vel orci ornare, blandit mi sed, aliquet nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <Footer />
        </div>
    )
}

export default RegularPage