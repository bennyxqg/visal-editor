import React, { Component } from 'react';
import BaseModule from '../base'
import EditPanel from '../base/edit'
import './index.css';
import { Modal, Button, Form, Input, Radio } from 'antd';


const NavListItem = (item_data) => (
    <Form
        name="customized_form_controls"
        layout="inline"
        fields={item_data}
    >
        <Form.Item
            name="名称"
            label="label"

        >
            <Input style={{ width: '100px' }} />
        </Form.Item>
        <Form.Item
            label="链接地址"
            name="url"
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="新页面打开"
            name="target"
        >
            <Radio.Group name="target" defaultValue={1}>
                <Radio value={1}>是</Radio>
                <Radio value={2}>否</Radio>
            </Radio.Group>
        </Form.Item>
        <Form.Item

        >
            <Button type="primary">删除</Button>
        </Form.Item>
    </Form>
);


class Nav extends BaseModule {
    // state = this.state

    // constructor(props) {
    //     super(props);
    //     // console.log('this.state.moduleData Nav ', this.state);
    // }

    componentWillMount() {
        this.setState({
            moduleData: {
                navList: [
                    { 'id': 1, 'label': '首页', 'url': 'http://baidu.com', 'target': "" },
                    { 'id': 2, 'label': '动物情报', 'url': 'http://baidu.com', 'target': "" },
                    { 'id': 3, 'label': '动物档案', 'url': 'http://baidu.com', 'target': "" },
                    { 'id': 3, 'label': '动物世界', 'url': 'http://baidu.com', 'target': "" },
                    { 'id': 3, 'label': '游戏特色', 'url': 'http://baidu.com', 'target': "" },
                    { 'id': 4, 'label': '社区互动', 'url': 'http://bbs.uu.cc', 'target': "_blank" }
                ]
            }
        });
    }




    render() {

        const navList = this.state.moduleData.navList;
        const navListItems = navList.map((item) => {
            return (
                <li><a href={item.url} target={item.target}><span>{item.label}</span><em></em></a></li>
            )
        });

        const editListData = navList.map((item) => {
            return (
                <NavListItem item_data={item} />
            )
        })

        return (
            <div>
                <EditPanel editState={this.state.showEditPanel} editComponent={this.editModuleHandle} removeComponent={this.removeModuleHandle} />
                <div class="hd" style={this.state.edit_style} onMouseEnter={this.mouseOverHandle} onMouseLeave={this.mouseOutHandle}>
                    <div id="nav-wrap" class="">
                        <div class="wp">
                            <ul id="nav">
                                {navListItems}
                            </ul>
                        </div>
                    </div>
                </div>

                <Modal
                    visible={this.state.editorModalVisible}
                    closable={true}
                    title="模块编辑"
                    width='800px'
                    onOk={this.editOk}
                    onCancel={this.editCancel}
                    footer={[
                        <Button key="back" onClick={this.editCancel}>
                            取消
            </Button>,
                        <Button key="submit" type="primary" onClick={this.editOk}>
                            确定
            </Button>,
                    ]}
                >
                    {editListData}
                    <Button type="primary" style={{width:'100%'}}>增加</Button>

                </Modal>
            </div >

        );
    }
}

export default Nav;
