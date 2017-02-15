import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, IndexLink } from 'react-router';

const SubMenu = Menu.SubMenu;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '1',
      openKeys: []
    };
    this.onOpenChange = this.onOpenChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // console.log('clicked:', e);
    this.setState({
      current: e.key
    });
  }

  onOpenChange(openKeys) {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }

  getAncestorKeys(key) {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  }

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        style={{width: 240}}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}
      >
        <Menu.Item key="1">
          <IndexLink to="/">
            <span>
              <Icon type="home" />
              <span>欢迎页</span>
            </span>
          </IndexLink>
        </Menu.Item>
        <SubMenu key="sub2" title={<span><Icon type="appstore-o" /><span>导航一</span></span>}>
          <Menu.Item key="2">
            <Link to="/profile">小应用</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="bars" /><span>导航二</span></span>}>
          <Menu.Item key="3">
            <Link to="/campaign">广告系列</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="bar-chart" /><span>导航二</span></span>}>
          <Menu.Item key="4">
            <Link to="/counter">起步</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/charts">施工中</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="6">
          <Link to="/last">
            <span>
              <Icon type="mail" />
            </span>
            <span>结尾页</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}


Sidebar.defaultProps = {
};

export default Sidebar;
