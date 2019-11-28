import React from "react";
import Select from 'react-select';
import "./FlatsList.css"

import {FlatItem} from '../index';

class FlatsList extends React.Component {
  state = {
    env: 'http://localhost:3000/',
    data: [],
    filteredData: [],
    options: [],
    selectedOption: null,
  };

  componentDidMount() {
    this.getData();
  }

  getOptions = data => {
    return data.map(item => {
      return {value: item['layoutType'], label: item['layoutType']};
    });
  };

  filterFlatsList = selectedOption => {
    const {data} = this.state;

    if (!selectedOption) this.setState({filteredData: data, selectedOption});
    else {
      const editedData = data.filter(item => item['layoutType'] === selectedOption.value);
      this.setState({filteredData: editedData, selectedOption});
    }
  };

  getData() {
    let url;
    if(this.state.env === window.location.href) url = '/data';
    else {
      const split = window.location.href.split('/');
      url = '/buyer-info/' + split[split.length - 1];
    }

    fetch(url)
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
          className="select"
          value={selectedOption}
          onChange={this.filterFlatsList}
          placeholder="Filter on type"
          isClearable
          options={options}
        />
        <div className="list">
          {filteredData.map((item, index) => <FlatItem flat={item} key={index}/>)}
        </div>
      </div>
    )
  }
}

export {FlatsList};
