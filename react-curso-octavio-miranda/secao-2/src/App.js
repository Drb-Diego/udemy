import React from "react";

class App extends React.Component {
    
  state = {
    posts: [
      {id: 1, title: 'titulo 1', body: 'conteudo 1'},
      {id: 2, title: 'titulo 2', body: 'conteudo 2'},
      {id: 3, title: 'titulo 3', body: 'conteudo 3'},
      {id: 4, title: 'titulo 4', body: 'conteudo 4'},
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        {
          posts.map(post => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          )) 
        }
      </div>
    );
  }
}

export default App;
