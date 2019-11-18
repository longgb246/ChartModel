import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'

import './index.less'

const { SubMenu } = Menu

export default class NavMenu extends Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <div className="nav-menu">
        <Menu
          defaultSelectedKeys={['5']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="experiment" />
                <span>仿真模型</span>
              </span>
            }
          >
            <Menu.Item key="5"><NavLink to='/home/one'>参数设置</NavLink></Menu.Item>
            <Menu.Item key="6"><NavLink to='/home/one/result'>结果展示</NavLink></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>数值模型</span>
              </span>
            }
          >
            <Menu.Item key="9">参数设置</Menu.Item>
            <Menu.Item key="10">结果展示</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
