import React, { Component } from 'react';
import { addTodo } from '../apis/todos';
import { Input } from 'antd';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

class ToDoGenerator extends Component {

    onAddToDoItem = (event) => {
        event.preventDefault();
        const text = event.target.toDoInput.value
        addTodo(text).then(response => {
            this.props.addToDoItem(response.data);
            event.target.toDoInput.value = "";
        });
    }

    render() {
        return (
            <div >
                <form onSubmit={this.onAddToDoItem} >
                    <section >
                        <Input  placeholder="input todo here..."  type="text" name="toDoInput" allowClear />
                        <Button htmlType="submit" id="toDoSubmit" shape="circle" icon={<PlusOutlined />} size='large' />
                    </section>
                </form>
            </div>
        );
    }
}

export default ToDoGenerator;