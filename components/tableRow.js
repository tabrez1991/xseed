import React from 'react'

const TableRow = (props) => {
	const { data, circles, handleChecked, handleCirlces, handleCustomer, handleProject } = props;
	return (
		<tr>
			<td>
				<input type="checkbox" onChange={(e) => handleChecked(data.id, e)} />
			</td>
			<td>{data.id}</td>
			<td>
				<select
					value={data.circle}
					onChange={(e) => handleCirlces(data.id, e.target.value)}
				>
					<option>select cirlce</option>
					{circles.map(item => <option key={item} value={item}>{item}</option>)}
				</select>
			</td>
			<td>
				<select
					value={data.customer}
					onChange={(e) => handleCustomer(data.id, e.target.value)}
				>
					<option>select customer</option>
					{data.tempCustomer.map(item => <option key={item} value={item}>{item}</option>)}
				</select>
			</td>
			<td>
				<select
					value={data.project}
					onChange={(e) => handleProject(data.id, e.target.value)}
				>
					<option>select project</option>
					{data.tempProject.map(item => <option key={item} value={item}>{item}</option>)}
				</select>
			</td>
			<td>
				<input type="date" />
			</td>
			<td>
				<input type="text" />
			</td>
			<td>
				<input type="text" />
			</td>
		</tr>
	)
}

export default TableRow;