import React from 'react';
import Sidebar from './Sidebar';
import 'antd/dist/antd.css';
import 'animate.css/animate.min.css';
import '../app.scss';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="leftMenu">
          <Sidebar />
        </div>
        <div className="rightWrap">
          {this.props.children}
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
