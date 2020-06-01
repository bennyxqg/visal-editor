import React, { Component } from 'react';
import './index.css';

class Nav extends Component {

    render() {
        return (
            <div id="hd" class="mbm cl">
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
                    <div>
                        <div class="userbox">
                            <span class="time">
                                傍晚好,
      </span>
                            <span class="userlogin" id="_userlogin">
                                <a href="" class="login">点击登录
                                </a>
                            </span>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default Nav;
