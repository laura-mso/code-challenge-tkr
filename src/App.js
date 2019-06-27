import React, {Component} from 'react';
import Header from './components/Heading';
import NavTabs from './components/nav/NavTabs';
import Topics from './components/sections/Topics';
import Archive from './components/sections/Archive';
import Pages from './components/sections/Pages';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      topics: [
        // Ideally the archives and topics overview should have similar data ->
        // In real life the number would be calculated from the amount of posts with that topic, but I dont have the detail data, so I will hardcode the aggregated data:
        ['HTML Techniques', 4],
        ['CSS Styling', 32],
        ['Flash Tutorials', 2],
        ['Web Miscellanea', 19],
        ['Site News', 6],
        ['Web Development', 8],
      ],
    };
    this.getPostData = this.getPostData.bind(this);
  }

  getPostData() {
    fetch('https://picsum.photos/v2/list?page=2')
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data,
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getPostData();
  }

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <Header />
          <div className='inner-container'>
            <NavTabs>
              <div label='Topics'>
                <Topics topics={this.state.topics} />
              </div>
              <div label='Archives'>
                {this.state.posts.length > 0 ? (
                  <Archive posts={this.state.posts} />
                ) : (
                  <div>Loading...</div>
                )}
              </div>
              <div label='Pages'>
                <Pages />
              </div>
            </NavTabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
