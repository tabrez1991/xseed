import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TableRow from "../components/tableRow";
import React from 'react';

const Home: NextPage = () => {
  const details = [
    { 'circle': 'andhra', 'customer': 'reliance', 'project': 'abc', 'category': '1', 'sow': 'abcd', 'team': '123', 'resource': '1234', 'vendor': '12345' },
    { 'circle': 'telangana', 'customer': 'airtel', 'project': 'xyz', 'category': '2', 'sow': 'efgh', 'team': '456', 'resource': '5678', 'vendor': '67891' },
    { 'circle': 'karnataka', 'customer': 'jio', 'project': 'lmn', 'category': '3', 'sow': 'ijkl', 'team': '789', 'resource': '9101', 'vendor': '01112' },
    { 'circle': 'tamilnadu', 'customer': 'vodafone', 'project': 'uvw', 'category': '4', 'sow': 'mnop', 'team': '101', 'resource': '1121', 'vendor': '13141' },
    { 'circle': 'maharashtra', 'customer': 'reliance', 'project': 'rst', 'category': '5', 'sow': 'qrst', 'team': '112', 'resource': '3141', 'vendor': '51617' },
    { 'circle': 'gujarat', 'customer': 'airtel', 'project': 'pqr', 'category': '6', 'sow': 'uvwx', 'team': '131', 'resource': '5161', 'vendor': '18192' },
    { 'circle': 'kerala', 'customer': 'jio', 'project': 'ghi', 'category': '7', 'sow': 'yzqb', 'team': '415', 'resource': '7181', 'vendor': '021222' },
    { 'circle': 'delhi', 'customer': 'vodafone', 'project': 'jkl', 'category': '8', 'sow': 'cdef', 'team': '161', 'resource': '9202', 'vendor': '32425' },
    { 'circle': 'rajasthan', 'customer': 'reliance', 'project': 'opq', 'category': '9', 'sow': 'ghij', 'team': '718', 'resource': '1222', 'vendor': '26272' },
    { 'circle': 'punjab', 'customer': 'airtel', 'project': 'def', 'category': '10', 'sow': 'klmn', 'team': '192', 'resource': '3242', 'vendor': '829230' },
    { 'circle': 'haryana', 'customer': 'jio', 'project': 'abc', 'category': '1', 'sow': 'opqr', 'team': '202', 'resource': '5262', 'vendor': '31323' },
    { 'circle': 'uttarpradesh', 'customer': 'vodafone', 'project': 'ghi', 'category': '2', 'sow': 'stuv', 'team': '122', 'resource': '7282', 'vendor': '34353' },
    { 'circle': 'madhyapradesh', 'customer': 'reliance', 'project': 'jkl', 'category': '3', 'sow': 'wxyz', 'team': '232', 'resource': '9303', 'vendor': '63738' },
    { 'circle': 'chattisgarh', 'customer': 'airtel', 'project': 'rst', 'category': '4', 'sow': 'abcd', 'team': '425', 'resource': '1323', 'vendor': '94041' },
    { 'circle': 'bihar', 'customer': 'jio', 'project': 'lmn', 'category': '5', 'sow': 'efgh', 'team': '262', 'resource': '3343', 'vendor': '42434' },
    { 'circle': 'westbengal', 'customer': 'vodafone', 'project': 'opq', 'category': '6', 'sow': 'ijkl', 'team': '728', 'resource': '5363', 'vendor': '546474' },
    { 'circle': 'odisha', 'customer': 'reliance', 'project': 'uvw', 'category': '7', 'sow': 'mnop', 'team': '293', 'resource': '7383', 'vendor': '84950' },
    { 'circle': 'delhi', 'customer': 'airtel', 'project': 'def', 'category': '8', 'sow': 'qrst', 'team': '031', 'resource': '9404', 'vendor': '51525' },
    { 'circle': 'arunachal', 'customer': 'jio', 'project': 'pqr', 'category': '9', 'sow': 'uvwx', 'team': '323', 'resource': '1424', 'vendor': '35455' },
    { 'circle': 'sikkim', 'customer': 'vodafone', 'project': 'abc', 'category': '10', 'sow': 'yzab', 'team': '334', 'resource': '3444', 'vendor': '56575' },
    { 'circle': 'manipur', 'customer': 'reliance', 'project': 'ghi', 'category': '1', 'sow': 'cdef', 'team': '353', 'resource': '5464', 'vendor': '85960' },
    { 'circle': 'meghalaya', 'customer': 'airtel', 'project': 'jkl', 'category': '2', 'sow': 'ghij', 'team': '637', 'resource': '7484', 'vendor': '61626' },
    { 'circle': 'mizoram', 'customer': 'jio', 'project': 'uvw', 'category': '3', 'sow': 'klmn', 'team': '382', 'resource': '9505', 'vendor': '36465' },
    { 'circle': 'delhi', 'customer': 'vodafone', 'project': 'opq', 'category': '4', 'sow': 'opqr', 'team': '940', 'resource': '1525', 'vendor': '66676' },
    { 'circle': 'tripura', 'customer': 'reliance', 'project': 'rst', 'category': '5', 'sow': 'stuv', 'team': '414', 'resource': '3545', 'vendor': '86970' },
    { 'circle': 'jammu', 'customer': 'airtel', 'project': 'lmn', 'category': '6', 'sow': 'wxyz', 'team': '243', 'resource': '5565', 'vendor': '71727' },
    { 'circle': 'kashmir', 'customer': 'jio', 'project': 'ghi', 'category': '7', 'sow': 'abcd', 'team': '444', 'resource': '7585', 'vendor': '74757' },
    { 'circle': 'himachal', 'customer': 'vodafone', 'project': 'abc', 'category': '7', 'sow': 'efgh', 'team': '546', 'resource': '9606', 'vendor': '677787' },
    { 'circle': 'delhi', 'customer': 'reliance', 'project': 'jkl', 'category': '8', 'sow': 'ijkl', 'team': '474', 'resource': '1626', 'vendor': '980818' },
    { 'circle': 'goa', 'customer': 'airtel', 'project': 'pqr', 'category': '9', 'sow': 'mnop', 'team': '849', 'resource': '6465', 'vendor': '28384' },
    { 'circle': 'pondicherry', 'customer': 'jio', 'project': 'uvw', 'category': '10', 'sow': 'qrst', 'team': '505', 'resource': '6667', 'vendor': '858687' },
    { 'circle': 'lakshadweep', 'customer': 'vodafone', 'project': 'def', 'category': '1', 'sow': 'uvwx', 'team': '152', 'resource': '6869', 'vendor': '888990' },
    { 'circle': 'andaman', 'customer': 'reliance', 'project': 'opq', 'category': '2', 'sow': 'yzab', 'team': '535', 'resource': '7071', 'vendor': '919293' },
    { 'circle': 'nicobar', 'customer': 'airtel', 'project': 'ghi', 'category': '3', 'sow': 'cdef', 'team': '455', 'resource': '7273', 'vendor': '949596' },
    { 'circle': 'daman', 'customer': 'jio', 'project': 'jkl', 'category': '4', 'sow': 'ghij', 'team': '565', 'resource': '7475', 'vendor': '979899' },
    { 'circle': 'diu', 'customer': 'vodafone', 'project': 'lmn', 'category': '5', 'sow': 'klmn', 'team': '758', 'resource': '7677', 'vendor': '100101' },
    { 'circle': 'delhi', 'customer': 'reliance', 'project': 'pqr', 'category': '6', 'sow': 'opqr', 'team': '596', 'resource': '7879', 'vendor': '101102' },
    { 'circle': 'nagarhaveli', 'customer': 'airtel', 'project': 'uvw', 'category': '7', 'sow': 'stuv', 'team': '061', 'resource': '8081', 'vendor': '103014' },
    { 'circle': 'delhi', 'customer': 'jio', 'project': 'def', 'category': '8', 'sow': 'wxyz', 'team': '626', 'resource': '8283', 'vendor': '105016' },
  ]

  const [circles, setCircles] = React.useState<string[]>([]);
  const [category, setCategory] = React.useState<string[]>([]);
  const [resource, setResource] = React.useState<string[]>([]);
  const [vendor, setVendor] = React.useState<string[]>([]);
  const [submitData, setSubmitData] = React.useState<any[]>([]);
  const [data, setData] = React.useState([
    {
      id: 1,
      isChecked: false,
      circle: "",
      customer: "",
      project: "",
      siteId: "",
      siteName: "",
      category: "",
      sow: "",
      team: "",
      resource: "",
      vendor: "",
      tempCustomer: [],
      tempProject: [],
      tempSOW: [],
      tempTeam: [],
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
      siteId: "",
      siteName: "",
      category: "",
      sow: "",
      team: "",
      resource: "",
      vendor: "",
      tempCustomer: [],
      tempProject: [],
      tempSOW: [],
      tempTeam: [],
    })
    setData(tempData)
  }

  const handleDelete = () => {
    const deleteRow = data.filter(item => !item.isChecked);
    setData(deleteRow)
    setSubmitData(deleteRow)
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
    setSubmitData(filteredData)

  }

  const handleCirlces = (id: number, value: string) => {
    const tempData = [...data];
    tempData.forEach(element => {
      if (element.id === id) {
        element.circle = value
        element.tempCustomer = getUniqueValues(details.filter(item => (item.circle === value)).map(item => item.customer)) as never[];
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

  const handleCategory = (id: number, value: string) => {
    const tempData = [...data];
    let sowdupli = [];
    tempData.forEach(element => {
      if (element.id === id) {
        element.category = value
        const tempSOW = getUniqueValues(details.filter(item => (item.category === value)).map(item => item.sow)) as never[]
        const alreadySOW = tempData.map(item => item.sow)
        sowdupli = tempSOW.filter(item => !alreadySOW.includes(item));
        element.tempSOW = sowdupli
      }
    });
    setData(tempData);
  }

  const handleSOW = (id: number, value: string) => {
    const tempData = [...data];
    tempData.forEach(element => {
      if (element.id === id) {
        element.sow = value
        const tempTeam = getUniqueValues(details.filter(item => (item.sow === value)).map(item => item.team)) as never[]
        const alreadyTeam = tempData.map(item => item.team)
        element.tempTeam = tempTeam.filter(item => !alreadyTeam.includes(item));
      }
    });
    setData(tempData);
  }

  const handleTeam = (id: number, value: string) => {
    const tempData = [...data];
    tempData.forEach(element => {
      if (element.id === id) {
        element.team = value
      }
    });
    setData(tempData);
  }

  const handleResource = (id: number, value: string) => {
    const tempData = [...data];
    tempData.forEach(element => {
      if (element.id === id) {
        element.resource = value
      }
    });
    setData(tempData);
  }

  const handleVendor = (id: number, value: string) => {
    const tempData = [...data];
    tempData.forEach(element => {
      if (element.id === id) {
        element.vendor = value
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
    const distinctCategory = getUniqueValues(details.map(item => item.category));
    const distinctResource = getUniqueValues(details.map(item => item.resource));
    const distinctVendor = getUniqueValues(details.map(item => item.vendor));
    setCircles(distinctCircles);
    setCategory(distinctCategory);
    setResource(distinctResource);
    setVendor(distinctVendor);
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
              <th>Site Id</th>
              <th>Site Name</th>
              <th>Category</th>
              <th>SOW</th>
              <th>Team</th>
              <th>Resource</th>
              <th>Vendor</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => <TableRow
              data={item}
              key={item.id}
              circles={circles}
              category={category}
              resource={resource}
              vendor={vendor}
              handleChecked={handleChecked}
              handleCirlces={handleCirlces}
              handleCustomer={handleCustomer}
              handleProject={handleProject}
              handleCategory={handleCategory}
              handleSOW={handleSOW}
              handleTeam={handleTeam}
              handleResource={handleResource}
              handleVendor={handleVendor} />)}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: "10px", display: "flex" }}>
        {submitData.map(item => (
          <div key={item.id} style={{ marginTop: "10px", marginRight: "10px", border: "1px solid", width: "fit-content", padding: "0px 20px" }}>
            <p>Circle : {item.circle}</p>
            <p>Customer : {item.customer}</p>
            <p>Project : {item.project}</p>
            <p>Site Id : {item.siteId}</p>
            <p>Site Name : {item.siteName}</p>
            <p>Category : {item.category}</p>
            <p>SOW : {item.sow}</p>
            <p>Team : {item.team}</p>
            <p>Resource : {item.resource}</p>
            <p>Vendor : {item.vendor}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
