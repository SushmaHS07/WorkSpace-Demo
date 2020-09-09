import React, { Component } from 'react';
import '../css/content.css';
import { Layout } from 'antd';
import { PlusCircleOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';
import { Table, Button, Popconfirm, Avatar, Select } from 'antd';

const { Option } = Select;
const { Content } = Layout;

 

 class Container extends Component {
    constructor(props) {
        super(props);
        this.columns = [
          {
            title: 'Things to do',
            dataIndex: 'todo',
            width: '30%',
            fixed: 'left',
          },
          {
            title: 'Owner',
            dataIndex: 'owner',
            width: '5%',
          },
          {
            title: 'Status',
            dataIndex: 'status',
            editable: true,
          },
          {
            title: 'Due Date',
            dataIndex: 'date',
          },
          {
            title: 'Priority',
            dataIndex: 'priority',
            editable: true
          },{
              title: <PlusCircleOutlined className="icon-plus" />,
              dataIndex: '',
              width: '5%',
              render: (text, record) => {
                    console.log(text, record);
              }, 
          },
          {
              title: '',
              dataIndex:'delete',
              width: '5%',
              render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                      <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                        <DeleteOutlined className="delete-icon" />
                      </Popconfirm>
               ) : null,
          }
        ];
    
        this.state = {
          dataSource: [
            {
              key: '0',
              todo: 'New item1',
              owner: <Avatar size="large" icon={<UserOutlined />} />,
              status: this.statusMenu(),
              date: 'Aug 10',
              priority: this.prioritySelect()
            },
            {
                key: '1',
                todo: 'New item2',
                owner: <Avatar size="large" icon={<UserOutlined />} />,
                status: this.statusMenu(),
                date: 'Aug 10',
                priority: this.prioritySelect()
            },
            {
                key: '2',
                todo: 'New item3',
                owner: <Avatar size="large" icon={<UserOutlined />} />,
                status: this.statusMenu(),
                date: 'Aug 10',
                priority: this.prioritySelect()
            },
          ],
          count: 3,
        };
      }

    statusMenu = () => (
        <Select defaultValue="workingOnit"  bordered={false}>
          <Option value="workingOnit">Working on it</Option>
          <Option value="stuck">Stuck</Option>
          <Option value="waitingforreview">Waiting for review</Option>
          <Option value="done">Done</Option>
        </Select>
    )

    prioritySelect = () => (
        <Select defaultValue="urgent"  bordered={false}>
          <Option value="urgent">Urgent</Option>
          <Option value="high">High</Option>
          <Option value="medium">Medium</Option>
          <Option value="low">Low</Option>
        </Select>
    )
    
      handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
      };
    
      handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
                key: count,
                todo: '',
                owner: '',
                status: '',
                date: '',
                priority: ''
        };
        this.setState({
          dataSource: [...dataSource, newData],
          count: count + 1,
        });
      };
    
      handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ dataSource: newData });
      };

     render() {
        const { dataSource } = this.state;

        const columns = this.columns.map(col => {
          if (!col.editable) {
            return col;
          }return {
            ...col,
            onCell: record => ({
              record,
              editable: col.editable,
              dataIndex: col.dataIndex,
              title: col.title,
              handleSave: this.handleSave,
            }),
          };
        });
        return ( 
            <Content className="container">
                <div>
                    <Table
                        rowClassName={() => 'editable-row'}
                        bordered
                        dataSource={dataSource}
                        columns={columns}
                    />
                     <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                        Add a row
                    </Button>
                </div>
            </Content>
        );
    }
}

export default Container; 


// const products = [ {
//     key:'1',
//     todo: "new item",
//     owner: "icon",
//     status: "Working on it",
//     date: "Apr 20",
//     priority: "Urgent",
// }, {
//     key:'2',
//     todo: "new item2",
//     owner: "icon",
//     status: "Working on it",
//     date: "Apr 20",
//     priority: "Urgent",
// } ];

// const columns = [{
//     dataField: 'todo',
//     text: 'Things to do'
// }, {
//     dataField: 'owner',
//     text: 'Owner'
// }, {
//     dataField: 'status',
//     text: 'Status'
// },{
//     dataField: 'date',
//     text: 'Due date'
// },{
//     dataField: 'priority',
//     text: 'Priority'
// },{
//     dataField: 'icon',
//     text: ''
// }];