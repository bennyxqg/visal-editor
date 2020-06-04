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
            showEditPanel: false,             //是否显示编辑样式
            editorModalVisible: false,            //是否显示编辑弹框
            edit_style: {
                border: '0.5px dashed black',
                cursor: 'move',
            },
            moduleData:{}
        }
    }

    editModuleHandle = () => {
        console.log('editComponent');
        this.setState({editorModalVisible:true})
    }

    removeModuleHandle = () => {
    }

    editOk=()=>{
        console.log('editOk');
        this.setState({editorModalVisible:false})
    }

    editCancel=()=>{
        console.log('editCancel');
        this.setState({editorModalVisible:false})
    }

    mouseOverHandle = (e) => {
        this.setState({
            showEditPanel: true,
            edit_style: {
                border: '0.5px dashed black',
                cursor: 'move',
            }
        })

    }
    

    mouseOutHandle = (e) => {
        this.setState({
            showEditPanel: false,
            edit_style: {
                
            }
        })
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
