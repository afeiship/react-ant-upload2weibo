# react-ant-dragger
> React ant dragger.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange: noop
  };
  
```

## usage:
```jsx

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
        <ReactAntDragger ref='rc' />
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
