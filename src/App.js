import React from 'react';
import './App.css';

class App extends React.Component {

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(`http://localhost:8000/data`)
            .then(responce => responce.json())
            .then(data => {
                console.log(data);
                debugger;
            });
    }

    getDataByFloor(floor) {
        fetch(`http://localhost:8000/buyer-info/${floor}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                debugger;
                this.setState({data});
            });
    }

    render() {
        return (
            <div className="App">
                <center>
                    <h1>Hello</h1>
                </center>

                <button onClick={() => this.getDataByFloor(1)}>Floor 1</button>
                <button onClick={() => this.getDataByFloor(2)}>Floor 2</button>
                <button onClick={() => this.getDataByFloor(3)}>Floor 3</button>
                <button onClick={() => this.getDataByFloor(4)}>Floor 4</button>
            </div>
        );
    }


}

export default App;
