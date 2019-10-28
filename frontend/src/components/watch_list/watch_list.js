import React from 'react';

class WatchList extends React.Component {
  constructor(props) {
    super(props);

    this.state= {};

    this.handleAddWatchList = this.handleAddWatchList.bind(this);
    this.handleUnwatchList = this.handleUnwatchList.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser().then(
      () => {
        this.setState({
          id: this.props.user.id,
          watch_list: this.props.user.watch_list
        });
      }
    );
  }


  handleAddWatchList(e) {
    e.preventDefault();
    
    let user = {
      id: this.state.id,
      tag: this.props.tag
    };    
    this.props.addWatchList(user).then(
      () => {
        this.setState({
          watch_list: this.props.user.watch_list
        });
      }
    );
  }

  handleUnwatchList(e) {
    e.preventDefault();    
    let user = {
      id: this.state.id,
      tag: this.props.tag
    };
    
    this.props.removeWatchList(user).then(
      () => {
        this.setState({
          watch_list: this.props.user.watch_list
        }); 
      }
    );
  }

  render() {
    if (!this.state.id) {
      return null;
    } else if (!this.state.watch_list.includes(this.props.tag)) {
      return (
        <form onSubmit={this.handleAddWatchList}>
          <button className="watch-button" >Watch</button>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleUnwatchList}>
          <button className="un-watch-button" >Un-Watch</button>
        </form>
      );
    }
    
  }
}

export default WatchList;