import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OrdersTable = ({ orders }) => {
	const [packages, setPackages] = useState();
	useEffect(() => {
		const unsubscribe = axios('http://localhost:5000/events').then(res =>
			setPackages(res.data)
		);
		return unsubscribe;
	}, []);
	const handleApprove = product => {
		const updated = { status: 'approved' };
		console.log(updated);
		axios
			.put(`http://localhost:5000/bookings/${product._id}`, updated)
			.then(res => console.log(res.data));
	};
	return (
		<div className='table-responsive'>
			<h1 className='text-center pb-5'>All Bookings</h1>
			<table className='table table-striped table-sm'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Destination</th>
						<th scope='col'>Customer Name</th>
						<th scope='col'>Address</th>
						<th scope='col'>Person</th>
						<th scope='col'>Action</th>
					</tr>
				</thead>
				<tbody>
					{orders?.map((pg, i) => (
						<tr key={pg._id}>
							<td className='py-3'>{'1,00' + (i + 1)}</td>
							<td className='py-3'>
								{packages?.map(p => p._id === pg.packages && p.name)}
							</td>
							<td className='py-3'>{pg.name}</td>
							<td className='py-3'>{pg.address}</td>
							<td className='py-3'>{pg.quantity}</td>

							<td className='py-3'>
								<span
									className={`btn ${
										pg.status === 'pending' ? 'btn-danger' : 'btn-primary'
									}`}
									onClick={() => handleApprove(pg)}>
									{pg.status === 'pending' ? 'Approve' : 'Approved'}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default OrdersTable;
