import React from "react";
import Select from 'react-select';
import "./FlatList.css"

import {FlatItem} from '../index';

class FlatList extends React.Component {
  state = {
    data: [],
    filteredData: [],
    options: [],
    selectedOption: null,
  };

  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]

  componentDidMount() {
    this.getData();
  }

  getOptions = data => {
    return data.map(item => {
      return {value: item['layoutType'], label: item['layoutType']};
    });
  };

  handleChange = selectedOption => {
    const { data } = this.state;

    if(!selectedOption) this.setState({filteredData: data, selectedOption});
    else {
      const editedData = [...data].filter(item => item['layoutType'] === selectedOption.value);
      this.setState({filteredData: editedData, selectedOption});
    }
  };

  getData() {
    fetch(`http://localhost:8000/data`)
      .then(response => response.json())
      .then(data => {
        this.setState({data: data, options: this.getOptions(data), filteredData: data});
      });
  }

  render() {
    const {options, selectedOption, filteredData} = this.state;

    return (
        <div className="flat-list">
          <Select
            className={'select'}
            value={selectedOption}
            onChange={this.handleChange}
            placeholder={'Filter on type'}
            isClearable={'true'}
            options={options}
          />
          <div className="list">
            {filteredData.map((item, index) => <FlatItem data={item} key={index}/>)}
          </div>
        </div>
    )
  }
}

export {FlatList};
