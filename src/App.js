import React from 'react';
import './App.css';


class FlatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "id": 1037,
            "name": "1401",
            "type": "Apartment",
            "residentialUnitGroupId": 1010,
            "floor": 1,
            "layoutType": "F1",
            "deadlines": [
                {
                    "Name": "Interier",
                    "Date": "2019-12-12T12:00:00.00+00:00",
                    "Status": "Sent"
                },
                {
                    "Name": "Exterior",
                    "Date": "2020-2-10T11:00:00.00+00:00",
                    "Status": "In progress"
                },
                {
                    "Name": "Exterior",
                    "Date": "2020-2-10T11:00:00.00+00:00",
                    "Status": "Not sent"
                }
            ],
            "buyers": [
                {
                    "id": 2,
                    "firstName": "Yuval",
                    "lastName": "Montuelle",
                    "email": "yuval@bygr.io",
                    "displayName": "Yuval Montuelle",
                    "phoneNumber": "92869069",
                    "lastVisitDate": "2019-11-14T11:15:47.5614882+00:00"
                }
            ]
        }
    }

    render() {
        return (
            <div className="flat-list">
                <FlatItem></FlatItem>

                {/*{this.props.map(item => (*/}
                {/*    <FlatItem props={item}></FlatItem>*/}
                {/*))}*/}
            </div>
        )
    }
}

class FlatItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flat-item">
                <div className="item-title">Building A - H0102</div>
                <div className="item-info">
                    <div style={{width: '9.8%'}}>
                        <div className="info-subtitle">Floor</div>
                        <div>1</div>
                        <div className="info-subtitle">Unit type</div>
                        <div>Apartment</div>
                        <div className="info-subtitle">Type</div>
                        <div>A1</div>
                    </div>
                    <div style={{width: '9.8%'}}>
                        <div className="info-subtitle">Buyer 1</div>
                    </div>
                    <div style={{width: '15%'}}>
                        <div className="info-subtitle">Buyer 2</div>
                    </div>
                    <div style={{width: '25%'}}>
                        <div className="info-subtitle">Last login</div>
                    </div>
                    <div style={{width: '40%'}}>
                        <div className="info-subtitle">Deadlines</div>
                        <div>Deadline 1</div>
                        <div>Deadline 2</div>
                        <div>Deadline 3</div>
                    </div>
                </div>
            </div>
        )
    }
}

// componentDidMount() {
//     this.getData();
// }
//
// getData() {
//     fetch(`http://localhost:8000/data`)
//         .then(responce => responce.json())
//         .then(data => {
//             console.log(data);
//             debugger;
//         });
// }
//
// getDataByFloor(floor) {
//     fetch(`http://localhost:8000/buyer-info/${floor}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             debugger;
//             this.setState({data});
//         });
// }
export default FlatList;
