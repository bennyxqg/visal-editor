import React, { Component } from 'react';
import BaseModule from '../base'
import EditPanel from '../base/edit'
import './index.css';

class Nav extends BaseModule {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <EditPanel />
                <div class="hd" id="idfe-top" style={this.state.edit_style} onMouseOver={this.mouseOverHandle} onMouseOut={this.mouseOutHandle}>
                    <div id="nav-wrap" class="">
                        <div class="wp">
                            <ul id="nav">

                                <li class="current"><a href="javascript:;"><span>首页</span><em></em></a></li>

                                <li class=""><a href="javascript:;" rel="dropmenu1"><span>动物情报</span><em></em></a></li>

                                <li class=""><a href="javascript:;"><span>动物档案</span><em></em></a></li>

                                <li><a href="javascript:;"><span>动物世界</span><em></em></a></li>

                                <li><a href="javascript:;"><span>游戏特色</span><em></em></a></li>

                                <li><a href="https://bbs-sar.idreamsky.com/" target="_blank"><span>社区互动</span><em></em></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Nav;
