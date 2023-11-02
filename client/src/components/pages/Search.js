import React, { useState, useEffect } from 'react';
import API_URL from '../../config';
import axios from 'axios';
import { useParams } from "react-router";

function Search() {
    let { keyword } = useParams();

    const [dataSearch, setDataSearch] = useState([]);
    useEffect(() => {
        axios.get(`${API_URL}/api/search/${keyword}`)
            .then((response) => {
                setDataSearch(response.data);
            })
            .catch(() => {
              });
    }, []);

    const formattedPrice = (price) => {
        const priceAsNumber = parseFloat(price);
        if (!isNaN(priceAsNumber)) {
            const formattedPrice = priceAsNumber.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
            return formattedPrice;
        }
        return "";
    }

    return (
        <main className="mainContent-theme ">
            <div className="searchPage" id="layout-search">
                <div className="container">
                    <div className="row pd-page">
                        <div className="col-md-12 col-xs-12">
                            <div className="heading-page">
                                <h1>Tìm kiếm</h1>
                                <p className="subtxt">
                                    Có <span>{dataSearch.length} sản phẩm</span> cho tìm kiếm
                                </p>
                            </div>
                            <div className="wrapbox-content-page">
                                <div className="content-page" id="search">
                                    <p className="subtext-result">
                                        {" "}
                                        Kết quả tìm kiếm cho <strong>"{keyword}"</strong>.{" "}
                                    </p>
                                    <div className="results content-product-list ">
                                        <div className=" search-list-results row">
                                            {
                                                dataSearch.map((data, index) => (
                                                    <div key={data._id} className="col-md-3 col-sm-6 col-xs-6 pro-loop">
                                                        <div
                                                            className="product-block product-resize"
                                                            data-anmation={index}
                                                        >
                                                            <div className="product-img">
                                                                <a
                                                                    href={`/detail/${data._id}`}
                                                                    className="image-resize"
                                                                >
                                                                    <picture>
                                                                        <img
                                                                            className="img-loop"
                                                                            src={API_URL + data.url_image1}
                                                                        />
                                                                    </picture>
                                                                    <picture>
                                                                        <img
                                                                            className="img-loop img-hover"
                                                                            src={API_URL + data.url_image2}
                                                                        />
                                                                    </picture>
                                                                </a>
                                                                <div className="button-add">
                                                                    <button
                                                                        title="Xem chi tiết"
                                                                        className="action"
                                                                    >
                                                                        <a href={"/detail/" + data._id} style={{ color: 'white' }}>
                                                                            Xem chi tiết
                                                                        </a>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="product-detail clearfix">
                                                                <div className="box-pro-detail">
                                                                    <h3 className="pro-name">
                                                                        <a
                                                                            href={`/detail/${data._id}`}
                                                                        >
                                                                            {data.name}
                                                                        </a>
                                                                    </h3>
                                                                    <div className="box-pro-prices">
                                                                        <p className="pro-price ">
                                                                            {formattedPrice(data.price)}
                                                                            <span className="pro-price-del" />
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
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

export default Search;