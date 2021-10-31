import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Table = ({ packages, editId }) => {
	const [data, setData] = useState();
	useEffect(() => {
		setData(packages);
	}, [packages]);
	const handleDelete = id => {
		const check = window.confirm('Are you sure you want to delete?');
		console.log('check');
		if (check) {
			axios
				.delete(`https://holidayz-travel.herokuapp.com/events/${id}`)
				.then(res => {
					if (res.data.acknowledged) {
						alert('Items Deleted Successfully!');
						const newData = data.filter(d => d._id !== id);
						setData(newData);
					}
				});
		}
	};
	return (
		<div className='table-responsive'>
			<table className='table table-striped table-sm'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Destination</th>
						<th scope='col'>Country</th>
						<th scope='col'>Tour Date</th>
						<th scope='col'>Price</th>
						<th scope='col'>Action</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((pg, i) => (
						<tr key={pg._id}>
							<td className='py-3'>{'1,00' + (i + 1)}</td>
							<td className='py-3'>
								<Link
									className='text-dark text-decoration-none'
									to={`/tours/${pg._id}`}>
									{pg.name}
								</Link>
							</td>
							<td className='py-3'>{pg.country}</td>
							<td className='py-3'>{pg.time}</td>
							<td className='py-3'>${pg.price}</td>
							<td className='py-3'>
								{pg?._id && (
									<Link to={`/edit-packages/${pg?._id}`}>
										<i className='btn shadow-none fad fa-edit px-2 py-0'></i>
									</Link>
								)}
								<span onClick={() => handleDelete(pg._id)}>
									<i className='btn shadow-none fad fa-trash-alt px-2 py-0'></i>
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
