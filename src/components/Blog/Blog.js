import React from "react";
import Footer from "../Footer/Footer";
import Styles from "./Blog.module.css";
import blog1 from "./image/blog1.jpg";
import blog2 from "./image/blog2.jpg";
import blog3 from "./image/blog3.jpg";
import blog4 from "./image/blog4.jpg";
import blog5 from "./image/blog5.jpg";
import blog6 from "./image/blog6.jpg";

function Blog(){
    return(
        <div className={Styles.container}>
            <div className={Styles.bgImg}>
                <div className={Styles.transparentdiv}></div>
                <h1 className={Styles.title}>FASHION BLOG</h1>
            </div>
            <div className={Styles.content}>
                <div className={Styles.item}>
                    <div className={Styles.imgDiv}>
                        <img src={blog1} alt="" className={Styles.img}/>
                        <div className={Styles.textDiv}>
                            <p className={Styles.text}>Vivamus sednunc in arcu cursus mollis quis et orci. Interdum et malesuada</p>
                        </div>
                        <div className={Styles.show}>
                            <h5 className={Styles.showTitle}>Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada</h5>
                            <p className={Styles.showText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
                        </div>
                    </div>
                    <div className={Styles.imgDiv}>
                        <img src={blog2} alt="" className={Styles.img}/>
                        <div className={Styles.textDiv}>
                            <p className={Styles.text}>Vivamus sednunc in arcu cursus mollis quis et orci. Interdum et malesuada</p>
                        </div>
                        <div className={Styles.show}>
                            <h5 className={Styles.showTitle}>Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada</h5>
                            <p className={Styles.showText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
                        </div>
                    </div>
                </div>
                <div className={`${Styles.item} mt-5`}>
                    <div className={Styles.imgDiv}>
                        <img src={blog3} alt="" className={Styles.img}/>
                        <div className={Styles.textDiv}>
                            <p className={Styles.text}>Vivamus sednunc in arcu cursus mollis quis et orci. Interdum et malesuada</p>
                        </div>
                        <div className={Styles.show}>
                            <h5 className={Styles.showTitle}>Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada</h5>
                            <p className={Styles.showText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
                        </div>
                    </div>
                    <div className={Styles.imgDiv}>
                        <img src={blog4} alt="" className={Styles.img}/>
                        <div className={Styles.textDiv}>
                            <p className={Styles.text}>Vivamus sednunc in arcu cursus mollis quis et orci. Interdum et malesuada</p>
                        </div>
                        <div className={Styles.show}>
                            <h5 className={Styles.showTitle}>Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada</h5>
                            <p className={Styles.showText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
                        </div>
                    </div>
                </div>
                <div className={`${Styles.item} mt-5`}>
                    <div className={Styles.imgDiv}>
                        <img src={blog5} alt="" className={Styles.img}/>
                        <div className={Styles.textDiv}>
                            <p className={Styles.text}>Vivamus sednunc in arcu cursus mollis quis et orci. Interdum et malesuada</p>
                        </div>
                        <div className={Styles.show}>
                            <h5 className={Styles.showTitle}>Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada</h5>
                            <p className={Styles.showText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
                        </div>
                    </div>
                    <div className={Styles.imgDiv}>
                        <img src={blog6} alt="" className={Styles.img}/>
                        <div className={Styles.textDiv}>
                            <p className={Styles.text}>Vivamus sednunc in arcu cursus mollis quis et orci. Interdum et malesuada</p>
                        </div>
                        <div className={Styles.show}>
                            <h5 className={Styles.showTitle}>Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada</h5>
                            <p className={Styles.showText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog;