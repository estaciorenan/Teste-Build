import React, { Component } from "react";
import "./style.css";
import { Card } from "react-bootstrap";

class ExemploClasses extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <div className="title">
          <h1 className="p-title">Quadro de postagens</h1>
        </div>

        <div className="container-geral">
          {posts.map((m) => (
            <>
              <div className="quadro-posts">
                <Card key={m.id} size="sm" style={{ width: "18rem" }}>
                  <Card.Header>{m.title}</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p> {m.body} </p>
                    </blockquote>
                  </Card.Body>
                </Card>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}
export default ExemploClasses;
