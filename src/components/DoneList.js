import React, { Component } from 'react';
import { Table } from 'antd';

class DoneList extends Component {
    render() {
        const columns = [
            {
                title: 'Done List',
                dataIndex: 'text',
                key: 'id',
                render: text => <b>{text}</b>,
            },
            {
                title: 'Create Date',
                dataIndex: 'createdAt',
                key: 'id',
                render: text => <b>{text}</b>,
            }];

        return (
            <div >
                    <Table  id="done" dataSource={this.props.doneItems} 
                    columns={columns} />
            </div>
        );
    }
}

export default DoneList;