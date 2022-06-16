import React, { Component } from "react";

export default class FetchData extends React.Component {
  state = {
    loading: true,
    jsondata: null
  }

  async componentDidMount() {
    const url = 'https://api.imgflip.com/get_memes';
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    this.setState({
      loading: false,
      jsondata: data.data.memes
    })
  }

  render() {
    if (this.state.loading) {
      return (<div>Loading</div>);
    }

    console.log(this.state.jsondata);
    if (!this.state.jsondata) {
      return (<div>No Data</div>);
    }

    return (
      <div className="App">
        <ul>{this.state.jsondata[0].name}</ul>
        <img src={this.state.jsondata[0].url} width='400' height='400' />
      </div>
    );
  }
}
