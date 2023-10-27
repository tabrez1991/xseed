import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TableRow from "../components/tableRow";
import React from 'react';

const Home: NextPage = () => {
  const details = [
    { 'circle': 'andhra', 'customer': 'reliance', 'project': 'abc' },
    { 'circle': 'telangana', 'customer': 'airtel', 'project': 'xyz' },
    { 'circle': 'karnataka', 'customer': 'jio', 'project': 'lmn' },
    { 'circle': 'tamilnadu', 'customer': 'vodafone', 'project': 'uvw' },
    { 'circle': 'maharashtra', 'customer': 'reliance', 'project': 'rst' },
    { 'circle': 'gujarat', 'customer': 'airtel', 'project': 'pqr' },
    { 'circle': 'kerala', 'customer': 'jio', 'project': 'ghi' },
    { 'circle': 'delhi', 'customer': 'vodafone', 'project': 'jkl' },
    { 'circle': 'rajasthan', 'customer': 'reliance', 'project': 'opq' },
    { 'circle': 'punjab', 'customer': 'airtel', 'project': 'def' },
    { 'circle': 'haryana', 'customer': 'jio', 'project': 'abc' },
    { 'circle': 'uttarpradesh', 'customer': 'vodafone', 'project': 'ghi' },
    { 'circle': 'madhyapradesh', 'customer': 'reliance', 'project': 'jkl' },
    { 'circle': 'chattisgarh', 'customer': 'airtel', 'project': 'rst' },
    { 'circle': 'bihar', 'customer': 'jio', 'project': 'lmn' },
    { 'circle': 'westbengal', 'customer': 'vodafone', 'project': 'opq' },
    { 'circle': 'odisha', 'customer': 'reliance', 'project': 'uvw' },
    { 'circle': 'assam', 'customer': 'airtel', 'project': 'def' },
    { 'circle': 'arunachal', 'customer': 'jio', 'project': 'pqr' },
    { 'circle': 'sikkim', 'customer': 'vodafone', 'project': 'abc' },
    { 'circle': 'manipur', 'customer': 'reliance', 'project': 'ghi' },
    { 'circle': 'meghalaya', 'customer': 'airtel', 'project': 'jkl' },
    { 'circle': 'mizoram', 'customer': 'jio', 'project': 'uvw' },
    { 'circle': 'nagaland', 'customer': 'vodafone', 'project': 'opq' },
    { 'circle': 'tripura', 'customer': 'reliance', 'project': 'rst' },
    { 'circle': 'jammu', 'customer': 'airtel', 'project': 'lmn' },
    { 'circle': 'kashmir', 'customer': 'jio', 'project': 'ghi' },
    { 'circle': 'himachal', 'customer': 'vodafone', 'project': 'abc' },
    { 'circle': 'uttarakhand', 'customer': 'reliance', 'project': 'jkl' },
    { 'circle': 'goa', 'customer': 'airtel', 'project': 'pqr' },
    { 'circle': 'pondicherry', 'customer': 'jio', 'project': 'uvw' },
    { 'circle': 'lakshadweep', 'customer': 'vodafone', 'project': 'def' },
    { 'circle': 'andaman', 'customer': 'reliance', 'project': 'opq' },
    { 'circle': 'nicobar', 'customer': 'airtel', 'project': 'ghi' },
    { 'circle': 'daman', 'customer': 'jio', 'project': 'jkl' },
    { 'circle': 'diu', 'customer': 'vodafone', 'project': 'lmn' },
    { 'circle': 'dadra', 'customer': 'reliance', 'project': 'pqr' },
    { 'circle': 'nagarhaveli', 'customer': 'airtel', 'project': 'uvw' },
    { 'circle': 'chandigarh', 'customer': 'jio', 'project': 'def' },
    { 'circle': 'delhi', 'customer': 'vodafone', 'project': 'ghi' },
    { 'circle': 'puducherry', 'customer': 'reliance', 'project': 'jkl' },
    { 'circle': 'chandigarh', 'customer': 'airtel', 'project': 'opq' },
    { 'circle': 'delhi', 'customer': 'jio', 'project': 'lmn' },
    { 'circle': 'puducherry', 'customer': 'vodafone', 'project': 'rst' },
    { 'circle': 'chandigarh', 'customer': 'reliance', 'project': 'pqr' },
    { 'circle': 'delhi', 'customer': 'airtel', 'project': 'ghi' },
    { 'circle': 'puducherry', 'customer': 'jio', 'project': 'jkl' },
    { 'circle': 'chandigarh', 'customer': 'vodafone', 'project': 'uvw' },
    { 'circle': 'delhi', 'customer': 'reliance', 'project': 'def' },
    { 'circle': 'puducherry', 'customer': 'airtel', 'project': 'abc' }
  ]

  const [circles, setCircles] = React.useState<string[]>([]);
  const [customer, setCustomer] = React.useState([]);
  const [data, setData] = React.useState([
    {
      id: 1,
      isChecked: false,
      circle: "",
      customer: "",
      project: "",
      date: "",
      dnp: "",
      tax: "",
      tempCustomer: [],
      tempProject: []
    }
  ]);

  const handleAddMore = () => {
    const tempData = [...data];
    tempData.push({
      id: tempData.length + 1,
      isChecked: false,
      circle: "",
      customer: "",
      project: "",
      date: "",
      dnp: "",
      tax: "",
      tempCustomer: [],
      tempProject: []
    })
    setData(tempData)
  }

  const handleDelete = () => {
    const deleteRow = data.filter(item => !item.isChecked);
    setData(deleteRow)
  }

  const handleChecked = (id: number, e: { target: { checked: boolean; }; }) => {
    const tempData = [...data];
    tempData.forEach(element => {
      if (element.id === id) {
        element.isChecked = e.target.checked
      }
    });
    setData(tempData);
  }

  const handleSubmit = () => {
    const filteredData = data.filter(item => item.circle).map(({ tempCustomer, tempProject, ...rest }) => rest);
    console.log(filteredData);

  }

  const handleCirlces = (id: number, value: string) => {
    const tempData = [...data];
    tempData.forEach(element => {
      if (element.id === id) {
        element.circle = value
        element.tempCustomer = getUniqueValues(details.filter(item => (item.circle === value)).map(item=> item.customer)) as never[];
      }
    });
    setData(tempData);
  }

  const handleCustomer = (id: number, value: string) => {
    const tempData = [...data];
    tempData.forEach(element => {
      if (element.id === id) {
        element.customer = value
        element.tempProject = getUniqueValues(details.filter(item => (item.customer === value)).map(item => item.project)) as never[]
      }
    });
    setData(tempData);
  }

  const handleProject = (id: number, value: string) => {
    const tempData = [...data];
    tempData.forEach(element => {
      if (element.id === id) {
        element.project = value
      }
    });
    setData(tempData);
  }

  function getUniqueValues(arr: string[]) {
    const uniqueValues: any[] = [];
  
    for (const item of arr) {
      if (!uniqueValues.includes(item)) {
        uniqueValues.push(item);
      }
    }
  
    return uniqueValues;
  }

  React.useEffect(() => {
    const distinctCircles = getUniqueValues(details.map(item => item.circle));
    setCircles(distinctCircles);
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <button style={{ marginRight: "10px" }} onClick={handleSubmit}>Submit</button>
        <button style={{ marginRight: "10px" }} onClick={handleDelete}>Delete</button>
        <button onClick={handleAddMore}>Add More POIs</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <table>
          <thead>
            <tr>
              <th>Check</th>
              <th>S.No</th>
              <th>Circle</th>
              <th>Customer</th>
              <th>Project</th>
              <th>Date</th>
              <th>DNP</th>
              <th>Tax Slab</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => <TableRow
              data={item}
              key={item.id}
              circles={circles}
              handleChecked={handleChecked}
              handleCirlces={handleCirlces}
              handleCustomer={handleCustomer}
              handleProject={handleProject} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
