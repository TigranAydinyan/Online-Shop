import React from "react";
import Footer from "../Footer/Footer";
import Styles from "./SingleBlog.module.css";
import rp1 from "./images/rp1.jpg";
import rp2 from "./images/rp2.jpg";
import rp3 from "./images/rp3.jpg";
import rp4 from "./images/rp4.jpg";
import ProductComponent from "./ProductComponent";

function SingleBlog(){
    return(
        <div className={Styles.container}>
            <div className={Styles.bgImg}></div>
            <div className={Styles.content}>
                <div className={Styles.item1}>
                    <h2 className={Styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis perferendis rem accusantium ducimus animi nesciunt expedita omnis aut quas molestias!</h2>
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
                <div className={Styles.item2}>
                    <ProductComponent img={`${rp1}`} text="Cras lobortis nisl nec libero pulvinar lacinia. Nunc sed ullamcorper massa" />
                    <ProductComponent img={`${rp2}`} text="Fusce tincidunt nulla magna, ac euismod quam viverra id. Fusce eget metus feugiat" />
                    <ProductComponent img={`${rp3}`} text="Etiam leo nibh, consectetur nec orci et, tempus tempus ex" />
                    <ProductComponent img={`${rp4}`} text="Sed viverra pellentesque dictum. Aenean ligula justo, viverra in lacus porttitor" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SingleBlog;