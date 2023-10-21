import React from 'react';

function Login() {
    return (
        <>
            <main className="mainContent-theme ">
                <div className="layout-account">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xs-12 wrapbox-heading-account">
                                <div className="header-page clearfix">
                                    <h1>Đăng nhập</h1>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 wrapbox-content-account">
                                <div id="customer-login">
                                    <div id="login" className="userbox">
                                        <div className="accounttype">
                                            <h2 className="title" />
                                        </div>
                                        <form
                                            acceptCharset="UTF-8"
                                            action="/account/login"
                                            id="customer_login"
                                            method="post"
                                        >
                                            <input
                                                name="form_type"
                                                type="hidden"
                                                defaultValue="customer_login"
                                            />
                                            <input name="utf8" type="hidden" defaultValue="✓" />
                                            <div className="clearfix large_form">
                                                <label htmlFor="customer_email" className="icon-field">
                                                    <i className="icon-login icon-envelope " />
                                                </label>
                                                <input
                                                    required=""
                                                    type="email"
                                                    defaultValue=""
                                                    name="customer[email]"
                                                    id="customer_email"
                                                    placeholder="Email"
                                                    className="text"
                                                />
                                            </div>
                                            <div className="clearfix large_form">
                                                <label htmlFor="customer_password" className="icon-field">
                                                    <i className="icon-login icon-shield" />
                                                </label>
                                                <input
                                                    required=""
                                                    type="password"
                                                    defaultValue=""
                                                    name="customer[password]"
                                                    id="customer_password"
                                                    placeholder="Mật khẩu"
                                                    className="text"
                                                    size={16}
                                                />
                                            </div>
                                            <div className="clearfix action_account_custommer">
                                                <div className="action_bottom button dark">
                                                    <input
                                                        className="btn btn-signin"
                                                        type="submit"
                                                        defaultValue="Đăng nhập"
                                                    />
                                                </div>
                                                <div className="req_pass">
                                                    <a
                                                        href="#"
                                                    >
                                                        Quên mật khẩu?
                                                    </a>
                                                    <br />
                                                    hoặc{" "}
                                                    <a title="Đăng ký" href="/register">
                                                        Đăng ký
                                                    </a>
                                                </div>
                                            </div>
                                            <input
                                                id="108235b3450d414584daed9a4bda9980"
                                                name="g-recaptcha-response"
                                                type="hidden"
                                            />
                                        </form>
                                    </div>
                                    <div
                                        id="recover-password"
                                        style={{ display: "none" }}
                                        className="userbox"
                                    >
                                        <div className="accounttype">
                                            <h2>Phục hồi mật khẩu</h2>
                                        </div>
                                        <form
                                            acceptCharset="UTF-8"
                                            action="/account/recover"
                                            method="post"
                                        >
                                            <input
                                                name="form_type"
                                                type="hidden"
                                                defaultValue="recover_customer_password"
                                            />
                                            <input name="utf8" type="hidden" defaultValue="✓" />
                                            <div className="clearfix large_form">
                                                <label htmlFor="email" className="icon-field">
                                                    <i className="icon-login icon-envelope " />
                                                </label>
                                                <input
                                                    type="email"
                                                    defaultValue=""
                                                    size={30}
                                                    name="email"
                                                    placeholder="Email"
                                                    id="recover-email"
                                                    className="text"
                                                />
                                            </div>
                                            <div className="clearfix action_account_custommer">
                                                <div className="action_bottom button dark">
                                                    <input className="btn" type="submit" defaultValue="Gửi" />
                                                </div>
                                                <div className="req_pass">
                                                    <a
                                                        href="#"
                                                    >
                                                        Hủy
                                                    </a>
                                                </div>
                                            </div>
                                            <input
                                                id="bcb01b76d9f74155bc6a7f0ade547b79"
                                                name="g-recaptcha-response"
                                                type="hidden"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Login;