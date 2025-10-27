import React, { useEffect } from "react";
// import images from "../data/data.js";
const GallerySection = () => {

    useEffect(() => {
        // Đảm bảo đã tải jQuery và Fancybox từ CDN
        const scriptJquery = document.createElement("script");
        scriptJquery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        scriptJquery.onload = () => {
            const scriptFancybox = document.createElement("script");
            scriptFancybox.src =
                "https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js";
            document.body.appendChild(scriptFancybox);
        };
        document.body.appendChild(scriptJquery);
    }, []);


    return (
        <section
            id="memory"
            data-uuid="65ac636d57a76"
            className="gallery-section-three"
        >
            <div
                className="bg bg-pattern-5 bounce-y"
                data-uuid="65ac636d57a7f"
                id="igmnou"
            ></div>
            <div
                className="auto-container"
                data-uuid="65ac636d57a88"
                id="ikab45"
            >
                <div className="row" data-uuid="65ac636d57a91" id="iv32nz">
                    <div
                        className="left-column col-lg-6 wow fadeInLeft animated"
                        id="ix7w6t"
                        data-uuid="65ac636d57a9a"
                    >
                        <div
                            className="sec-title style-two"
                            data-uuid="65ac636d57aa3"
                            id="i6q9po"
                        >
                            <span
                                className="sub-title"
                                data-uuid="65ac636d57aac"
                                id="i4xhii"
                            >
                                Kỉ niệm cưới
                            </span>
                            <h2
                                className="title"
                                data-uuid="65ac636d57ab5"
                                id="i5le4k"
                            >
                                Những khoảnh khắc đáng nhớ
                            </h2>
                        </div>
                        <div
                            className="row"
                            data-uuid="65ac636d57abe"
                            id="inopmj"
                        >
                            <div
                                className="gallery-block-three col-sm-6"
                                data-uuid="65ac636d57ac7"
                                id="i1nsng"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57ad1"
                                    id="i5mh2o"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57ada"
                                        id="i35yqg"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./images/img_1.jpg"
                                            data-uuid="65ac636d57ae3"
                                            id="ig9l6g"
                                        >
                                            <img
                                                src="./images/img_1.jpg"
                                                alt="Image"
                                                id="id637p"
                                                data-uuid="65ac636d57aec"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "290/391",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-sm-6"
                                data-uuid="65ac636d57af5"
                                id="ipdamx"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57aff"
                                    id="i9qwtp"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57b08"
                                        id="ihi7dw"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./images/img_2.jpg"
                                            data-uuid="65ac636d57b11"
                                            id="iz3tvc"
                                        >
                                            <img
                                                src="./images/img_2.jpg"
                                                alt="Image"
                                                id="ih7ldg"
                                                data-uuid="65ac636d57b1a"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "290/391",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-lg-12"
                                data-uuid="65ac636d57b24"
                                id="ivjoao"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57b2d"
                                    id="i2u534"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57b37"
                                        id="i2droh"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./images/img_3.jpg"
                                            data-uuid="65ac636d57b40"
                                            id="il6mon"
                                        >
                                            <img
                                                src="./images/img_3.jpg"
                                                alt="Image"
                                                id="it6w9r"
                                                data-uuid="65ac636d57b49"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "620/389",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                       
                            
                        </div>
                    </div>
                    <div
                        className="right-column col-lg-6 wow fadeInRight animated"
                        id="i6ix55"
                        data-uuid="65ac636d57b53"
                    >
                        <div
                            className="row"
                            data-uuid="65ac636d57b5d"
                            id="i0tk4y"
                        >
                            <div
                                className="gallery-block-three col-lg-12"
                                data-uuid="65ac636d57b66"
                                id="ij8bv4"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57b70"
                                    id="ipc1ox"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57b79"
                                        id="i9cd1g"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./images/img_1.jpg"
                                            data-uuid="65ac636d57b83"
                                            id="ibvwpk"
                                        >
                                            <img
                                                src="./images/img_1.jpg"
                                                alt="Image"
                                                id="ifzqlj"
                                                data-uuid="65ac636d57b8d"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "620/389",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-sm-6"
                                data-uuid="65ac636d57b97"
                                id="i7451j"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57ba0"
                                    id="imry1m"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57baa"
                                        id="ie45eh"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./images/img_4.jpg"
                                            data-uuid="65ac636d57bb4"
                                            id="igtrzc"
                                        >
                                            <img
                                                src="./images/img_4.jpg"
                                                alt="Image"
                                                id="i2kh2f"
                                                data-uuid="65ac636d57bbd"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "290/391",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="gallery-block-three col-sm-6"
                                data-uuid="65ac636d57b97"
                                id="i7451j"
                            >
                                <div
                                    className="inner-box"
                                    data-uuid="65ac636d57ba0"
                                    id="imry1m"
                                >
                                    <figure
                                        className="image overlay-anim"
                                        data-uuid="65ac636d57baa"
                                        id="ie45eh"
                                    >
                                        <a
                                            className="lightbox-image"
                                            data-fancybox="gallery"
                                            href="./images/img_5.jpg"
                                            data-uuid="65ac636d57bb4"
                                            id="igtrzc"
                                        >
                                            <img
                                                src="./images/img_5.jpg"
                                                alt="Image"
                                                id="i2kh2f"
                                                data-uuid="65ac636d57bbd"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    aspectRatio: "290/391",
                                                }}
                                            />
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div
                                className="text-block col-lg-12"
                                data-uuid="65ac636d57bf9"
                                id="ioj63s"
                            >
                                <div
                                    className="text"
                                    data-uuid="65ac636d57c03"
                                    id="i0kzpg"
                                >
                                    <span
                                        className="quote-text"
                                        data-uuid="65ac636d57c14"
                                        id="ikmqso"
                                    >
                                        “ Hãy để tình yêu diễn biến thật tự
                                        nhiên, đã là duyên thì cũng chẳng sợ lạc
                                        đường. ”
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
