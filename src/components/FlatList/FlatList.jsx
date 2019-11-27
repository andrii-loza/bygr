import React from "react";
import {Select} from 'react-select';
import  "./FlatList.css"

import {FlatItem} from '../index';

class FlatList extends React.Component {
  state = {
    data: [],
    options: [],
  };

  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]

  componentDidMount() {
    this.getData();
  }

  getOptions(data) {
    return data.map(item => {
      return {value: item.layoutType, label: item.layoutType};
    });
  }

  filterData() {

  }

  getData() {
    fetch(`http://localhost:8000/data`)
      .then(response => response.json())
      .then(data => {
        this.setState({data: data, options: this.getOptions(data)});
      });
  }

  render() {
    const {data,options} = this.state;

    return (
      {/*<Select options={options} />*/}

      <div className="flat-list">
        {
          data.map((item, index) => <FlatItem data={item} key={index} />)
        }
      </div>
    )
  }
}

export {FlatList};
