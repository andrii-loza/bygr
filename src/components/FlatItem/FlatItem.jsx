import React from "react";
import "./FlatItem.css";
import { DeadlineStatusEnum } from "./DeadlineStatusEnum";
import { TimeFormatEnum } from './TimeFormat';

class FlatItem extends React.PureComponent {

  getDeadlineStatusBgColor = status => {
    switch (status) {
      case DeadlineStatusEnum.Sent: {
        return {backgroundColor: '#B8DE91'}
      }
      case DeadlineStatusEnum.NotSent: {
        return {backgroundColor: '#FB9683'}
      }
      case DeadlineStatusEnum.InProgress: {
        return {backgroundColor: '#FBD277'}
      }
    }
  };

  formatDate = (date,usage) => {
    const split = date.split(/\D+/);
    const dateFormat = new Date(Date.UTC(split[0], --split[1], split[2], split[3], split[4], split[5], split[6]));

    let day = dateFormat.getDate();
    let month = dateFormat.getUTCMonth();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    switch (usage) {
      case TimeFormatEnum.LastLogin: {
        return `${day}.${month}.${dateFormat.getUTCFullYear()} ${dateFormat.getHours()}:${dateFormat.getMinutes()}`
      }
      case TimeFormatEnum.DeadlineDate: {
        return `${day}.${month}.${dateFormat.getUTCFullYear()}`;
      }
    }
  };

  render() {
    const {data} = this.props;

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
            <div>{data['layoutType']}</div>
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
                  <div> {this.formatDate(item['lastVisitDate'], TimeFormatEnum.LastLogin)}</div>
                </div>
              )
            }
          </div>
          <div style={{width: '35%'}}>
            <div className="info-subtitle">Deadlines</div>
            {
              data.deadlines.map((item, index) =>
                <div className="d-flex align-center" key={index}>
                  <div>Deadline {index + 1} ({this.formatDate(item['Date'], TimeFormatEnum.DeadlineDate)}) :</div>
                  <div id="info-status" style={this.getDeadlineStatusBgColor(item['Status'])}/>
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