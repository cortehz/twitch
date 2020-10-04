import React from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    //fetchStream from redux store
    //params.id from the history object
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`;
  }

  render() {
    const actions = (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );

    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={actions}
        onDismiss={() => {
          history.push("/");
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
