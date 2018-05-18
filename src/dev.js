import './dev.scss';
import ReactAntDragger from './main';
import objectAssign from 'object-assign';
import {Upload, Icon} from 'antd';
/*===example start===*/

// install: npm install afeiship/react-ant-dragger --save
// import : import ReactAntDragger from 'react-ant-dragger'

class App extends React.Component{
  state = {
    elements:[
      <p className="ant-upload-drag-icon">
            <Icon type="inbox"/>
          </p>,
      <p className="ant-upload-hint">拖拽文件到此完成上传</p>,
      <p className="ant-upload-hint">支持png/jpg/jpeg/gif/bmp 等常见格式</p>
    ]
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
        <ReactAntDragger>
        {
          this.state.elements.map((el,index)=>{
            return (
              React.cloneElement(el, objectAssign({ key: index }, el.props))
            )
          })
        }
        </ReactAntDragger>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
