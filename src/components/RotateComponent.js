const HOC = WrappedComponent => class extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        orientation: ''
      };
    }
    componentDidMount() {
      Dimensions.addEventListener('change', this.getOrientation);
    }
   
        getOrientation = () => {
          if (Dimensions.get('window').width < Dimensions.get('window').height) {
            this.setState({ orientation: 'portrait' });
          } else { this.setState({ orientation: 'landscape' }); }
        };
   
        render() {
          return <WrappedComponent {...this.props} orientation={this.state.orientation} />;
        }
  };