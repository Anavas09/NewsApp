import React, { Component, Fragment } from "react";
import axios from 'axios'
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Form from "./components/Form";

class App extends Component {
  constructor(){
    super()

    this.state = {
      news: []
    }
  }

  componentDidMount(){
    this.fetchNews()
  }

  fetchNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${category}&apiKey=599b31bd0d614939b8b56da004c5c638`

    await axios.get(url)
      .then(res => {
        const { articles } = res.data
        this.setState({
          news: articles
        }, () => console.log(this.state.news))
      })
  }

  render() {
    const { news } = this.state
    return (
      <Fragment>
        <Header title={"Noticias REACT API"}/>
        <div className="container white news-container">
          <Form fetchNews={this.fetchNews}/>
          <NewsList newsList={news} />
        </div>
      </Fragment>
    );
  }
}

export default App;