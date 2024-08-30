import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    counter: 0, // Inicializa o contador
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
  };

  timeoutUpdate = null;

  componentDidMount() {
    //this.handleTimeout();
  }

  componentWillUnmount() {
    // Limpe o timeout quando o componente for desmontado para evitar vazamentos de memória
    if (this.timeoutUpdate) {
      clearTimeout(this.timeoutUpdate);
    }
  }

  handleTimeout = () => {
    this.timeoutUpdate = setInterval(() => {
      this.setState((prevState) => {
        const updatedPosts = [...prevState.posts];
        updatedPosts[0] = { ...updatedPosts[0], title: "O titulo mudou" };

        const newCounter = prevState.counter + 1;

        if (newCounter >= 10) {
          window.location.reload(); // Recarrega a página quando o contador atingir 10
        }

        return {
          posts: updatedPosts,
          counter: newCounter,
        };
      });
    }, 1000); // Incrementa o contador a cada segundo
  };

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
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


 // Use o setState para atualizar o estado
    /* this.setState({
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
    }); */

    // Exemplo de uso do setTimeout para simular uma chamada de API

    /*
    setTimeout(() => {
      this.setState({
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
      });
    }, 5000);
    */