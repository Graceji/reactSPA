import React, { Component } from 'react';
import { DatePicker, Input } from 'antd';

const { MonthPicker, RangePicker } = DatePicker;


class Age extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trueAge: 0
    };
    
    this.onChange = this.onChange.bind(this);
    
  }

  onChange(date) {
    // let now = (new Date()).toDateString();
    let msGap = new Date().getTime() - new Date(date.toDate()).getTime();
    let trueAge = (msGap/1000/3600/24/365.242199).toFixed(2);
    this.setState({
      trueAge
    });
  }

  render() {
    return (
      <div>
        <div>
          您的出生日期：
          <DatePicker onChange={this.onChange} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input
            addonBefore="您已在地球上存活了："
            addonAfter="年"
            value={this.state.trueAge}
          />
        </div>
      </div>
    );
  }
}

export default Age;