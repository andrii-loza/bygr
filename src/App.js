import React from 'react';
import './App.css';


class FlatList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(`http://localhost:8000/data`)
            .then(responce => responce.json())
            .then(data => {
                this.setState({data});
            });
    }

    render() {
        const { data } = this.state;
        return (
            <div className="flat-list">
                {data.map(item => <FlatItem data={item} />)}
            </div>
        )
    }
}

class FlatItem extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className="flat-item">
                <div className="item-title">Building A - H0102</div>
                <div className="item-info">
                    <div style={{width: '9.8%'}}>
                        <div className="info-subtitle">Floor</div>
                        <div>{data.floor}</div>
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
