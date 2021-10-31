import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrdersTable from './OrdersTable';

const ManageOrders = () => {
	const [orders, setOrders] = useState();

	useEffect(() => {
		const unsubscribe = axios
			.get('http://localhost:5000/bookings')
			.then(res => setOrders(res.data));
		return unsubscribe;
	}, []);
	return <OrdersTable orders={orders} />;
};

export default ManageOrders;
