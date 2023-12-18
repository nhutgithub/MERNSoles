const OrderItem = require('../models/orderItemModel');

exports.getRevenue = async (req, res) => {
    const data = req.body;

    if (data) {
        try {
            if (data.date) {
                const date = new Date(data.date);
                const year = date.getFullYear();
                const month = date.getMonth() + 1; // Tháng trong JavaScript là 0-indexed, nên cần cộng thêm 1
            
                const revenue = await OrderItem.aggregate([
                    {
                        $lookup: {
                            from: 'orders',
                            localField: 'order_id',
                            foreignField: '_id',
                            as: 'order'
                        }
                    },
                    {
                        $unwind: '$order'
                    },
                    {
                        $match: {
                            'order.order_date': { $exists: true },
                            $expr: {
                                $and: [
                                    { $eq: [{ $year: { $toDate: '$order.order_date' } }, year] },
                                    { $eq: [{ $month: { $toDate: '$order.order_date' } }, month] },
                                    { $eq: [{ $dayOfMonth: { $toDate: '$order.order_date' } }, date.getDate()] }
                                ]
                            }
                        }
                    },
                    {
                        $group: {
                            _id: null,
                            total: { $sum: '$order.total_price' }
                        }
                    }
                ]);
                if (revenue.length === 0) {
                    return res.json({ revenue: 0 + ' đồng' });;
                }
                const formattedData = new Intl.NumberFormat('vi-VN').format(revenue[0].total) + ' đồng';
                res.json({ revenue: formattedData });
            } else if (data.month && data.year) {
                const year = parseInt(data.year);
                const month = parseInt(data.month);
            
                const revenue = await OrderItem.aggregate([
                    {
                        $lookup: {
                            from: 'orders',
                            localField: 'order_id',
                            foreignField: '_id',
                            as: 'order'
                        }
                    },
                    {
                        $unwind: '$order'
                    },
                    {
                        $match: {
                            'order.order_date': { $exists: true },
                            $expr: {
                                $and: [
                                    { $eq: [{ $year: { $toDate: '$order.order_date' } }, year] },
                                    { $eq: [{ $month: { $toDate: '$order.order_date' } }, month] }
                                ]
                            }
                        }
                    },
                    {
                        $group: {
                            _id: null,
                            total: { $sum: '$order.total_price' }
                        }
                    }
                ]);
            
                if (revenue.length === 0) {
                    return res.json({ revenue: 0 + ' đồng' });;
                }
                const formattedData = new Intl.NumberFormat('vi-VN').format(revenue[0].total) + ' đồng';
                res.json({ revenue: formattedData });
            }
             else if (data.year) {
                const year = parseInt(data.year);

                const revenue = await OrderItem.aggregate([
                    {
                        $lookup: {
                            from: 'orders',
                            localField: 'order_id',
                            foreignField: '_id',
                            as: 'order'
                        }
                    },
                    {
                        $unwind: '$order'
                    },
                    {
                        $match: {
                            'order.order_date': { $exists: true },
                            $expr: {
                                $eq: [
                                    { $year: { $toDate: '$order.order_date' } },
                                    year
                                ]
                            }
                        }
                    },
                    {
                        $group: {
                            _id: null,
                            total: { $sum: '$order.total_price' }
                        }
                    }
                ]);
                
                if (revenue.length === 0) {
                    return res.json({ revenue: 0 + ' đồng' });;
                }
                const formattedData = new Intl.NumberFormat('vi-VN').format(revenue[0].total) + ' đồng';
                res.json({ revenue: formattedData });
            }


        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Lỗi server.' });
        }
    } else {
        res.status(400).json({ error: 'Không có dữ liệu hoặc dữ liệu không hợp lệ.' });
    }
};
