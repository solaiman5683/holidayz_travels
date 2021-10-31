import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import OrderStatus from './OrderStatus';

const MyOrders = () => {
	const [orders, setOrders] = useState();
	const { user } = useAuth();

	useEffect(() => {
		const unsubscribe = axios
			.get(`https://holidayz-travel.herokuapp.com/my-bookings?user=${user.uid}`)
			.then(res => setOrders(res.data));
		return unsubscribe;
	}, [user]);
	return <OrderStatus orders={orders} />;
};

export default MyOrders;
