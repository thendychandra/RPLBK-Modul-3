import "./App.css";
import "./bootstrap.min.css";
import CardList from "./components/CardList";
import React, { Component } from "react";
const quotes = [
  {
    quote:
      "Start writing, no matter what. The water does not flow until the faucet is turned on.",
    author: "Louis L’Amour",
  },
  {
    quote:
      "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
    author: "William Faulkner",
  },
  {
    quote: "The first draft is just you telling yourself the story.",
    author: "Terry Pratchett",
  },
  { quote: "Start before you’re ready.", author: "Steven Pressfield" },
  {
    quote:
      "You can’t wait for inspiration. You have to go after it with a club.",
    author: "Jack London",
  },
  {
    quote: "You can always edit a bad page. You can’t edit a blank page.",
    author: "Jodi Picoult",
  },
];

class App extends Component {
  state = {
    contacts: [],
    CardList: false,
    src: "1",
  };
  componentDidMount() {
    alert("Welcome Praktikan!");
  }
  componentDidUpdate() {
    fetch("https://reqres.in/api/users?page="+this.state.src)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data.data });
      })
      .catch(console.log);
  }

  showList = () => {
    this.setState(() => {
      return {
        CardList: !this.state.CardList,
      };
    });
  };

  changeList1 = () => {
    this.setState(() => {
      return {
        src: "1",
      };
    });
  };

  changeList2 = () => {
    this.setState(() => {
      return {
        src: "2",
      };
    });
  };
  render() {
    return (
      <>
        <button
          className="btn btn-primary"
          style={{
            width: "92vw",
            padding: "20px",
            margin: "3vw",
          }}
          onClick={this.showList}
        >
          {this.state.CardList ? "Hide" : "Show"} List!
        </button>
        {this.state.CardList && (
          <>
            <CardList
              contacts={this.state.contacts}
              quotes={quotes}
              isNameBold
            />
            <center>
              <span
                style={{
                  marginLeft: "-10px",
                }}
              >
                Page:{" "}
              </span>
              <button
                className="btn btn-primary"
                style={{
                  margin: "10px",
                }}
                onClick={this.changeList1}
              >
                1
              </button>
              <button
                className="btn btn-primary"
                style={{
                  margin: "10px",
                }}
                onClick={this.changeList2}
              >
                2
              </button>
            </center>
          </>
        )}
      </>
    );
  }
}

export default App;
