import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import {Upload, Icon} from 'antd';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    extra: PropTypes.element,
  };

  static defaultProps = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange: noop
  };
  /*===properties end===*/

  _onChange = inEvent => {
    const {onChange} = this.props;
    onChange(inEvent);
  };

  render() {
    const {
      className,
      children,
      text,
      hint,
      extra,
      ...props
    } = this.props;

    return (
      <section data-align='flex-start' className={classNames('webkit-sassui-flex-lauto-rfixed react-ant-dragger', className)}>
        <Upload.Dragger
          {...props}
          className="left"
          onChange={this._onChange}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox"/>
          </p>
          <p className="ant-upload-text">拖拽文件到此完成上传</p>
          <p className="ant-upload-hint">支持png/jpg/jpeg/gif/bmp 等常见格式</p>
          {children}
        </Upload.Dragger>
        {
          extra && <aside className="right extra">{ extra }</aside>
        }
      </section>
    );
  }
}
