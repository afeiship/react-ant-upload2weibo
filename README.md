# react-ant-dragger
> React ant dragger.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onError: PropTypes.func,
    eventFilter: PropTypes.func,
    size: PropTypes.array
  };

  static defaultProps = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange: noop,
    onError: noop,
    eventFilter: noop,
    size:[],
    showUploadList: false
  };
  
```

## usage:
```jsx

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
        <ReactAntDragger size={['375px','667px']}>
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

```

## customize style:
```scss
// customize your styles:
$react-ant-dragger-options:(
);

@import '~node_modules/react-ant-dragger/style.scss';
```
