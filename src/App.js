import React, { Component } from "react";
import './App.css'

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
        <ul className="meme-list">
          {this.state.jsondata.map(meme => (
            <li>
              <h1 className="meme-head">{meme.name}</h1>
              <img className="meme-img" src={meme.url} />
              <hr />
            </li>
          ))
          }
        </ul>
      </div>
    );
  }
}
