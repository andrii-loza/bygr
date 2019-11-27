import React from "react";

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
          data.map(item => <FlatItem data={item} />)
        }
      </div>
    )
  }
}

export { FlatList };
