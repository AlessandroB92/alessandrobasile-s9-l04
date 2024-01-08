import { Component } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.asin !== prevProps.asin) {
      this.fetchComments();
    }
  }

  fetchComments() {
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcyZmVhNmZlMDMxZTAwMTliYTE0ZjUiLCJpYXQiOjE3MDQ3MTkwNTgsImV4cCI6MTcwNTkyODY1OH0.430xQtiv-Y5uDqKorng6e9137CSJXxwMV81zztiK5Pw';
  
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((comments) => {
        this.setState({ comments, isLoading: false, isError: false });
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
        this.setState({ isLoading: false, isError: true });
      });
  }

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;

