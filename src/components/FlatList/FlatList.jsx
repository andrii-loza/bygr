import React from "react";
import  "./FlatList.css"
import { FlatItem } from '../index';

class FlatList extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(`http://localhost:8000/data`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="flat-list">
        {
          data.map((item, index) => <FlatItem data={item} key={index} />)
        }
      </div>
    )
  }
}

export { FlatList };
