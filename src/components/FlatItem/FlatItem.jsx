import React from "react";
import "./FlatItem.css";
import "./DeadlineStatusEnum"

class FlatItem extends React.PureComponent {
  getDeadlineStatusBgColor(status) {
    return {backgroundColor: '#B8DE91'}
  }

  formatDate(date) {
  }

  render() {
    const {data} = this.props;
    console.log(data);
    return (
      <div className="flat-item">
        <div className="item-title">Building A - H0102</div>
        <div className="item-info d-flex">
          <div style={{width: '10%'}}>
            <div className="info-subtitle">Floor</div>
            <div>{data.floor}</div>
            <div className="info-subtitle">Unit type</div>
            <div>{data.type}</div>
            <div className="info-subtitle">Type</div>
            <div>A1</div>
          </div>
          {
            data.buyers.map((item, index) => (
              <div key={index} style={{width: '15%'}}>
                <div className="info-subtitle">
                  Buyer {index + 1}
                </div>
                <div>
                  <div>{item.firstName} {item.lastName}</div>
                  <div>+ {item.phoneNumber}</div>
                  <div>{item.email}</div>
                  <div>{}</div>
                </div>
              </div>
            ))
          }
          <div style={{width: '25%'}}>
            <div className="info-subtitle">Last login</div>
            {
              data.buyers.map((item, index) =>
                <div key={index}>
                  <div>{item.displayName}</div>
                  <div> {item.lastVisitDate}</div>
                  {/*<div> {this.formatDate(item.lastVisitDate)}</div>*/}
                </div>
              )
            }
          </div>
          <div style={{width: '35%'}}>
            <div className="info-subtitle">Deadlines</div>
            {
              data.deadlines.map((item, index) =>
                <div className="d-flex align-center" key={index}>
                  <div>Deadline {index + 1} ({item.Date}) :</div>
                  <div id="info-status" style={this.getDeadlineStatusBgColor(item.Status)}/>
                  <div>{item.Status}</div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export { FlatItem };