import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import nx from 'next-js-core2';
import objectAssign from 'object-assign';
import { Spin, Upload, Icon } from 'antd';
import 'next-file-to-base64';

const STATUS_DONE = 'done';
const STATUS_ERROR = 'error';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onError: PropTypes.func,
    eventFilter: PropTypes.func,
  };

  static defaultProps = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange: noop,
    onError: noop,
    eventFilter: noop,
    showUploadList: false
  };
  /*===properties end===*/

  state = {
    loading: false,
    base64: null
  };

  get indicatorView(){
    return (
      <Icon type="loading" style={{ fontSize: 24 }} spin />
    );
  }


  showBase64Img(inFile){
    nx.fileToBase64(inFile).then((base64) => {
      this.setState({ base64 });
    });
  }

  _onChange = (inEvent) => {
    const status = inEvent.file.status;
    const { onChange, onError, eventFilter } = this.props;

    this.setState({ loading: true });
    if (status === STATUS_DONE) {
      this.showBase64Img(inEvent.file.originFileObj);
      return this.setState({ loading: false },()=>{
        onChange(eventFilter(inEvent.file));
      });
    } else if (status === STATUS_ERROR) {
      onError(inEvent);
    }
    return this.setState({ loading: false });
  };

  render() {
    const {
      className,
      children,
      value,
      onChange,
      ...props
    } = this.props;

    const { base64, loading } = this.state;
    const hasValue = !!(base64 || value);

    return (
      <section
        data-value={hasValue}
        style={{ width: '100%', height: 200}}
        className={classNames('react-ant-dragger', className)}>
        <Spin delay={2} tip='上传中' spinning={loading}>
          <Upload.Dragger
            {...props}
            multiple={false}
            className="react-ant-dragger-upload"
            onChange={this._onChange}>
            { children }
          </Upload.Dragger>
          <img className="react-ant-dragger-img" src={base64 || value} alt=""/>
          {
            hasValue && (
              <div className="webkit-sassui-transform-center-xy webkit-sassui-vim-center react-ant-dragger-mask">
                <Icon type="cloud-upload-o" />
                <span>重新上传</span>
              </div>
            )
          }
        </Spin>
      </section>
    );
  }
}
