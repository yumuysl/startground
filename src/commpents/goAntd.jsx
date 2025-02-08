import { Tabs, Table } from "antd";
import { useState, useEffect } from "react";

const tabList = [
  {
    key: '1',
    label: `表格`,
  },{
    key: 2,
    label: '菜单导航'
  },
  {
    key: 3,
    label: '其他'
  }
]

const fetchData = async () => {
  let url = 'https://mock.presstime.cn/mock/6543bda1bc028bb72815dbd2/endmock/getTableData';
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('网络响应不正常');
    }
    const data = await res.json(); // 解析响应体
    console.log("获取表格数据成功：", data);
    setTableSource(data); // 假设data是你想要的表格数据
  } catch (err) {
    console.log("获取表格数据失败：", err);
  }
};


const tableColumns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]

const styleObj = {
  content: {
    pidding: 20,
  },
  tabgroup: {
    marginLeft: 20,
  }
}

const changeTab = (key)=>{
  console.log("标签：",key) 
}

function GoAntd(){
  const [tableSource, setTableSource] = useState(0);
  // 在组件挂载时调用fetchData
  // useEffect(() => {
  //   fetchData();
  // }, []);
  function handleClick(){
    setTableSource(5)
  }
  
  useEffect(() => {
    console.log("useeffect中打印tableSource:", tableSource)
  }, [tableSource])
  return (
    <>
      <div className={styleObj.content}>
        <div>
          <Tabs defaultActiveKey="1" items={ tabList } size="large" style={styleObj.tabgroup} onChange={changeTab} />
        </div>
        <div> 
          {/* <Table columns={ tableColumns } dataSource={ tableSource } /> */}
        </div>
        <button onClick={handleClick}>获取表格数据</button>
      </div>
    </>
  );
}

export default GoAntd;