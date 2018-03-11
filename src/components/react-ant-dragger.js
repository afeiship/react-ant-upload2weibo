import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import {Upload, Icon} from 'antd';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange: noop
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {};
  }

  _onChange = inEvent => {
    const {onChange} = this.props;
    console.log(inEvent);
  };

  render() {
    const {
      className,
      children,
      text,
      hint,
      ...props
    } = this.props;

    return (
      <Upload.Dragger
        {...props}
        onChange={this._onChange}
        className={classNames('react-ant-dragger', className)}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox"/>
        </p>
        <p className="ant-upload-text">拖拽文件到此完成上传</p>
        <p className="ant-upload-hint">支持png/jpg/jpeg/gif/bmp 等常见格式</p>
        {children}
      </Upload.Dragger>
    );
  }
}
