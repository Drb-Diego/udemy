import React from "react";

class App extends React.Component {
  state = {
    posts: [
      { id: 1, title: "titulo 1", body: "conteudo 1" },
      { id: 2, title: "titulo 2", body: "conteudo 2" },
      { id: 3, title: "titulo 3", body: "conteudo 3" },
      { id: 4, title: "titulo 4", body: "conteudo 4" },
    ],
    counter: 0,
  };
  timeoutStop = null;

  componentDidMount() {
    this.handleTimeOut();
  }

  componentDidUpdate() {
    this.handleTimeOut();
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutStop);
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state;

    posts[0].title = "Novo titulo teste";

    this.timeoutStop = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  };

  render() {
    const { posts, counter } = this.state;

    return (
      <div>
        <p>{counter}</p>
        {posts.map(post => (
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
