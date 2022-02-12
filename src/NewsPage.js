import React from 'react';
import { Link } from "react-router-dom";

class ArticleCard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        title: "Loading..."
      }
    }
  
    render() {
      return <div className="col s12 m6 l4">
        <div className="card medium">
            <div className="card-image">
                <img src={"/assets/" + this.props.image} />
            </div>
            <div className="card-content">
                <Link className="grey-text text-darken-3" to={"/article/" + this.state.id}>
                    <i className="material-icons right">more_vert</i>
                </Link>
                <span className="card-title">
                <a href={this.state.url}>
                    {this.state.title}
                </a>
                </span>
            </div>
            <div className="card-action">
                <span>by: {this.state.by} </span>
                <span>score: {this.state.score}</span>
            </div>
            </div>
      </div>
    }
  
    componentDidMount() {
        // get article data when the element is mounted
        fetch(
            `https://hacker-news.firebaseio.com/v0/item/${this.props.articleId}.json`,
            {method:"GET"}
        ).then(response => response.json())
        .then(data => this.setState(data))
    }
  }
  
  class Articles extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        images: [
            "People-silhouettes-binary-code-background-898966394_4500x3000.jpeg",
            "Programmer-working-in-a-software-developing-company-office-665158684_5379x3586.jpeg",
            "Woman-hand-holding-mobile-phone-and-laptop-data-synchronization-675913278_6016x4016.jpeg",
            "Young-creative-business-people-meeting-at-office.-832112086_2125x1416.jpeg"
        ]
      }
    }
  
    render() {
      return <div className="row">
        {this.state.articles}
      </div>
    }
  
    componentDidMount() {
        fetch(
            "https://hacker-news.firebaseio.com/v0/topstories.json",
            { method: "GET" }
        ).then(response => response.json())
        .then(data => {
            // update the state with an article card for each of the first 9 items
            this.setState({articles: data.splice(0, 9).map((id, index) => 
            <ArticleCard key={index} articleId={id} image={this.state.images[index % this.state.images.length]} />
            )});
        })
    }
  }
  
  function NewsPage() {
    return <div className="container">
        <h4 className="grey-text lighten-1 center">News</h4>
        <Articles />
    </div>
  }

  export default NewsPage;