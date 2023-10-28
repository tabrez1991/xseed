import React from 'react'

const TableRow = (props) => {
	const { data, circles, category, resource, vendor, handleChecked, handleCirlces, handleCustomer, handleProject, handleCategory, handleSOW, handleTeam, handleResource, handleVendor } = props;
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
				<input type="text" />
			</td>
			<td>
				<input type="text" />
			</td>
			<td>
				<select
					value={data.category}
					onChange={(e) => handleCategory(data.id, e.target.value)}
				>
					<option>select category</option>
					{category.map(item => <option key={item} value={item}>{item}</option>)}
				</select>
			</td>
			<td>
				<select
					value={data.sow}
					onChange={(e) => handleSOW(data.id, e.target.value)}
				>
					<option>select sow</option>
					{data.tempSOW.map(item => <option key={item} value={item}>{item}</option>)}
				</select>
			</td>
			<td>
				<select
					value={data.team}
					onChange={(e) => handleTeam(data.id, e.target.value)}
				>
					<option>select team</option>
					{data.tempTeam.map(item => <option key={item} value={item}>{item}</option>)}
				</select>
			</td>
			<td>
				<select
					value={data.resource}
					onChange={(e) => handleResource(data.id, e.target.value)}
				>
					<option>select resource</option>
					{resource.map(item => <option key={item} value={item}>{item}</option>)}
				</select>
			</td>
			<td>
				<select
					value={data.vendor}
					onChange={(e) => handleVendor(data.id, e.target.value)}
				>
					<option>select vendor</option>
					{vendor.map(item => <option key={item} value={item}>{item}</option>)}
				</select>
			</td>
		</tr>
	)
}

export default TableRow;