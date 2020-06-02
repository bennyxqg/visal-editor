import React, { Component } from 'react';
import { Modal, Icon } from 'antd';
import './index.less';

class BaseModule extends Component {

    edit_style = {
        position: 'absolute',
        border: '1px dashed black',
        padding: '0.5rem 1rem',
        cursor: 'move',
    }

    constructor(props) {
        super(props);
        this.state = {
            show_edit_style: false,             //是否显示编辑样式
            editorModalVisible: false,            //是否显示编辑弹框
            edit_style: {
                // position: 'absolute',
                border: '0.5px dashed black',
                // padding: '0.5rem 1rem',
                cursor: 'move',
            }
        }
    }

    mouseOverHandle = () => {
        this.setState({
            edit_style: {
                // position: 'absolute',
                border: '0.5px dashed black',
                // padding: '0.5rem 1rem',
                cursor: 'move'
            },
        });
    }

    mouseOutHandle = () => {
        this.setState({ edit_style: {} });
        this.edit_style = {};
    }


    /**
     * 移除组件
     */
    removeComponent = () => {
        const { item } = this.props;
        console.log(item);
        this.props.removeComponent(item.uuid);
    };

    showEditorModal = () => {
        this.setState({
            editorModalVisible: true,
        });
    };
    hideEditorModal = () => {
        this.setState({
            editorModalVisible: false,
        });
    };

    // EditModal = (
    //     <Modal
    //         title="组件编辑"
    //         visible={this.state.editorModalVisible}
    //         onOk={this.hideEditorModal}
    //         onCancel={this.hideEditorModal}
    //         footer={null}
    //     >
    //         {}
    //     </Modal>
    // );


    render() {

        return (
            <div></div>
        );
    }
}

export default BaseModule;
