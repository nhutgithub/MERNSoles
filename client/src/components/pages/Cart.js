import React from 'react';

function Cart() {

    return (
        <main className="mainContent-theme ">
            <div id="layout-cart">
                <div className="main-content-cart">
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
                                            className="active"
                                            itemProp="itemListElement"
                                            itemScope=""
                                            itemType="http://schema.org/ListItem"
                                        >
                                            <span itemProp="item" content="https://kenta.vn/cart">
                                                <span itemProp="name">Giỏ hàng (1)</span>
                                            </span>
                                            <meta itemProp="position" content={2} />
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row layout-cart">
                            <div className="col-md-12 col-xs-12">
                                <div className="row">
                                    <div className="col-md-9 col-xs-12">
                                        <h1 className="heading-cart">Giỏ hàng của bạn</h1>
                                        <div className="list-pageform-cart">
                                            <form action="/cart" method="post" id="cartformpage">
                                                <div className="cart-row">
                                                    <h2 className="title-number-cart">
                                                        Bạn đang có <span>1 sản phẩm</span> trong giỏ hàng
                                                    </h2>
                                                    <div className="table-cart">
                                                        <div
                                                            className="item line-item line-item-container"
                                                            data-variant-id={1097461981}
                                                        >
                                                            <div className="left">
                                                                <div className="item-img">
                                                                    <a href="/products/ao-thun-unisex-kenta-studio-den-atn0146">
                                                                        <img
                                                                            src="  //product.hstatic.net/1000096703/product/6_e778851a63dd4563a25b1c33c4154387_medium.jpg "
                                                                            alt="Áo Thun Unisex Kenta Studio ATN0146"
                                                                        />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="right">
                                                                <div className="item-info">
                                                                    <a href="/products/ao-thun-unisex-kenta-studio-den-atn0146">
                                                                        <h3>Áo Thun Unisex Kenta Studio ATN0146</h3>
                                                                        <div className="item-desc">
                                                                            <span className="variant_title">M / Đen</span>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="item-quan">
                                                                    <div className="qty quantity-partent qty-click clearfix">
                                                                        <button
                                                                            type="button"
                                                                            className="qtyminus qty-btn"
                                                                        >
                                                                            -
                                                                        </button>{" "}
                                                                        <input
                                                                            type="text"
                                                                            size={4}
                                                                            name="updates[]"
                                                                            min={1}
                                                                            id="updates_1097461981"
                                                                            data-price={29500000}
                                                                            defaultValue={1}
                                                                            className="tc line-item-qty item-quantity"
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            className="qtyplus qty-btn"
                                                                        >
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="item-price">
                                                                    <p>
                                                                        <span>295,000₫</span>
                                                                    </p>
                                                                </div>
                                                                <div className="item-total-price">
                                                                    <div className="price">
                                                                        <span className="text">Thành tiền:</span>
                                                                        <span className="line-item-total">
                                                                            295,000₫
                                                                        </span>
                                                                    </div>
                                                                    <div className="remove">
                                                                        <a
                                                                            href="/cart/change?line=1&quantity=0"
                                                                            className="cart"
                                                                        >
                                                                            <img src="//theme.hstatic.net/1000096703/1000836887/14/ic_close.png?v=241" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-row">
                                                    <div className="row note-block">
                                                        <div className="col-md-5 col-xs-12 cart-left-block">
                                                            <div className="checkout-buttons clearfix">
                                                                <label htmlFor="note" className="note-label">
                                                                    Ghi chú đơn hàng
                                                                </label>
                                                                <textarea
                                                                    className="form-control"
                                                                    id="note"
                                                                    name="note"
                                                                    rows={5}
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-7 col-xs-12 cart-right-block">
                                                            <div className="policy_return">
                                                                <h4>Dịch vụ tại Kenta</h4>
                                                                <ul>
                                                                    <li>Miễn phí giao hàng với hóa đơn trên 500k.</li>
                                                                    <li>
                                                                        TP.HCM nhận hàng trong 12h. Tỉnh thành khác
                                                                        trong 72h sau khi đặt.
                                                                    </li>
                                                                    <li>Bảo hành sản phẩm.</li>
                                                                    <li>
                                                                        Sản phẩm được đổi trong 7 ngày, nguyên tag, chưa
                                                                        sử dụng, giặt ủi, có mùi lạ.
                                                                    </li>
                                                                    <li>
                                                                        Sản phẩm đổi giá trị bằng hoặc lớn hơn, sản phẩm
                                                                        Sale không áp dụng đổi.
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <a
                                                                className="button dark link-continue hidden"
                                                                href="/collections/all"
                                                                title="Tiếp tục mua hàng"
                                                            >
                                                                <i className="fa fa-reply" />
                                                                Tiếp tục mua hàng
                                                            </a>
                                                            <button
                                                                type="submit"
                                                                id="update-cart"
                                                                className="btn-update button hidden"
                                                                name="update"
                                                                value=""
                                                            >
                                                                Cập nhật
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                id="checkout"
                                                                className="btn-checkout button hidden"
                                                                name="checkout"
                                                                value=""
                                                            >
                                                                Thanh toán
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="hrv-pmo-coupon" data-hrvpmo-layout="grids" />
                                            <div
                                                className="hrv-pmo-discount"
                                                data-hrvpmo-layout="grids"
                                            />
                                        </div>
                                        {/* Nhóm SP */}
                                    </div>
                                    <div className="col-md-3 col-xs-12 sidebar-cart-fix">
                                        <a href="/" className="continue">
                                            Tiếp tục mua hàng →
                                        </a>
                                        <div className="order-summary-block">
                                            <h2 className="order-summary-title">Thông tin đơn hàng</h2>
                                            <div className="summary-subtotal hidden">
                                                <p className="subtotal">
                                                    Tạm tính:
                                                    <span className="cart-total-price">295,000₫</span>
                                                </p>
                                                <p className="shipping clearfix">
                                                    Phí vận chuyển:
                                                    <span>---</span>
                                                </p>
                                            </div>
                                            <div className="summary-total">
                                                <p>
                                                    Tổng tiền: <span>295,000₫</span>
                                                </p>
                                            </div>
                                            <div className="summary-action">
                                                <p>Bạn có thể nhập mã giảm giá ở trang thanh toán</p>
                                                <a className="checkout-btn" href="#">
                                                    THANH TOÁN
                                                </a>
                                            </div>
                                        </div>
                                        <div className="get-code"></div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-md-3 col-xs-3">
                                </div>

                                <div className="col-md-6 col-xs-6">
                                    <div className="step">
                                        <div className="step-sections steps-onepage" step={1}>
                                            <div className="section">
                                                <div className="section-header">
                                                    <h1>Thông tin giao hàng</h1>
                                                </div>
                                                <div className="section-content section-customer-information no-mb">
                                                    <p className="section-content-text">
                                                        Bạn đã có tài khoản?
                                                        <a href="/account/login?urlredirect=%2Fcheckouts%2F233e3f17601342b8b797096a993fb59d%3Fstep%3D1">
                                                            Đăng nhập
                                                        </a>
                                                    </p>
                                                    <div className="fieldset">
                                                        <div className="field field-required  ">
                                                            <div className="field-input-wrapper">
                                                                <label
                                                                    className="field-label"
                                                                    htmlFor="billing_address_full_name"
                                                                >
                                                                    Họ và tên
                                                                </label>
                                                                <input
                                                                    placeholder="Họ và tên"
                                                                    autoCapitalize="off"
                                                                    spellCheck="false"
                                                                    className="field-input"
                                                                    size={30}
                                                                    type="text"
                                                                    id="billing_address_full_name"
                                                                    name="billing_address[full_name]"
                                                                    defaultValue=""
                                                                    autoComplete="false"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="field  field-two-thirds  ">
                                                            <div className="field-input-wrapper">
                                                                <label
                                                                    className="field-label"
                                                                    htmlFor="checkout_user_email"
                                                                >
                                                                    Email
                                                                </label>
                                                                <input
                                                                    autoComplete="false"
                                                                    placeholder="Email"
                                                                    autoCapitalize="off"
                                                                    spellCheck="false"
                                                                    className="field-input"
                                                                    size={30}
                                                                    type="email"
                                                                    id="checkout_user_email"
                                                                    name="checkout_user[email]"
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="field field-required field-third  ">
                                                            <div className="field-input-wrapper">
                                                                <label
                                                                    className="field-label"
                                                                    htmlFor="billing_address_phone"
                                                                >
                                                                    Số điện thoại
                                                                </label>
                                                                <input
                                                                    autoComplete="false"
                                                                    placeholder="Số điện thoại"
                                                                    autoCapitalize="off"
                                                                    spellCheck="false"
                                                                    className="field-input"
                                                                    size={30}
                                                                    maxLength={15}
                                                                    type="tel"
                                                                    id="billing_address_phone"
                                                                    name="billing_address[phone]"
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="section-content">
                                                    <div className="fieldset">
                                                        <form
                                                            autoComplete="off"
                                                            id="form_update_shipping_method"
                                                            className="field default"
                                                            acceptCharset="UTF-8"
                                                            method="post"
                                                        >
                                                            <input name="utf8" type="hidden" defaultValue="✓" />
                                                            <div className="content-box mt0">
                                                                <div
                                                                    id="form_update_location_customer_shipping"
                                                                    className="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary "
                                                                    htmlFor="customer_pick_at_location_false"
                                                                >
                                                                    <input name="utf8" type="hidden" defaultValue="✓" />
                                                                    <div className="order-checkout__loading--box">
                                                                        <div className="order-checkout__loading--circle" />
                                                                    </div>
                                                                    <div className="field field-required  ">
                                                                        <div className="field-input-wrapper">
                                                                            <label
                                                                                className="field-label"
                                                                                htmlFor="billing_address_address1"
                                                                            >
                                                                                Địa chỉ
                                                                            </label>
                                                                            <input
                                                                                placeholder="Địa chỉ"
                                                                                autoCapitalize="off"
                                                                                spellCheck="false"
                                                                                className="field-input"
                                                                                size={30}
                                                                                type="text"
                                                                                id="billing_address_address1"
                                                                                name="billing_address[address1]"
                                                                                defaultValue=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <input
                                                                        name="selected_customer_shipping_country"
                                                                        type="hidden"
                                                                        defaultValue=""
                                                                    />
                                                                    <input
                                                                        name="selected_customer_shipping_province"
                                                                        type="hidden"
                                                                        defaultValue=""
                                                                    />
                                                                    <input
                                                                        name="selected_customer_shipping_district"
                                                                        type="hidden"
                                                                        defaultValue=""
                                                                    />
                                                                    <input
                                                                        name="selected_customer_shipping_ward"
                                                                        type="hidden"
                                                                        defaultValue=""
                                                                    />
                                                                    <div className="field field-show-floating-label field-required field-third ">
                                                                        <div className="field-input-wrapper field-input-wrapper-select">
                                                                            <label
                                                                                className="field-label"
                                                                                htmlFor="customer_shipping_province"
                                                                            >
                                                                                {" "}
                                                                                Tỉnh / thành
                                                                            </label>
                                                                            <select
                                                                                className="field-input"
                                                                                id="customer_shipping_province"
                                                                                name="customer_shipping_province"
                                                                            >
                                                                                <option
                                                                                    data-code="null"
                                                                                    value="null"
                                                                                >
                                                                                    Chọn tỉnh / thành
                                                                                </option>

                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="field field-show-floating-label field-required field-third ">
                                                                        <div className="field-input-wrapper field-input-wrapper-select">
                                                                            <label
                                                                                className="field-label"
                                                                                htmlFor="customer_shipping_district"
                                                                            >
                                                                                Quận / huyện
                                                                            </label>
                                                                            <select
                                                                                className="field-input"
                                                                                id="customer_shipping_district"
                                                                                name="customer_shipping_district"
                                                                            >
                                                                                <option
                                                                                    data-code="null"
                                                                                    value="null"
                                                                                >
                                                                                    Chọn quận / huyện
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="field field-show-floating-label field-required  field-third  ">
                                                                        <div className="field-input-wrapper field-input-wrapper-select">
                                                                            <label
                                                                                className="field-label"
                                                                                htmlFor="customer_shipping_ward"
                                                                            >
                                                                                Phường / xã
                                                                            </label>
                                                                            <select
                                                                                className="field-input"
                                                                                id="customer_shipping_ward"
                                                                                name="customer_shipping_ward"
                                                                            >
                                                                                <option
                                                                                    data-code="null"
                                                                                    value="null"
                                                                                >
                                                                                    Chọn phường / xã
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        id="div_location_country_not_vietnam"
                                                                        className="section-customer-information "
                                                                    >
                                                                        <div className="field field-two-thirds">
                                                                            <div className="field-input-wrapper">
                                                                                <label
                                                                                    className="field-label"
                                                                                    htmlFor="billing_address_city"
                                                                                >
                                                                                    Thành phố
                                                                                </label>
                                                                                <input
                                                                                    placeholder="Thành phố"
                                                                                    autoCapitalize="off"
                                                                                    spellCheck="false"
                                                                                    className="field-input"
                                                                                    size={30}
                                                                                    type="text"
                                                                                    id="billing_address_city"
                                                                                    name="billing_address[city]"
                                                                                    defaultValue=""
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step-footer" id="step-footer-checkout">
                                            <form id="form_next_step" acceptCharset="UTF-8" method="post">
                                                <input name="utf8" type="hidden" defaultValue="✓" />
                                                <button type="submit" className="step-footer-continue-btn btn">
                                                    <span className="btn-content">Hoàn tất đơn hàng</span>
                                                    <i className="btn-spinner icon icon-button-spinner" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-3">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cart;