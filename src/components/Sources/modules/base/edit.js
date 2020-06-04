import React, { Component } from 'react';
import './edit.css';
import { Icon } from 'antd';

class EditPanel extends Component {

    constructor(props) {
        super(props);
        console.log('props ',props);
        this.state = {
        }
    }

    render() {
        return (
            
            <div class="idfe-edit" style={this.props.editState?{display:'block'}:{display:'none'}}>
                <ul>
                    <li>
                        123
                        <a onClick={this.props.editComponent}>
                            <Icon type='edit' />
                        </a>
                    </li>
                    <li>
                        <a onClick={this.props.removeComponent}>
                            <Icon type='delete' />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default EditPanel;
