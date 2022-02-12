import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import { Modal, Upload } from 'antd';

const CLASS_NAME = 'react-ant-upload-media';

export type ReactAntUploadMediaProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * Before upload.
   */
  onUpload?: Function;
  /**
   * The change handler.
   */
  onChange?: Function;
};

export default class ReactAntUploadMedia extends Component<ReactAntUploadMediaProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    onUpload: noop,
    onChange: noop
  };

  state = {
    previewVisible: false
  };

  handleChange = (inEvent) => {
    const { fileList } = inEvent;
    console.log('click me!', fileList);
  };

  handleUpload = (inEvent) => {
    const { onUpload } = this.props;
    onUpload!({ target: { value: inEvent } });
  };

  handleModelClose = () => {
    this.setState({ previewVisible: false });
  };

  render() {
    const { className, onChange, onUpload, ...props } = this.props;
    const { previewVisible } = this.state;

    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)} {...props}>
        <Upload
          onChange={this.handleChange}
          beforeUpload={this.handleUpload}
          listType='picture-card'
          {...props}
        >
          + 点击上传
        </Upload>
        <Modal
          visible={previewVisible}
          title='预览'
          footer={null}
          onCancel={this.handleModelClose}
        >
          <img alt='example' style={{ width: '100%' }}
               src='https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg' />
        </Modal>
      </div>
    );
  }
}
