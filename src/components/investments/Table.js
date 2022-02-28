import React from 'react';
import _ from 'lodash';
export const Table = ({ allInvestments }) => {
	return (
		<table className='table table-hover table-striped mt-4'>
			<thead className='table-head text-white'>
				<tr>
					<th scope='col'>S/No</th>
					<th scope='col'>Symbol</th>
					<th scope='col'>Qty</th>
					<th scope='col'>Equity Value(₦)</th>
					<th scope='col'>Price Per Share(₦)</th>
				</tr>
			</thead>
			<tbody>
				{_?.map(
					allInvestments,
					({
						symbol,
						totalQuantity,
						equityValue,
						pricePerShare,
						id,
					}) => (
						<tr key={id}>
							<th scope='row'>{id}</th>
							<td>{symbol}</td>
							<td>{totalQuantity}</td>
							<td>{equityValue}</td>
							<td>{pricePerShare}</td>
						</tr>
					)
				)}
			</tbody>
		</table>
	);
};
