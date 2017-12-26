// Code ThemedDecoration Component Here
export default class ThemedDecorations extends React.Component {
  render() {

    return (
      <h1> "You've been invited!" </h1>
        {this.props.children}

    );
  }
}
