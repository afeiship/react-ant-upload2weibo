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
    thumbnail: PropTypes.bool,
    value: PropTypes.string
  };

  static defaultProps = {
    name: 'file',
    multiple: true,
    thumbnail: false,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange: noop,
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
      value,
      elements,
      thumbnail,
      ...props
    } = this.props;

    return (
      <section data-align='flex-start' className={classNames('webkit-sassui-flex-lauto-rfixed react-ant-dragger', className)} {...props}>
        <Upload.Dragger
          {...props}
          className="left"
          onChange={this._onChange}>
          {children}
        </Upload.Dragger>
        {
          thumbnail && (
            <firgure className="right">
              <img src={value} width="150" height="150" alt=""/>
            </firgure>
          )
        }
      </section>
    );
  }
}
