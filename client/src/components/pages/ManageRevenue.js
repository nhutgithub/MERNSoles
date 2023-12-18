import React, { useState } from 'react'
import axios from 'axios';
import { API_URL } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageRevenue = () => {
    const [selectedType, setSelectedType] = useState('byDate');
    const [inputDate, setInputDate] = useState('');
    const [inputMonth, setInputMonth] = useState('');
    const [inputYear, setInputYear] = useState('');
    const [content, setContent] = useState('');

    const showInputField = (value) => {
        setSelectedType(value);
    };

    const revenueManagement = () => {
        let data;

        if (selectedType === 'byDate') {
            if (inputDate.trim() !== '') {
                data = {
                    date: inputDate,
                };
            }
        } else if (selectedType === 'byMonth') {
            if (inputMonth.trim() !== '') {
                const [year, month] = inputMonth.split('-');
                data = {
                    year,
                    month,
                };
            }
        } else if (selectedType === 'byYear') {
            if (inputYear.trim() !== '') {
                data = {
                    year: inputYear,
                };
            }
        }

        if (data) {
            axios.post(`${API_URL}/api/revenues/get-revenue`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    // Xử lý dữ liệu trả về từ server

                    setContent(response.data.revenue);
                    // Hiển thị dữ liệu trên giao diện
                    // Ví dụ: set state hoặc hiển thị thông báo
                })
                .catch((error) => {
                    console.error('Đã xảy ra lỗi khi lấy doanh thu: ', error);
                });
        } else {
            alert('Vui lòng chọn thời gian');
        }
    };
    return (
        <div className='container mt-4'>
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="card">
                    <div className='card-header'>
                        <strong>QUẢN LÝ DOANH THU</strong>
                    </div>
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputType">Chọn loại thống kê:</label>
                            <select
                                name="inputType"
                                id="inputType"
                                className="form-control"
                                onChange={(e) => showInputField(e.target.value)}
                                value={selectedType}
                            >
                                <option value="byDate">Theo ngày</option>
                                <option value="byMonth">Theo tháng</option>
                                <option value="byYear">Theo năm</option>
                            </select>

                            <div id="divDate" style={{ display: selectedType === 'byDate' ? 'block' : 'none' }}>
                                <label htmlFor="inputDate">Ngày:</label>
                                <input
                                    type="date"
                                    name="inputDate"
                                    id="inputDate"
                                    className="form-control"
                                    value={inputDate}
                                    onChange={(e) => setInputDate(e.target.value)}
                                />
                            </div>

                            <div id="divMonth" style={{ display: selectedType === 'byMonth' ? 'block' : 'none' }}>
                                <label htmlFor="inputMonth">Tháng:</label>
                                <input
                                    type="month"
                                    name="inputMonth"
                                    id="inputMonth"
                                    className="form-control"
                                    value={inputMonth}
                                    onChange={(e) => setInputMonth(e.target.value)}
                                />
                            </div>

                            <div id="divYear" style={{ display: selectedType === 'byYear' ? 'block' : 'none' }}>
                                <label htmlFor="inputYear">Năm:</label>
                                <input
                                    type="number"
                                    name="inputYear"
                                    id="inputYear"
                                    min="1900"
                                    max="2099"
                                    className="form-control"
                                    value={inputYear}
                                    onChange={(e) => setInputYear(e.target.value)}
                                />
                            </div>

                            <button onClick={revenueManagement} type="button" id="btnSubmit" className="btn btn-primary mt-2">
                                Thống kê
                            </button>

                            <div id="result" className='mt-4'>
                                Doanh thu: {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
            <ToastContainer />
        </div>
    )
}

export default ManageRevenue
