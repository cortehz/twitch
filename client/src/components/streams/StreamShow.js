import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }


  const {title, description} = this.props.streams;

  render() {
    if (!this.props.stream) {
      return <div>Loading ...</div>;
    }
    return (<div><div></div></div>);
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(null, { fetchStream })(StreamShow);
