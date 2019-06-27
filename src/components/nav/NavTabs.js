import React, {Component} from 'react';
import PropTypes from 'prop-types';
// Tabs: This part has been created with the help of: https://alligator.io/react/tabs-component/
import Tab from './Tab';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      // Task: Random tab selection on every page load
      activeTab: this.props.children[
        Math.floor(Math.random() * this.props.children.length)
      ].props.label,
    };
    this.onClickTabItem = this.onClickTabItem.bind(this);
  }

  onClickTabItem = tab => {
    this.setState({activeTab: tab});
  };

  render() {
    return (
      <div className='tabs'>
        <ol className='tab-list'>
          {this.props.children.map(child => {
            return (
              <Tab
                activeTab={this.state.activeTab}
                key={child.props.label}
                label={child.props.label}
                onClick={this.onClickTabItem}
              />
            );
          })}
        </ol>
        <div className='tab-content'>
          {this.props.children.map(child => {
            if (child.props.label !== this.state.activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
