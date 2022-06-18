import React, { Component } from "react";
import './App.css'

//we export this class and it'll be imported in index.js with the App component.
export default class FetchData extends React.Component {
  state = { //the object that we use it store data and check if it's done with loading
    loading: true,
    jsondata: null
  }

  async componentDidMount() { //it's being invoked when a component mounted. to use await, i did async
    const url = 'https://api.imgflip.com/get_memes';
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data); //With this, I found the array in data.memes. That's why setState-jsondata is like:
    this.setState({ //when setState worked, render will be invoked again
      loading: false,
      jsondata: data.data.memes
    })
  }

  //index.js calls this method. So you can consider that it's working like main() method
  render() {
    if (this.state.loading) {
      return (<div>Loading</div>);
    }

    if (!this.state.jsondata) {
      return (<div>No Data</div>);
    }

    return (
      <div className="App">
        <ul className="meme-list">
          {this.state.jsondata.map(meme => ( //map() works like array loop
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
