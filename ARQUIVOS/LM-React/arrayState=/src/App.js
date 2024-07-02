import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [], // modelo array

    /* modelo array [
      {
        id: 1,
        title: "O titulo 1",
        body: "O corpo 1",
      },
      {
        id: 2,
        title: "O titulo 2",
        body: "O corpo 2",
      },
      {
        id: 3,
        title: "O titulo 3",
        body: "O corpo 3",
      },
    ], */
  };
}

  // Lifecycle methods
  componentDidMount() {
    this.setState = {
      posts: [
        {
          id: 1,
          title: "O titulo 1",
          body: "O corpo 1",
        },
        {
          id: 2,
          title: "O titulo 2",
          body: "O corpo 2",
        },
        {
          id: 3,
          title: "O titulo 3",
          body: "O corpo 3",
        },
      ],
    }
  }
  timeoutUpdate = null;

  componentDidMount(){
    this.handleTimeout();
  }

  componentDidUpdate(){
    this.handleTimeout();
  }

  componentDidUnmount(){
    clearTimeout(this.timeoutUpdate)
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = "O titulo mudou";

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 5000);
  };

  render() {
    const { posts, counter } = this.state;
    posts[0].title = "O titulo mudou";

    return (
      <div className="App">
        {/*        {posts.map(post => <h1 key={post.id}>{post.title}</h1>)}
         */}
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
