import React, { Component } from 'react';
import DoneListContainer from '../containers/DoneListContainer';
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
            <div>
                <ul>
                    <Table dataSource={this.props.doneItems} columns={columns} />
                </ul>
            </div>
        );
    }
}

export default DoneList;