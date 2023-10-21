import React from 'react';
import { useEffect } from 'react';

function Header() {
    useEffect(() => {
        // Tên tệp JavaScript và đường dẫn
        const scripts = [
            '/assets/js/plugins.js',
            '/assets/js/scripts.js'
        ];

        // Tải và thêm tệp JavaScript vào trang
        scripts.forEach((path) => {
            const script = document.createElement('script');
            script.src = path;
            script.type = 'text/javascript';

            document.body.appendChild(script);
        });
    }, []);
    return (
        <>
            <div className="promo-bar" id="topbar">
                <div className="container">
                    <div id="slideText">
                        <p>
                            <a href="/collections/all">
                                Free ship Toàn Quốc với đơn hàng &gt; 500K
                            </a>
                        </p>
                        <p>
                            <a href="/collections/all">Đổi sản phẩm trong 7 ngày </a>
                        </p>
                        <p>
                            <a href="/collections/all">Sản phẩm được bảo hành </a>
                        </p>
                        <p>
                            <a href="">
                                Hotline mua hàng: <b>(028) 7300 6200 </b>{" "}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <header className="main-header">
                <div className="wrapper-header  header-transparent " id="themes-header">
                    <div className="container">
                        <div className="header-middle row-flex flex-flow-header">
                            <div className="col-md-4 wrap-header-1 hidden-sm hidden-xs" />
                            <div className="col-md-4 wrap-header-2 col-sm-6 col-xs-7">
                                <div
                                    className="main-header--logo fade-box"
                                    itemScope=""
                                    itemType="http://schema.org/Organization"
                                >
                                    <a href="/">
                                        <h1 className="logo">
                                            <img
                                                itemProp="logo"
                                                src="https://file.hstatic.net/1000096703/file/logo_website__191___70_px__979fdef210f7474d8a09b42724033b5c.png"
                                                alt="KENTA.VN"
                                                className="img-responsive logoimg lazyload"
                                            />
                                        </h1>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 wrap-header-3 col-sm-6 col-xs-5">
                                <div className="main-header--action row-flex">
                                    <div className="action-acc header-wrap-icon">
                                        <a href="/login" title='Đăng nhập'>
                                            <span className="account-menu" aria-hidden="true">
                                                <svg
                                                    className="svg-account"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    width="510px"
                                                    height="510px"
                                                    viewBox="0 0 510 510"
                                                    style={{ enableBackground: "new 0 0 510 510" }}
                                                    xmlSpace="preserve"
                                                >
                                                    <g>
                                                        <g id="account-circle">
                                                            <path
                                                                d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M255,76.5
																		c43.35,0,76.5,33.15,76.5,76.5s-33.15,76.5-76.5,76.5c-43.35,0-76.5-33.15-76.5-76.5S211.65,76.5,255,76.5z M255,438.6
																		c-63.75,0-119.85-33.149-153-81.6c0-51,102-79.05,153-79.05S408,306,408,357C374.85,405.45,318.75,438.6,255,438.6z"
                                                            />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="action--search" id="site-search-handle">
                                        <a href="/search">
                                            <span className="search-menu" aria-hidden="true">
                                                <svg
                                                    version="1.1"
                                                    className="svg-search"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 24 27"
                                                    style={{ enableBackground: "new 0 0 24 27" }}
                                                    xmlSpace="preserve"
                                                >
                                                    <path d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z" />
                                                    <rect
                                                        x={17}
                                                        y={17}
                                                        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)"
                                                        width={4}
                                                        height={8}
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="action-cart" id="site-cart-handle">
                                        <a href="/cart">
                                            <span className="cart-menu" aria-hidden="true">
                                                <svg
                                                    version="1.1"
                                                    className="svg-cart"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 24 27"
                                                    style={{ enableBackground: "new 0 0 24 27" }}
                                                    xmlSpace="preserve"
                                                >
                                                    <g>
                                                        <path d="M0,6v21h24V6H0z M22,25H2V8h20V25z" />
                                                    </g>
                                                    <g>
                                                        <path d="M12,2c3,0,3,2.3,3,4h2c0-2.8-1-6-5-6S7,3.2,7,6h2C9,4.3,9,2,12,2z" />
                                                    </g>
                                                </svg>
                                                <span className="count-holder">
                                                    <span className="count">0</span>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div
                                        className="action--bar hamburger-menu hidden-lg hidden-md"
                                        id="site-menu-handle"
                                    >
                                        <span className="bar" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 wrap-header-4 hidden-sm hidden-xs">
                                <div className="main-header--menu">
                                    <nav className="navbar-mainmenu">
                                        <ul className="list-mainmenu">
                                            <li className="has-submenu ">
                                                <a href="/collections/ao-khoac" title="Áo Khoác">
                                                    Áo Khoác
                                                    <i className="fa fa-chevron-down" aria-hidden="true" />
                                                </a>
                                                <ul className="list-submenu">
                                                    <li className="">
                                                        <a href="/collections/ao-khoac-ni" title="Áo Khoác Nỉ">
                                                            Áo Khoác Nỉ
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="/collections/ao-khoac-du" title="Áo Khoác Dù">
                                                            Áo Khoác Dù
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a
                                                            href="/collections/ao-khoac-kaki"
                                                            title="Áo Khoác Kaki"
                                                        >
                                                            Áo Khoác Kaki
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a
                                                            href="/collections/ao-blazer-nam"
                                                            title="Áo Blazer Nam"
                                                        >
                                                            Áo Blazer Nam
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu ">
                                                <a href="/collections/ao-thun" title="Áo thun">
                                                    Áo thun
                                                    <i className="fa fa-chevron-down" aria-hidden="true" />
                                                </a>
                                                <ul className="list-submenu">
                                                    <li className="">
                                                        <a
                                                            href="/collections/ao-thun-tay-ngan"
                                                            title="Áo Thun Tay Ngắn"
                                                        >
                                                            Áo Thun Tay Ngắn
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a
                                                            href="/collections/ao-thun-tay-dai"
                                                            title="Áo Thun Tay Dài"
                                                        >
                                                            Áo Thun Tay Dài
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a
                                                            href="/collections/ao-thun-polo"
                                                            title="Áo Thun Polo"
                                                        >
                                                            Áo Thun Polo
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu ">
                                                <a href="/collections/so-mi" title="Sơ mi">
                                                    Sơ mi
                                                    <i className="fa fa-chevron-down" aria-hidden="true" />
                                                </a>
                                                <ul className="list-submenu">
                                                    <li className="">
                                                        <a
                                                            href="/collections/so-mi-tay-ngan"
                                                            title="Sơ Mi Tay Ngắn"
                                                        >
                                                            Sơ Mi Tay Ngắn
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a
                                                            href="/collections/so-mi-tay-dai"
                                                            title="Sơ Mi Tay Dài"
                                                        >
                                                            Sơ Mi Tay Dài
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu ">
                                                <a href="/collections/quan-dai" title="Quần Dài">
                                                    Quần Dài
                                                    <i className="fa fa-chevron-down" aria-hidden="true" />
                                                </a>
                                                <ul className="list-submenu">
                                                    <li className="">
                                                        <a href="/collections/quan-kaki-dai" title="Quần Kaki">
                                                            Quần Kaki
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="/collections/quan-tay-nam" title="Quần Tây">
                                                            Quần Tây
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="/collections/quan-jean" title="Quần Jean">
                                                            Quần Jean
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a
                                                            href="/collections/quan-thun-nam"
                                                            title="Quần Jogger Thun"
                                                        >
                                                            Quần Jogger Thun
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a
                                                            href="/collections/quan-jogger-kaki"
                                                            title="Quần Jogger Kaki"
                                                        >
                                                            Quần Jogger Kaki
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu ">
                                                <a href="/collections/quan-short" title="Quần Short">
                                                    Quần Short
                                                    <i className="fa fa-chevron-down" aria-hidden="true" />
                                                </a>
                                                <ul className="list-submenu">
                                                    <li className="">
                                                        <a
                                                            href="/collections/quan-short-kaki"
                                                            title="Quần Short Kaki"
                                                        >
                                                            Quần Short Kaki
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a
                                                            href="/collections/quan-short-thun"
                                                            title="Quần Short Thun"
                                                        >
                                                            Quần Short Thun
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a
                                                            href="/collections/quan-short-jean"
                                                            title="Quần Short Jean"
                                                        >
                                                            Quần Short Jean
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a
                                                            href="/collections/quan-short-tay"
                                                            title="Quần Short Tây"
                                                        >
                                                            Quần Short Tây
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a
                                                            href="/collections/quan-short-du"
                                                            title="Quần Short Dù"
                                                        >
                                                            Quần Short Dù
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu ">
                                                <a href="/collections/phu-kien" title="Phụ Kiện">
                                                    Phụ Kiện
                                                    <i className="fa fa-chevron-down" aria-hidden="true" />
                                                </a>
                                                <ul className="list-submenu">
                                                    <li className="">
                                                        <a href="/collections/vi-da-nam" title="Ví Da">
                                                            Ví Da
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="/collections/day-nit-nam" title="Dây Nịt">
                                                            Dây Nịt
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="/collections/ca-vat-no" title="Nơ - Cà Vạt">
                                                            Nơ - Cà Vạt
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="/collections/vo-nam" title="Vớ (Tất)">
                                                            Vớ (Tất)
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a href="/collections/non-nam" title="Nón">
                                                            Nón
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="">
                                                <a href="/collections/all" title="ALL">
                                                    ALL
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="/collections/sale" title="SALE">
                                                    SALE
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;