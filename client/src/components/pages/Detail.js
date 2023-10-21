import React from 'react';

function Detail() {

    return (
        <main className="mainContent-theme ">
            <div id="product" className="productDetail-page">
                <div className="breadcrumb-shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                                <ol
                                    className="breadcrumb breadcrumb-arrows"
                                    itemScope=""
                                    itemType="http://schema.org/BreadcrumbList"
                                >
                                    <li
                                        itemProp="itemListElement"
                                        itemScope=""
                                        itemType="http://schema.org/ListItem"
                                    >
                                        <a href="/" target="_self" itemProp="item">
                                            <span itemProp="name">Trang chủ</span>
                                        </a>
                                        <meta itemProp="position" content={1} />
                                    </li>
                                    <li
                                        itemProp="itemListElement"
                                        itemScope=""
                                        itemType="http://schema.org/ListItem"
                                    >
                                        <a
                                            href="https://kenta.vn/collections/ao-thun"
                                            target="_self"
                                            itemProp="item"
                                        >
                                            <span itemProp="name">Áo Thun</span>
                                        </a>
                                        <meta itemProp="position" content={2} />
                                    </li>
                                    <li
                                        className="active"
                                        itemProp="itemListElement"
                                        itemScope=""
                                        itemType="http://schema.org/ListItem"
                                    >
                                        <span
                                            itemProp="item"
                                            content="https://kenta.vn/products/ao-thun-unisex-kenta-studio-den-atn0146"
                                        >
                                            <span itemProp="name">
                                                Áo Thun Unisex Kenta Studio ATN0146
                                            </span>
                                        </span>
                                        <meta itemProp="position" content={3} />
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row product-detail-wrapper">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="row product-detail-main pr_style_01">
                                <div className="col-md-7 col-sm-12 col-xs-12">
                                    <div className="product-gallery">
                                        <div className="product-gallery__thumbs-container hidden-sm hidden-xs">
                                            <div className="product-gallery__thumbs thumb-fix">
                                                <div className="product-gallery__thumb active">
                                                    <a
                                                        className="product-gallery__thumb-placeholder"
                                                        href="javascript:void(0);"
                                                        data-image="//product.hstatic.net/1000096703/product/6_e778851a63dd4563a25b1c33c4154387_master.jpg"
                                                        data-zoom-image="//product.hstatic.net/1000096703/product/6_e778851a63dd4563a25b1c33c4154387_master.jpg"
                                                    >
                                                        <img
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/6_e778851a63dd4563a25b1c33c4154387_compact.jpg"
                                                            data-image="//product.hstatic.net/1000096703/product/6_e778851a63dd4563a25b1c33c4154387_master.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="product-gallery__thumb ">
                                                    <a
                                                        className="product-gallery__thumb-placeholder"
                                                        href="javascript:void(0);"
                                                        data-image="//product.hstatic.net/1000096703/product/7_811ac2239ec8469ca130465cb047ba63_master.jpg"
                                                        data-zoom-image="//product.hstatic.net/1000096703/product/7_811ac2239ec8469ca130465cb047ba63_master.jpg"
                                                    >
                                                        <img
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/7_811ac2239ec8469ca130465cb047ba63_compact.jpg"
                                                            data-image="//product.hstatic.net/1000096703/product/7_811ac2239ec8469ca130465cb047ba63_master.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="product-gallery__thumb ">
                                                    <a
                                                        className="product-gallery__thumb-placeholder"
                                                        href="javascript:void(0);"
                                                        data-image="//product.hstatic.net/1000096703/product/3_66ced14cb2d042bebaca877feac3a2f8_master.jpg"
                                                        data-zoom-image="//product.hstatic.net/1000096703/product/3_66ced14cb2d042bebaca877feac3a2f8_master.jpg"
                                                    >
                                                        <img
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/3_66ced14cb2d042bebaca877feac3a2f8_compact.jpg"
                                                            data-image="//product.hstatic.net/1000096703/product/3_66ced14cb2d042bebaca877feac3a2f8_master.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="product-gallery__thumb ">
                                                    <a
                                                        className="product-gallery__thumb-placeholder"
                                                        href="javascript:void(0);"
                                                        data-image="//product.hstatic.net/1000096703/product/4_8fd6c356ea954532aebeb3e329e60e30_master.jpg"
                                                        data-zoom-image="//product.hstatic.net/1000096703/product/4_8fd6c356ea954532aebeb3e329e60e30_master.jpg"
                                                    >
                                                        <img
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/4_8fd6c356ea954532aebeb3e329e60e30_compact.jpg"
                                                            data-image="//product.hstatic.net/1000096703/product/4_8fd6c356ea954532aebeb3e329e60e30_master.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="product-gallery__thumb ">
                                                    <a
                                                        className="product-gallery__thumb-placeholder"
                                                        href="javascript:void(0);"
                                                        data-image="//product.hstatic.net/1000096703/product/5_8e76a534281942f89ed8a4350518e1e7_master.jpg"
                                                        data-zoom-image="//product.hstatic.net/1000096703/product/5_8e76a534281942f89ed8a4350518e1e7_master.jpg"
                                                    >
                                                        <img
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/5_8e76a534281942f89ed8a4350518e1e7_compact.jpg"
                                                            data-image="//product.hstatic.net/1000096703/product/5_8e76a534281942f89ed8a4350518e1e7_master.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="product-gallery__thumb ">
                                                    <a
                                                        className="product-gallery__thumb-placeholder"
                                                        href="javascript:void(0);"
                                                        data-image="//product.hstatic.net/1000096703/product/6_94cc712eb82d435091d693cdd0def6fb_master.jpg"
                                                        data-zoom-image="//product.hstatic.net/1000096703/product/6_94cc712eb82d435091d693cdd0def6fb_master.jpg"
                                                    >
                                                        <img
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/6_94cc712eb82d435091d693cdd0def6fb_compact.jpg"
                                                            data-image="//product.hstatic.net/1000096703/product/6_94cc712eb82d435091d693cdd0def6fb_master.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="product-gallery__thumb ">
                                                    <a
                                                        className="product-gallery__thumb-placeholder"
                                                        href="javascript:void(0);"
                                                        data-image="//product.hstatic.net/1000096703/product/7_ebd21e4b268e4675977f167a3d779279_master.jpg"
                                                        data-zoom-image="//product.hstatic.net/1000096703/product/7_ebd21e4b268e4675977f167a3d779279_master.jpg"
                                                    >
                                                        <img
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/7_ebd21e4b268e4675977f167a3d779279_compact.jpg"
                                                            data-image="//product.hstatic.net/1000096703/product/7_ebd21e4b268e4675977f167a3d779279_master.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="product-gallery__thumb ">
                                                    <a
                                                        className="product-gallery__thumb-placeholder"
                                                        href="javascript:void(0);"
                                                        data-image="//product.hstatic.net/1000096703/product/16_8e8d61ff36734ed594eab6607f23535d_master.jpg"
                                                        data-zoom-image="//product.hstatic.net/1000096703/product/16_8e8d61ff36734ed594eab6607f23535d_master.jpg"
                                                    >
                                                        <img
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/16_8e8d61ff36734ed594eab6607f23535d_compact.jpg"
                                                            data-image="//product.hstatic.net/1000096703/product/16_8e8d61ff36734ed594eab6607f23535d_master.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="product-gallery__thumb ">
                                                    <a
                                                        className="product-gallery__thumb-placeholder"
                                                        href="javascript:void(0);"
                                                        data-image="//product.hstatic.net/1000096703/product/12_6f5cf0553bd14e579afe04dea684d99c_master.jpg"
                                                        data-zoom-image="//product.hstatic.net/1000096703/product/12_6f5cf0553bd14e579afe04dea684d99c_master.jpg"
                                                    >
                                                        <img
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/12_6f5cf0553bd14e579afe04dea684d99c_compact.jpg"
                                                            data-image="//product.hstatic.net/1000096703/product/12_6f5cf0553bd14e579afe04dea684d99c_master.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="product-gallery__thumb ">
                                                    <a
                                                        className="product-gallery__thumb-placeholder"
                                                        href="javascript:void(0);"
                                                        data-image="//product.hstatic.net/1000096703/product/13_d8e9ef85b6b94ceebb34528a563c5377_master.jpg"
                                                        data-zoom-image="//product.hstatic.net/1000096703/product/13_d8e9ef85b6b94ceebb34528a563c5377_master.jpg"
                                                    >
                                                        <img
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/13_d8e9ef85b6b94ceebb34528a563c5377_compact.jpg"
                                                            data-image="//product.hstatic.net/1000096703/product/13_d8e9ef85b6b94ceebb34528a563c5377_master.jpg"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="product-gallery__thumb ">
                                                    <a
                                                        className="product-gallery__thumb-placeholder"
                                                        href="javascript:void(0);"
                                                        data-image="//product.hstatic.net/1000096703/product/atn_moi_dd01e45d11af4c4e98193f59173a4a14_master.jpg"
                                                        data-zoom-image="//product.hstatic.net/1000096703/product/atn_moi_dd01e45d11af4c4e98193f59173a4a14_master.jpg"
                                                    >
                                                        <img
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/atn_moi_dd01e45d11af4c4e98193f59173a4a14_compact.jpg"
                                                            data-image="//product.hstatic.net/1000096703/product/atn_moi_dd01e45d11af4c4e98193f59173a4a14_master.jpg"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-image-detail box__product-gallery scroll">
                                            <ul
                                                id="sliderproduct"
                                                className="site-box-content 2 slide_product hidden-xs"
                                            >
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/6_e778851a63dd4563a25b1c33c4154387_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/7_811ac2239ec8469ca130465cb047ba63_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/3_66ced14cb2d042bebaca877feac3a2f8_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/4_8fd6c356ea954532aebeb3e329e60e30_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/5_8e76a534281942f89ed8a4350518e1e7_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/6_94cc712eb82d435091d693cdd0def6fb_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/7_ebd21e4b268e4675977f167a3d779279_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/16_8e8d61ff36734ed594eab6607f23535d_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/12_6f5cf0553bd14e579afe04dea684d99c_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/13_d8e9ef85b6b94ceebb34528a563c5377_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/atn_moi_dd01e45d11af4c4e98193f59173a4a14_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                            </ul>
                                            <ul
                                                id="sliderproduct"
                                                className="site-box-contentt 2 slide_productt visible-xs"
                                            >
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/6_e778851a63dd4563a25b1c33c4154387_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/7_811ac2239ec8469ca130465cb047ba63_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/3_66ced14cb2d042bebaca877feac3a2f8_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/4_8fd6c356ea954532aebeb3e329e60e30_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/5_8e76a534281942f89ed8a4350518e1e7_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/6_94cc712eb82d435091d693cdd0def6fb_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/7_ebd21e4b268e4675977f167a3d779279_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/16_8e8d61ff36734ed594eab6607f23535d_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/12_6f5cf0553bd14e579afe04dea684d99c_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/13_d8e9ef85b6b94ceebb34528a563c5377_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                                <li className="product-gallery-item gallery-item">
                                                    <img
                                                        className="product-image-feature"
                                                        src="//product.hstatic.net/1000096703/product/atn_moi_dd01e45d11af4c4e98193f59173a4a14_master.jpg"
                                                        alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-5 col-sm-12 col-xs-12 product-content-desc"
                                    id="detail-product"
                                >
                                    <div className="product-title">
                                        <h1>Áo Thun Unisex Kenta Studio ATN0146</h1>
                                        <span id="pro_sku">
                                            <strong>SKU:</strong> ATN0146MMDE
                                        </span>
                                    </div>
                                    <div className="product-price" id="price-preview">
                                        <span className="pro-price">295,000₫</span>
                                    </div>
                                    <form
                                        id="add-item-form"
                                        action="/cart/add"
                                        method="post"
                                        className="variants clearfix"
                                    >
                                        <div className="select clearfix">
                                            <select
                                                id="product-select"
                                                name="id"
                                                style={{ display: "none" }}
                                            >
                                                <option
                                                    data-title="M / Đen"
                                                    data-avaiable="true"
                                                    value={1097461981}
                                                >
                                                    M / Đen - 295,000₫
                                                </option>
                                                <option
                                                    data-title="XL / Đen"
                                                    data-avaiable="true"
                                                    value={1097461982}
                                                >
                                                    XL / Đen - 295,000₫
                                                </option>
                                                <option
                                                    data-title="2XL / Đen"
                                                    data-avaiable="true"
                                                    value={1097461983}
                                                >
                                                    2XL / Đen - 295,000₫
                                                </option>
                                                <option
                                                    data-title="L / Đen"
                                                    data-avaiable="true"
                                                    value={1097461984}
                                                >
                                                    L / Đen - 295,000₫
                                                </option>
                                            </select>
                                        </div>
                                        <div className="select-swatch clearfix">
                                            <div
                                                id="variant-swatch-0"
                                                className="swatch clearfix swarch-size"
                                                data-option="option1"
                                                data-option-index={0}
                                            >
                                                <a
                                                    className="pull-right"
                                                    style={{ margin: "10px 25px" }}
                                                    href="javascript:;"
                                                    data-fancybox=""
                                                    data-src="#pop-size"
                                                >
                                                    CÁCH CHỌN SIZE
                                                </a>
                                                <div
                                                    id="pop-size"
                                                    style={{ display: "none" }}
                                                    className="animated-modal"
                                                >
                                                    <img
                                                        className="hidden-xs"
                                                        src="//theme.hstatic.net/1000096703/1000836887/14/size_chart_desktop.jpg?v=243"
                                                        alt=""
                                                    />
                                                    <img
                                                        className="visible-xs"
                                                        src="//theme.hstatic.net/1000096703/1000836887/14/size_chart_mobile.jpg?v=243"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                id="variant-swatch-1"
                                                className="swatch clearfix "
                                                data-option="option2"
                                                data-option-index={1}
                                            >
                                                <div className="header hide">Màu sắc:</div>
                                                <div className="header">
                                                    <span />
                                                </div>
                                                <div className="select-swap">
                                                    <div
                                                        data-value="Đen"
                                                        className="n-sd swatch-element color den  "
                                                    >
                                                        <input
                                                            className="variant-1"
                                                            id="swatch-1-den"
                                                            type="radio"
                                                            name="option2"
                                                            defaultValue="Đen"
                                                            data-vhandle="den"
                                                            defaultChecked=""
                                                        />
                                                        <label className="den" htmlFor="swatch-1-den">
                                                            <span>Đen</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="selector-actions">
                                            <div className="quantity-area clearfix">
                                                <input
                                                    type="button"
                                                    defaultValue="-"
                                                    className="qty-btn"
                                                />
                                                <input
                                                    type="text"
                                                    id="quantity"
                                                    name="quantity"
                                                    defaultValue={1}
                                                    min={1}
                                                    className="quantity-selector"
                                                />
                                                <input
                                                    type="button"
                                                    defaultValue="+"
                                                    className="qty-btn"
                                                />
                                            </div>
                                            <div className="wrap-addcart clearfix">
                                                <div className="row-flex">
                                                    <button
                                                        type="button"
                                                        id="add-to-cart"
                                                        className=" add-to-cartProduct button btn-addtocart addtocart-modal "
                                                        name="add"
                                                    >
                                                        <span> Thêm vào giỏ </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-action-bottom visible-xs">
                                            <div className="input-bottom">
                                                <input
                                                    id="quan-input"
                                                    type="number"
                                                    defaultValue={1}
                                                    min={1}
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                id="add-to-cartbottom"
                                                className=" add-to-cartProduct add-cart-bottom button dark addtocart-modal"
                                                name="add"
                                            >
                                                <span> Thêm vào giỏ </span>
                                            </button>
                                        </div>
                                    </form>
                                    <div className="hrv-pmo-coupon" data-hrvpmo-layout="minimum" />
                                    <div className="hrv-pmo-discount" data-hrvpmo-layout="minimum" />
                                    <div className="product-description">
                                        <div className="title-bl">
                                            <h2>Mô tả</h2>
                                        </div>
                                        <div className="description-content">
                                            <div className="description-productdetail">
                                                <p>
                                                    Áo thun Kenta Studio, chất liệu thun cotton 280gsm dày
                                                    dặn, mát lạnh. From unisex thoải mái, nam hoặc nữ đều mặc
                                                    được.&nbsp;Bo cổ bản to dày dặn, đường may cao cấp từng
                                                    chi tiết.&nbsp;
                                                </p>
                                                <p>
                                                    <strong>Hướng dẫn bảo quản:</strong>
                                                </p>
                                                <p>- Không dùng hóa chất tẩy.</p>
                                                <p>- Ủi ở nhiệt độ thích hợp, hạn chế dùng máy sấy.</p>
                                                <p>
                                                    - Giặt ở chế độ bình thường, với đồ có màu tương tự.
                                                    <br />
                                                </p>
                                                <div
                                                    className="youtube-embed-wrapper"
                                                    style={{
                                                        position: "relative",
                                                        paddingBottom: "56.25%",
                                                        height: 0
                                                    }}
                                                >
                                                    <iframe
                                                        className="iframe-youtube-embed"
                                                        width={640}
                                                        height={360}
                                                        src="https://www.youtube.com/embed/3cyhVEOIo44"
                                                        style={{
                                                            aspectRatio: "16 / 9",
                                                            width: "100%",
                                                            height: "100%",
                                                            position: "absolute"
                                                        }}
                                                    />
                                                </div>
                                                <p></p>
                                            </div>
                                            <a href="javascript:void(0);" id="detail_more">
                                                <span className="btn-effect">Xem thêm</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-productRelated clearfix">
                                <div className="heading-title text-center">
                                    <h2>Sản phẩm liên quan</h2>
                                </div>
                                <div className="content-product-list row">
                                    <div className="col-md-3 col-sm-6 col-xs-6 pro-loop">
                                        <div className="product-block product-resize" data-anmation={2}>
                                            <div className="product-img">
                                                <a
                                                    href="/products/ao-thun-unisex-kenta-studio-trang-atn0146"
                                                    title="Áo Thun Unisex Kenta Studio ATN0146"
                                                    className="image-resize"
                                                >
                                                    <picture>
                                                        <source
                                                            media="(max-width: 767px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/8_7c88b69f767c4c8bb5e14f0d25cfa12c_large.jpg"
                                                        />
                                                        <source
                                                            media="(min-width: 768px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/8_7c88b69f767c4c8bb5e14f0d25cfa12c_grande.jpg"
                                                        />
                                                        <img
                                                            className="img-loop"
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/8_7c88b69f767c4c8bb5e14f0d25cfa12c_grande.jpg"
                                                        />
                                                    </picture>
                                                    <picture>
                                                        <source
                                                            media="(max-width: 767px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/9_f555028583024f068804dad8c085cdb2_large.jpg"
                                                        />
                                                        <source
                                                            media="(min-width: 768px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/9_f555028583024f068804dad8c085cdb2_grande.jpg"
                                                        />
                                                        <img
                                                            className="img-loop img-hover"
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/9_f555028583024f068804dad8c085cdb2_grande.jpg"
                                                        />
                                                    </picture>
                                                </a>
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
                                                        <p className="pro-price ">
                                                            295,000₫
                                                            <span className="pro-price-del" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-6 pro-loop">
                                        <div className="product-block product-resize" data-anmation={3}>
                                            <div className="product-img">
                                                <a
                                                    href="/products/ao-thun-unisex-kenta-studio-xanh-atn0146"
                                                    title="Áo Thun Unisex Kenta Studio ATN0146"
                                                    className="image-resize"
                                                >
                                                    <picture>
                                                        <source
                                                            media="(max-width: 767px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/12_0ae5562fa62d47cc82a0750e259d3bcf_large.jpg"
                                                        />
                                                        <source
                                                            media="(min-width: 768px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/12_0ae5562fa62d47cc82a0750e259d3bcf_grande.jpg"
                                                        />
                                                        <img
                                                            className="img-loop"
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/12_0ae5562fa62d47cc82a0750e259d3bcf_grande.jpg"
                                                        />
                                                    </picture>
                                                    <picture>
                                                        <source
                                                            media="(max-width: 767px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/13_b9239bb22bb64612946aa9f34c6d03cb_large.jpg"
                                                        />
                                                        <source
                                                            media="(min-width: 768px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/13_b9239bb22bb64612946aa9f34c6d03cb_grande.jpg"
                                                        />
                                                        <img
                                                            className="img-loop img-hover"
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/13_b9239bb22bb64612946aa9f34c6d03cb_grande.jpg"
                                                        />
                                                    </picture>
                                                </a>
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
                                                        <p className="pro-price ">
                                                            295,000₫
                                                            <span className="pro-price-del" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-6 pro-loop">
                                        <div className="product-block product-resize" data-anmation={4}>
                                            <div className="product-img">
                                                <a
                                                    href="/products/ao-thun-unisex-kenta-studio-nau-atn0146"
                                                    title="Áo Thun Unisex Kenta Studio ATN0146"
                                                    className="image-resize"
                                                >
                                                    <picture>
                                                        <source
                                                            media="(max-width: 767px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/10_b66222e5f4c844cb92d9f06ab4a0e68e_large.jpg"
                                                        />
                                                        <source
                                                            media="(min-width: 768px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/10_b66222e5f4c844cb92d9f06ab4a0e68e_grande.jpg"
                                                        />
                                                        <img
                                                            className="img-loop"
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/10_b66222e5f4c844cb92d9f06ab4a0e68e_grande.jpg"
                                                        />
                                                    </picture>
                                                    <picture>
                                                        <source
                                                            media="(max-width: 767px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/11_18d4037319b441e2b50c1d60cfff5e09_large.jpg"
                                                        />
                                                        <source
                                                            media="(min-width: 768px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/11_18d4037319b441e2b50c1d60cfff5e09_grande.jpg"
                                                        />
                                                        <img
                                                            className="img-loop img-hover"
                                                            alt=" Áo Thun Unisex Kenta Studio ATN0146 "
                                                            src="//product.hstatic.net/1000096703/product/11_18d4037319b441e2b50c1d60cfff5e09_grande.jpg"
                                                        />
                                                    </picture>
                                                </a>
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
                                                        <p className="pro-price ">
                                                            295,000₫
                                                            <span className="pro-price-del" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-6 pro-loop">
                                        <div className="product-block product-resize" data-anmation={5}>
                                            <div className="product-img">
                                                <a
                                                    href="/products/ao-thun-unisex-saigonnese-den-atn0147"
                                                    title="Áo Thun Unisex Saigonnese ATN0147"
                                                    className="image-resize"
                                                >
                                                    <picture>
                                                        <source
                                                            media="(max-width: 767px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/1_57509edb0f514024804aa8b52b039e8c_large.jpg"
                                                        />
                                                        <source
                                                            media="(min-width: 768px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/1_57509edb0f514024804aa8b52b039e8c_grande.jpg"
                                                        />
                                                        <img
                                                            className="img-loop"
                                                            alt=" Áo Thun Unisex Saigonnese ATN0147 "
                                                            src="//product.hstatic.net/1000096703/product/1_57509edb0f514024804aa8b52b039e8c_grande.jpg"
                                                        />
                                                    </picture>
                                                    <picture>
                                                        <source
                                                            media="(max-width: 767px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/2_4286770510824e12b976605e9f1d110a_large.jpg"
                                                        />
                                                        <source
                                                            media="(min-width: 768px)"
                                                            srcSet="//product.hstatic.net/1000096703/product/2_4286770510824e12b976605e9f1d110a_grande.jpg"
                                                        />
                                                        <img
                                                            className="img-loop img-hover"
                                                            alt=" Áo Thun Unisex Saigonnese ATN0147 "
                                                            src="//product.hstatic.net/1000096703/product/2_4286770510824e12b976605e9f1d110a_grande.jpg"
                                                        />
                                                    </picture>
                                                </a>
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
                                                        <p className="pro-price ">
                                                            295,000₫
                                                            <span className="pro-price-del" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default Detail;