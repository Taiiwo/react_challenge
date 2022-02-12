import React from 'react';
import { useParams } from 'react-router-dom';
import 'materialize-css';

function ArticlePage() {
    let {articleId} = useParams();
    return <Comments articleId={articleId}/>
}

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Loading..."
        }
    }

    render() {
        return <div className="container">
            <h2>{this.state.title}</h2>
            <h4>Comments:</h4>
            {this.state.kids && this.state.kids.length == 0 && <p className="center">No comments</p>}
            <div className="collection">
                {this.state.comments}
            </div>
        </div>;
    }

    componentDidMount() {
        // get article data when the element is mounted
        fetch(
            `https://hacker-news.firebaseio.com/v0/item/${this.props.articleId}.json`,
            {method:"GET"}
        ).then(response => response.json())
        .then(data => {
            this.setState(data);
            return data.kids;
        }).then(kids => {
            // get the first 3 comments and render them recursively
            this.setState({comments: kids.splice(0,3).map((id, index) =>
                <Comment key={index} commentId={id} />
            )})
        })
    }
}

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Loading...",
            comments: [],
            showComment: false
        }
    }

    render() {
        return <li className="collection-item">
            {/* Potentially dangerous! (we might want to do our own sanitization!) */}
            <p dangerouslySetInnerHTML={{__html: this.state.text}}></p>
            <button className="btn right waves-effect" onClick={e => this.setState({showComment: !this.state.showComment})}>reply</button>
            <p>By: {this.state.by}</p>
            {this.state.showComment && <form onSubmit={this.sendForm.bind(this)}>
                <div className="input-field">
                    <input id={this.state.id} name="text" type="text" className="validate"/>
                    <label for={this.state.id}>Comment</label>
                    <input name="by" value="Anonymous" type="hidden" />
                    <input name="parent" value={this.state.id} type="hidden" />
                    <input name="time" value={this.getTime()} type="hidden" />
                    <input name="type" value="comment" type="hidden" />
                </div>
            </form>}
            {this.state.comments.length > 0 && <ul className="collection">{this.state.comments}</ul>}
        </li>
    }

    getTime() {
        return new Date().getTime();
    }

    sendForm(e) {
        e.preventDefault();
        // hide comment field on submit
        this.setState({showComment: false});
        // iterate over the formdata entries generator and serialize to a javascript object
        var s = Object.assign(...Array.from(
            new FormData(e.target).entries(),
            ([x,y]) => ({[x]:y})
        ));
        var data = {
            by: s.by,
            parent: parseInt(s.parent),
            text: s.text,
            time: parseInt(s.time),
            type: s.type
        };
        console.log(data);
        window.M.toast({html: "Comment sent successfully!", classes: "green"});
    }

    componentDidMount() {
        // get article data when the element is mounted
        fetch(
            `https://hacker-news.firebaseio.com/v0/item/${this.props.commentId}.json`,
            {method:"GET"}
        ).then(response => response.json())
        .then(data => {
            this.setState(data);
            return data.kids;
        }).then(kids => {
            if (!kids) {
                return false;
            }
            // get the first 3 comments and render them recursively
            this.setState({comments: kids.splice(0,3).map((id, index) =>
                <Comment key={index} commentId={id} />
            )})
        })
    }
}

export default ArticlePage;