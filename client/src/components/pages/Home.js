import React from 'react';

function Home() {
    
    return (
        <>
            <main className="mainContent-theme  mainContent-index">
                {/* 1. Slide */}
                <section className="section-slider">
                    <div className="sliderBanner" id="home-slider">
                        <div className="slider-owl owl-carousel owl-theme">
                            {/* Banener 1 */}
                            <div className="slider-item">
                                <div className="slide--image">
                                    <a style={{cursor: "pointer"}} title="">
                                        <picture>
                                            <source media="(max-width: 600px)" srcSet="" />
                                            <source
                                                media="(min-width: 601px)"
                                                srcSet="assets/images/banner/image1.webp"
                                            />
                                            <img
                                                src="assets/images/banner/image1.webp"
                                                alt=""
                                            />
                                        </picture>
                                    </a>
                                </div>
                                <div className="slide--content">
                                    <div className="group-button"></div>
                                </div>
                            </div>
                            <div className="slider-item fade-box">
                                <div className="slide--image">
                                    <a style={{cursor: "pointer"}} title="">
                                        <picture>
                                            <source media="(max-width: 600px)" data-srcset="" />
                                            <source
                                                media="(min-width: 601px)"
                                                data-srcset="assets/images/banner/image2.jpg"
                                            />
                                            <img
                                                data-src="assets/images/banner/image2.jpg"
                                                className="lazyload"
                                                alt=""
                                            />
                                        </picture>
                                    </a>
                                </div>
                                <div className="slide--content">
                                    <div className="group-button"></div>
                                </div>
                            </div>
                            <div className="slider-item fade-box">
                                <div className="slide--image">
                                    <a style={{cursor: "pointer"}} title="">
                                        <picture>
                                            <source media="(max-width: 600px)" data-srcset="" />
                                            <source
                                                media="(min-width: 601px)"
                                                data-srcset="assets/images/banner/image3.webp"
                                            />
                                            <img
                                                data-src="assets/images/banner/image3.webp"
                                                className="lazyload"
                                                alt=""
                                            />
                                        </picture>
                                    </a>
                                </div>
                                <div className="slide--content">
                                    <div className="group-button"></div>
                                </div>
                            </div>
                            <div className="slider-item fade-box">
                                <div className="slide--image">
                                    <a style={{cursor: "pointer"}} title="">
                                        <picture>
                                            <source media="(max-width: 600px)" data-srcset="" />
                                            <source
                                                media="(min-width: 601px)"
                                                data-srcset="assets/images/banner/image4.webp"
                                            />
                                            <img
                                                data-src="assets/images/banner/image4.webp"
                                                className="lazyload"
                                                alt=""
                                            />
                                        </picture>
                                    </a>
                                </div>
                                <div className="slide--content">
                                    <div className="group-button"></div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-circle-scroll">
                            <a className="scroll-downs" href="">
                                <svg role="presentation" viewBox="0 0 21 11">
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="0.5 0.5 10.5 10.5 20.5 0.5"
                                        strokeWidth="1.25"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
                <div className="hrv-pmo-coupon" data-hrvpmo-layout="grids" />
                <div className="hrv-pmo-discount" data-hrvpmo-layout="grids" />
                {/* 2. Nhom tabs collection */}
                <section className="section wrapper-hometabs-collection">
                    <div className="container">
                        <div className="wrapper-heading-home">
                            <h1>SẢN PHẨM MỚI</h1>
                        </div>
                        <div className="tab-content tabs-products">
                            <div className="tab-item active" id="tab1" data-get="true">
                                <div className="listProduct-carousel--overflow">
                                    <div className="product-carousel carousel-index-owlnav carousel-tabs product-lists noCarousel-overflow">
                                        <div className="pro-loop animated fadeIn">
                                            <div className="product-block" data-anmation={1}>
                                                <div className="product-img fade-box">
                                                    <a
                                                        href="/products/ao-thun-unisex-kenta-studio-den-atn0146"
                                                        title="Áo Thun Unisex Kenta Studio ATN0146"
                                                        className="image-resize"
                                                    >
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/6_e778851a63dd4563a25b1c33c4154387_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/6_e778851a63dd4563a25b1c33c4154387_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/6_e778851a63dd4563a25b1c33c4154387_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/6_e778851a63dd4563a25b1c33c4154387_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            />
                                                        </picture>
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/7_811ac2239ec8469ca130465cb047ba63_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/7_811ac2239ec8469ca130465cb047ba63_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/7_811ac2239ec8469ca130465cb047ba63_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/7_811ac2239ec8469ca130465cb047ba63_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            />
                                                        </picture>
                                                    </a>
                                                    <div className="button-add">
                                                        <button
                                                            type="submit"
                                                            title="Mua ngay"
                                                            className="action"
                                                        >
                                                            Mua ngay
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            title="Thêm vào giỏ"
                                                            className="action add-to-cart"
                                                            data-variantid={1097461981}
                                                        >
                                                            Thêm vào giỏ
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product-detail clearfix">
                                                    <div className="box-pro-detail">
                                                        <h3 className="pro-name">
                                                            <a
                                                                href="/products/ao-thun-unisex-kenta-studio-den-atn0146"
                                                                title="Áo Thun Unisex Kenta Studio ATN0146"
                                                            >
                                                                Áo Thun Unisex Kenta Studio ATN0146
                                                            </a>
                                                        </h3>
                                                        <div className="box-pro-prices">
                                                            <p className="pro-price ">295,000₫</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pro-loop animated fadeIn">
                                            <div className="product-block" data-anmation={2}>
                                                <div className="product-img fade-box">
                                                    <a
                                                        href="/products/ao-thun-unisex-kenta-studio-trang-atn0146"
                                                        title="Áo Thun Unisex Kenta Studio ATN0146"
                                                        className="image-resize"
                                                    >
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/8_7c88b69f767c4c8bb5e14f0d25cfa12c_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/8_7c88b69f767c4c8bb5e14f0d25cfa12c_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/8_7c88b69f767c4c8bb5e14f0d25cfa12c_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/8_7c88b69f767c4c8bb5e14f0d25cfa12c_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            />
                                                        </picture>
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/9_f555028583024f068804dad8c085cdb2_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/9_f555028583024f068804dad8c085cdb2_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/9_f555028583024f068804dad8c085cdb2_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/9_f555028583024f068804dad8c085cdb2_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            />
                                                        </picture>
                                                    </a>
                                                    <div className="button-add">
                                                        <button
                                                            type="submit"
                                                            title="Mua ngay"
                                                            className="action"
                                                        >
                                                            Mua ngay
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            title="Thêm vào giỏ"
                                                            className="action add-to-cart"
                                                            data-variantid={1097462008}
                                                        >
                                                            Thêm vào giỏ
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product-detail clearfix">
                                                    <div className="box-pro-detail">
                                                        <h3 className="pro-name">
                                                            <a
                                                                href="/products/ao-thun-unisex-kenta-studio-trang-atn0146"
                                                                title="Áo Thun Unisex Kenta Studio ATN0146"
                                                            >
                                                                Áo Thun Unisex Kenta Studio ATN0146
                                                            </a>
                                                        </h3>
                                                        <div className="box-pro-prices">
                                                            <p className="pro-price ">295,000₫</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pro-loop animated fadeIn">
                                            <div className="product-block" data-anmation={3}>
                                                <div className="product-img fade-box">
                                                    <a
                                                        href="/products/ao-thun-unisex-kenta-studio-xanh-atn0146"
                                                        title="Áo Thun Unisex Kenta Studio ATN0146"
                                                        className="image-resize"
                                                    >
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/12_0ae5562fa62d47cc82a0750e259d3bcf_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/12_0ae5562fa62d47cc82a0750e259d3bcf_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/12_0ae5562fa62d47cc82a0750e259d3bcf_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/12_0ae5562fa62d47cc82a0750e259d3bcf_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            />
                                                        </picture>
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/13_b9239bb22bb64612946aa9f34c6d03cb_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/13_b9239bb22bb64612946aa9f34c6d03cb_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/13_b9239bb22bb64612946aa9f34c6d03cb_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/13_b9239bb22bb64612946aa9f34c6d03cb_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            />
                                                        </picture>
                                                    </a>
                                                    <div className="button-add">
                                                        <button
                                                            type="submit"
                                                            title="Mua ngay"
                                                            className="action"
                                                        >
                                                            Mua ngay
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            title="Thêm vào giỏ"
                                                            className="action add-to-cart"
                                                            data-variantid={1097462063}
                                                        >
                                                            Thêm vào giỏ
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product-detail clearfix">
                                                    <div className="box-pro-detail">
                                                        <h3 className="pro-name">
                                                            <a
                                                                href="/products/ao-thun-unisex-kenta-studio-xanh-atn0146"
                                                                title="Áo Thun Unisex Kenta Studio ATN0146"
                                                            >
                                                                Áo Thun Unisex Kenta Studio ATN0146
                                                            </a>
                                                        </h3>
                                                        <div className="box-pro-prices">
                                                            <p className="pro-price ">295,000₫</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pro-loop animated fadeIn">
                                            <div className="product-block" data-anmation={4}>
                                                <div className="product-img fade-box">
                                                    <a
                                                        href="/products/ao-thun-unisex-kenta-studio-nau-atn0146"
                                                        title="Áo Thun Unisex Kenta Studio ATN0146"
                                                        className="image-resize"
                                                    >
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/10_b66222e5f4c844cb92d9f06ab4a0e68e_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/10_b66222e5f4c844cb92d9f06ab4a0e68e_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/10_b66222e5f4c844cb92d9f06ab4a0e68e_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/10_b66222e5f4c844cb92d9f06ab4a0e68e_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            />
                                                        </picture>
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/11_18d4037319b441e2b50c1d60cfff5e09_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/11_18d4037319b441e2b50c1d60cfff5e09_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/11_18d4037319b441e2b50c1d60cfff5e09_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/11_18d4037319b441e2b50c1d60cfff5e09_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            />
                                                        </picture>
                                                    </a>
                                                    <div className="button-add">
                                                        <button
                                                            type="submit"
                                                            title="Mua ngay"
                                                            className="action"
                                                        >
                                                            Mua ngay
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            title="Thêm vào giỏ"
                                                            className="action add-to-cart"
                                                            data-variantid={1097462028}
                                                        >
                                                            Thêm vào giỏ
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product-detail clearfix">
                                                    <div className="box-pro-detail">
                                                        <h3 className="pro-name">
                                                            <a
                                                                href="/products/ao-thun-unisex-kenta-studio-nau-atn0146"
                                                                title="Áo Thun Unisex Kenta Studio ATN0146"
                                                            >
                                                                Áo Thun Unisex Kenta Studio ATN0146
                                                            </a>
                                                        </h3>
                                                        <div className="box-pro-prices">
                                                            <p className="pro-price ">295,000₫</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pro-loop animated fadeIn">
                                            <div className="product-block" data-anmation={5}>
                                                <div className="product-img fade-box">
                                                    <a
                                                        href="/products/ao-thun-unisex-saigonnese-den-atn0147"
                                                        title="Áo Thun Unisex Saigonnese ATN0147"
                                                        className="image-resize"
                                                    >
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/1_57509edb0f514024804aa8b52b039e8c_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/1_57509edb0f514024804aa8b52b039e8c_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/1_57509edb0f514024804aa8b52b039e8c_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/1_57509edb0f514024804aa8b52b039e8c_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Saigonnese ATN0147 "
                                                            />
                                                        </picture>
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/2_4286770510824e12b976605e9f1d110a_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/2_4286770510824e12b976605e9f1d110a_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/2_4286770510824e12b976605e9f1d110a_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/2_4286770510824e12b976605e9f1d110a_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Saigonnese ATN0147 "
                                                            />
                                                        </picture>
                                                    </a>
                                                    <div className="button-add">
                                                        <button
                                                            type="submit"
                                                            title="Mua ngay"
                                                            className="action"
                                                        >
                                                            Mua ngay
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            title="Thêm vào giỏ"
                                                            className="action add-to-cart"
                                                            data-variantid={1100474009}
                                                        >
                                                            Thêm vào giỏ
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product-detail clearfix">
                                                    <div className="box-pro-detail">
                                                        <h3 className="pro-name">
                                                            <a
                                                                href="/products/ao-thun-unisex-saigonnese-den-atn0147"
                                                                title="Áo Thun Unisex Saigonnese ATN0147"
                                                            >
                                                                Áo Thun Unisex Saigonnese ATN0147
                                                            </a>
                                                        </h3>
                                                        <div className="box-pro-prices">
                                                            <p className="pro-price ">295,000₫</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pro-loop animated fadeIn">
                                            <div className="product-block" data-anmation={6}>
                                                <div className="product-img fade-box">
                                                    <a
                                                        href="/products/ao-thun-unisex-saigonnese-trang-atn0147"
                                                        title="Áo Thun Unisex Saigonnese ATN0147"
                                                        className="image-resize"
                                                    >
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/36_1b06318998bb483d8e79514cfc39c93b_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/36_1b06318998bb483d8e79514cfc39c93b_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/36_1b06318998bb483d8e79514cfc39c93b_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/36_1b06318998bb483d8e79514cfc39c93b_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Saigonnese ATN0147 "
                                                            />
                                                        </picture>
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/2_b76c6d5ec6474e7f812d0d1b10ac7440_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/2_b76c6d5ec6474e7f812d0d1b10ac7440_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/2_b76c6d5ec6474e7f812d0d1b10ac7440_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/2_b76c6d5ec6474e7f812d0d1b10ac7440_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Saigonnese ATN0147 "
                                                            />
                                                        </picture>
                                                    </a>
                                                    <div className="button-add">
                                                        <button
                                                            type="submit"
                                                            title="Mua ngay"
                                                            className="action"
                                                        >
                                                            Mua ngay
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            title="Thêm vào giỏ"
                                                            className="action add-to-cart"
                                                            data-variantid={1100474032}
                                                        >
                                                            Thêm vào giỏ
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product-detail clearfix">
                                                    <div className="box-pro-detail">
                                                        <h3 className="pro-name">
                                                            <a
                                                                href="/products/ao-thun-unisex-saigonnese-trang-atn0147"
                                                                title="Áo Thun Unisex Saigonnese ATN0147"
                                                            >
                                                                Áo Thun Unisex Saigonnese ATN0147
                                                            </a>
                                                        </h3>
                                                        <div className="box-pro-prices">
                                                            <p className="pro-price ">295,000₫</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pro-loop animated fadeIn">
                                            <div className="product-block" data-anmation={7}>
                                                <div className="product-img fade-box">
                                                    <a
                                                        href="/products/ao-thun-unisex-saigonnese-xanh-la-atn0147"
                                                        title="Áo Thun Unisex Saigonnese ATN0147"
                                                        className="image-resize"
                                                    >
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/1_f55d4444482c42eeab034728c3b1e0e9_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/1_f55d4444482c42eeab034728c3b1e0e9_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/1_f55d4444482c42eeab034728c3b1e0e9_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/1_f55d4444482c42eeab034728c3b1e0e9_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Saigonnese ATN0147 "
                                                            />
                                                        </picture>
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/2_a5600c62bf01442eb6bca175f7599226_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/2_a5600c62bf01442eb6bca175f7599226_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/2_a5600c62bf01442eb6bca175f7599226_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/2_a5600c62bf01442eb6bca175f7599226_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Saigonnese ATN0147 "
                                                            />
                                                        </picture>
                                                    </a>
                                                    <div className="button-add">
                                                        <button
                                                            type="submit"
                                                            title="Mua ngay"
                                                            className="action"
                                                        >
                                                            Mua ngay
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            title="Thêm vào giỏ"
                                                            className="action add-to-cart"
                                                            data-variantid={1100474036}
                                                        >
                                                            Thêm vào giỏ
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product-detail clearfix">
                                                    <div className="box-pro-detail">
                                                        <h3 className="pro-name">
                                                            <a
                                                                href="/products/ao-thun-unisex-saigonnese-xanh-la-atn0147"
                                                                title="Áo Thun Unisex Saigonnese ATN0147"
                                                            >
                                                                Áo Thun Unisex Saigonnese ATN0147
                                                            </a>
                                                        </h3>
                                                        <div className="box-pro-prices">
                                                            <p className="pro-price ">295,000₫</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pro-loop animated fadeIn">
                                            <div className="product-block" data-anmation={8}>
                                                <div className="product-img fade-box">
                                                    <a
                                                        href="/products/ao-thun-unisex-saigonnese-nau-atn0147"
                                                        title="Áo Thun Unisex Saigonnese ATN0147"
                                                        className="image-resize"
                                                    >
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/1_e2a930ec2b9b491da6e37d6e041c2d2e_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/1_e2a930ec2b9b491da6e37d6e041c2d2e_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/1_e2a930ec2b9b491da6e37d6e041c2d2e_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/1_e2a930ec2b9b491da6e37d6e041c2d2e_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Saigonnese ATN0147 "
                                                            />
                                                        </picture>
                                                        <picture>
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/2_21a60dfef343419e87d2bb4803bf7d52_medium.jpg"
                                                                media="(max-width: 500px)"
                                                            />
                                                            <source
                                                                data-srcset="//product.hstatic.net/1000096703/product/2_21a60dfef343419e87d2bb4803bf7d52_large.jpg"
                                                                media="(max-width: 1024px)"
                                                            />
                                                            <source data-srcset="//product.hstatic.net/1000096703/product/2_21a60dfef343419e87d2bb4803bf7d52_grande.jpg" />
                                                            <img
                                                                data-src="//product.hstatic.net/1000096703/product/2_21a60dfef343419e87d2bb4803bf7d52_grande.jpg"
                                                                className="lazyload"
                                                                alt=" Áo Thun Unisex Saigonnese ATN0147 "
                                                            />
                                                        </picture>
                                                    </a>
                                                    <div className="button-add">
                                                        <button
                                                            type="submit"
                                                            title="Mua ngay"
                                                            className="action"
                                                        >
                                                            Mua ngay
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            title="Thêm vào giỏ"
                                                            className="action add-to-cart"
                                                            data-variantid={1100474013}
                                                        >
                                                            Thêm vào giỏ
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product-detail clearfix">
                                                    <div className="box-pro-detail">
                                                        <h3 className="pro-name">
                                                            <a
                                                                href="/products/ao-thun-unisex-saigonnese-nau-atn0147"
                                                                title="Áo Thun Unisex Saigonnese ATN0147"
                                                            >
                                                                Áo Thun Unisex Saigonnese ATN0147
                                                            </a>
                                                        </h3>
                                                        <div className="box-pro-prices">
                                                            <p className="pro-price ">295,000₫</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="collection-viewall text-center">
                                    <a className="button link-collection" href="/collections/ao-thun">
                                        XEM THÊM
                                    </a>
                                </div>
                            </div>
                            {/* tabs ajax */}
                            <div className="tab-item" id="tab2" data-get="false">
                                <div className="listProduct-carousel--overflow">
                                    <div className="product-carousel carousel-index-owlnav carousel-tabs noCarousel-overflow product-lists" />
                                </div>
                                <div className="collection-viewall text-center">
                                    <a
                                        className="button link-collection"
                                        title="Sơ Mi"
                                        href="/collections/so-mi"
                                    >
                                        XEM THÊM
                                    </a>
                                </div>
                            </div>
                            <div className="tab-item" id="tab3" data-get="false">
                                <div className="listProduct-carousel--overflow">
                                    <div className="product-carousel carousel-index-owlnav carousel-tabs noCarousel-overflow product-lists" />
                                </div>
                                <div className="collection-viewall text-center">
                                    <a
                                        className="button link-collection"
                                        title="Quần Tây Nam"
                                        href="/collections/quan-tay-nam"
                                    >
                                        XEM THÊM
                                    </a>
                                </div>
                            </div>
                            <div className="tab-item" id="tab4" data-get="false">
                                <div className="listProduct-carousel--overflow">
                                    <div className="product-carousel carousel-index-owlnav carousel-tabs noCarousel-overflow product-lists" />
                                </div>
                                <div className="collection-viewall text-center">
                                    <a
                                        className="button link-collection"
                                        title="Quần Short Kaki"
                                        href="/collections/quan-short-kaki"
                                    >
                                        XEM THÊM
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 3. Nhóm san phẩm 1 */}
                {/* 4. Nhóm banner */}
                <section className="section no-border wrapper-home-banner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 home-banner-pd">
                                <figure className="block-banner-category">
                                    <a
                                        className="link-banner"
                                        href="https://kenta.vn/collections/ao-khoac"
                                    >
                                        <div className="fg-image fade-box">
                                            <picture>
                                                <source
                                                    data-srcset="https://file.hstatic.net/1000096703/file/13_f161048fd69e41c096161641f468d663.jpg"
                                                    media="(max-width: 500px)"
                                                />
                                                <source data-srcset="https://file.hstatic.net/1000096703/file/13_f161048fd69e41c096161641f468d663.jpg" />
                                                <img
                                                    data-src="https://file.hstatic.net/1000096703/file/13_f161048fd69e41c096161641f468d663.jpg"
                                                    className="lazyload"
                                                    alt=""
                                                />
                                            </picture>
                                        </div>
                                        <figcaption className="caption_banner site-animation">
                                            <p />
                                            <h2 />
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                            <div className="col-xs-12 col-sm-4 home-banner-pd">
                                <figure className="block-banner-category">
                                    <a
                                        className="link-banner "
                                        href="https://kenta.vn/collections/so-mi"
                                    >
                                        <div className="fg-image fade-box">
                                            <picture>
                                                <source
                                                    data-srcset="https://file.hstatic.net/1000096703/file/9_c25efb770ca748868ff408bea4c4c4c5.jpg"
                                                    media="(max-width: 500px)"
                                                />
                                                <source data-srcset="https://file.hstatic.net/1000096703/file/9_c25efb770ca748868ff408bea4c4c4c5.jpg" />
                                                <img
                                                    data-src="https://file.hstatic.net/1000096703/file/9_c25efb770ca748868ff408bea4c4c4c5.jpg"
                                                    className="lazyload"
                                                    alt=""
                                                />
                                            </picture>
                                        </div>
                                        <figcaption className="caption_banner site-animation">
                                            <p />
                                            <h2 />
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                            <div className="col-xs-12 col-sm-4 home-banner-pd">
                                <figure className="block-banner-category">
                                    <a
                                        className="link-banner "
                                        href="https://kenta.vn/collections/quan-tay-nam"
                                    >
                                        <div className="fg-image fade-box">
                                            <picture>
                                                <source
                                                    data-srcset="https://file.hstatic.net/1000096703/file/11_7441d71a347d4bf29645e98a4d1826c8.jpg"
                                                    media="(max-width: 500px)"
                                                />
                                                <source data-srcset="https://file.hstatic.net/1000096703/file/11_7441d71a347d4bf29645e98a4d1826c8.jpg" />
                                                <img
                                                    data-src="https://file.hstatic.net/1000096703/file/11_7441d71a347d4bf29645e98a4d1826c8.jpg"
                                                    className="lazyload"
                                                    alt=""
                                                />
                                            </picture>
                                        </div>
                                        <figcaption className="caption_banner site-animation">
                                            <p />
                                            <h2 />
                                        </figcaption>
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 5. Nhóm san phẩm 1 */}
                {/* 6. Nhóm san phẩm 3 */}
                {/* Blog */}
            </main>
        </>
    );
}

export default Home;