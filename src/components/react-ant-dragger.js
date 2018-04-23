import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import nx from 'next-js-core2';
import objectAssign from 'object-assign';
import {Upload, Icon} from 'antd';

const STATUS_DONE = 'done';
const STATUS_ERROR = 'error';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    thumbnail: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onError: PropTypes.func,
    eventValue: PropTypes.func
  };

  static defaultProps = {
    name: 'file',
    multiple: true,
    thumbnail: false,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange: noop,
    onError: noop,
    eventValue: nx.returnValue
  };
  /*===properties end===*/

  _onChange = (inEvent) => {
    const status = inEvent.file.status;
    const { onChange,onError, eventValue} = this.props;
    console.log(inEvent);
    if (status === STATUS_DONE) {
      onChange( eventValue(inEvent.file.response) );
    } else if (status === STATUS_ERROR) {
      onError(inEvent);
    }
  };

  render() {
    const {
      className,
      children,
      value,
      elements,
      thumbnail,
      eventValue,
      onChange,
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
              <img src={value} alt=""/>
            </firgure>
          )
        }
      </section>
    );
  }
}
