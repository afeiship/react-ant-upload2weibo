import './dev.scss';
import ReactAntDragger from './main';

/*===example start===*/

// install: npm install afeiship/react-ant-dragger --save
// import : import ReactAntDragger from 'react-ant-dragger'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-ant-dragger">
        <ReactAntDragger />
        <ReactAntDragger extra={
          <img className="ml10" src="http://placeholder.qiniudn.com/150" alt=""/>
        } />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
