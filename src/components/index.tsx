import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import { Upload } from 'antd';
import filterProps from '@jswork/filter-react-props';

const CLASS_NAME = 'react-ant-upload';

export type ReactAntUploadProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * Default value.
   */
  value?: object;
  /**
   * The change handler.
   */
  onChange?: Function;
};

export default class ReactAntUpload extends Component<ReactAntUploadProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: null,
    onChange: noop
  };

  handleChange = (inEvent) => {
    console.log('click me!', inEvent);
  };

  render() {
    const { className, value, onChange, ...props } = this.props;
    const theProps = filterProps(props);

    return (
      <Upload
        multiple={false}
        beforeUpload={() => Upload.LIST_IGNORE}
        onChange={this.handleChange}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...theProps}>
        Upload
      </Upload>
    );
  }
}
