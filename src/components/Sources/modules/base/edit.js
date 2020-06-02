import React, { Component } from 'react';
import './edit.css';
import {
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';

class EditPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (

            <ul class="idfe-edit">
                <li class="idfe-edit-btn">
                    <a onClick={this.props.editComponent}>
                        <EditOutlined />
                    </a>
                </li>
                <li class="idfe-edit-btn">
                    <a onClick={this.props.removeComponent}>
                        <DeleteOutlined />
                    </a>
                </li>
            </ul>
        );
    }
}

export default EditPanel;
