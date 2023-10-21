import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <>
            <main className="mainContent-theme ">
                <div className="layout-account">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xs-12 wrapbox-heading-account">
                                <div className="header-page clearfix">
                                    <h1>Tạo tài khoản</h1>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 wrapbox-content-account ">
                                <div className="userbox">
                                    <form
                                        acceptCharset="UTF-8"
                                        action="/account"
                                        id="create_customer"
                                        method="post"
                                    >
                                        <input
                                            name="form_type"
                                            type="hidden"
                                            defaultValue="create_customer"
                                        />
                                        <input name="utf8" type="hidden" defaultValue="✓" />
                                        <div id="last_name" className="clearfix large_form">
                                            <label htmlFor="last_name" className="label icon-field">
                                                <i className="icon-login icon-user " />
                                            </label>
                                            <input
                                                required=""
                                                type="text"
                                                defaultValue=""
                                                name="customer[last_name]"
                                                placeholder="Họ"
                                                id="last_name"
                                                className="text"
                                                size={30}
                                            />
                                        </div>
                                        <div id="first_name" className="clearfix large_form">
                                            <label htmlFor="first_name" className="label icon-field">
                                                <i className="icon-login icon-user " />
                                            </label>
                                            <input
                                                required=""
                                                type="text"
                                                defaultValue=""
                                                name="customer[first_name]"
                                                placeholder="Tên"
                                                id="first_name"
                                                className="text"
                                                size={30}
                                            />
                                        </div>
                                        <div id="gender" className="clearfix large_form">
                                            <input
                                                id="radio1"
                                                type="radio"
                                                defaultValue={0}
                                                name="customer[gender]"
                                            />
                                            <label htmlFor="radio1">Nữ</label>
                                            <input
                                                id="radio2"
                                                type="radio"
                                                defaultValue={1}
                                                name="customer[gender]"
                                            />
                                            <label htmlFor="radio2">Nam</label>
                                        </div>
                                        <div id="birthday" className="clearfix large_form">
                                            <label htmlFor="birthday" className="label icon-field">
                                                <i className="icon-login icon-envelope " />
                                            </label>
                                            <input
                                                type="text"
                                                defaultValue=""
                                                placeholder="mm/dd/yyyy"
                                                name="customer[birthday]"
                                                id="birthday"
                                                className="text"
                                                size={30}
                                            />
                                        </div>
                                        <div id="email" className="clearfix large_form">
                                            <label htmlFor="email" className="label icon-field">
                                                <i className="icon-login icon-envelope " />
                                            </label>
                                            <input
                                                required=""
                                                type="email"
                                                defaultValue=""
                                                placeholder="Email"
                                                name="customer[email]"
                                                id="email"
                                                className="text"
                                                size={30}
                                                autoComplete="current-email"
                                            />
                                        </div>
                                        <div id="password" className="clearfix large_form">
                                            <label htmlFor="password" className="label icon-field">
                                                <i className="icon-login icon-shield " />
                                            </label>
                                            <input
                                                required=""
                                                type="password"
                                                defaultValue=""
                                                placeholder="Mật khẩu"
                                                name="customer[password]"
                                                id="password"
                                                className="password text"
                                                size={30}
                                                autoComplete="current-password"
                                            />
                                        </div>
                                        <div className="clearfix action_account_custommer">
                                            <div className="action_bottom button dark">
                                                <input className="btn" type="submit" defaultValue="Đăng ký" />
                                            </div>
                                        </div>
                                        <div className="clearfix req_pass">
                                            <a className="come-back" href="/">
                                                <i className="fa fa-long-arrow-left" /> Quay lại trang chủ
                                            </a>
                                        </div>
                                        <input
                                            id="3295baf9e1564f628302447f3f0df3a3"
                                            name="g-recaptcha-response"
                                            type="hidden"
                                        />
                                    </form>
                                </div>
                            </div>
                            {/* #register */}
                            {/* #customer-register */}
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Register;