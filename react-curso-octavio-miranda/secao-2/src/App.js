import React from "react";
import "./style/app.scss";

class App extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos  = postsJson.map((post, index) => (
      {...post, image: photosJson[index].url }
    ));

    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;

    return (
      <div className='wrapper'>
        <div className='posts'>
          {posts.map(post => (
            <div key={post.id} className='post-content'>
              <div className="post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
