import classNames from 'classnames';
import React, { Component } from 'react';
import { Modal, Upload } from 'antd';

import nx from '@jswork/next';
import '@afeiship/next-leancloud-options';
import '@jswork/next-weibo-oss';

const CLASS_NAME = 'react-ant-upload2weibo';

export type ReactAntUpload2weiboProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * Preview url for oss preview.
   */
  baseURL?: string;
  /**
   * The upload props.
   */
  multiple?: boolean;
  /**
   * The change handler.
   */
  onChange?: Function;
  /**
   * The preview props.
   */
  previewProps?: any;
};

const WEIBO_LC_KEY = '60f768f6d9f1465d3b1d5c43';

export default class ReactAntUpload2weibo extends Component<ReactAntUpload2weiboProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    baseURL: 'https://tva1.js.work',
    multiple: false
  };

  private ossClient: any = null;
  private fileList: any = [];

  state = {
    previewVisible: false,
    currentIndex: -1
  };

  get done() {
    return this.fileList.every((item) => item.percent === 100);
  }

  get value() {
    const { multiple } = this.props;
    const file = this.fileList[0];
    if (!multiple) return file.response;
    return this.fileList.map((item) => item.response);
  }

  async componentDidMount() {
    const { baseURL } = this.props;
    const lcOpts = new nx.LeancloudOptions({ id: WEIBO_LC_KEY });
    const res = await lcOpts.get();
    this.ossClient = new nx.WeiboOss(res.value, { baseURL });
  }

  handleChange = (inEvent) => {
    const { onChange } = this.props;
    this.fileList = inEvent.fileList;
    if (this.done) onChange?.(this.value);
  };

  handleUploadRequest = (inEvent) => {
    const { file } = inEvent;
    this.ossClient.upload(file).then((res) => {
      inEvent.onSuccess(res[0], file);
    });
  };

  handleModelCancel = () => {
    this.setState({ previewVisible: false });
  };

  render() {
    const { className, onChange, previewProps, multiple, ...props } = this.props;
    const { currentIndex, previewVisible } = this.state;

    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)}>
        <Upload
          listType="picture-card"
          multiple
          customRequest={this.handleUploadRequest}
          onChange={this.handleChange}
          onPreview={(file) => {
            const currentIndex = this.fileList.indexOf(file);
            this.setState({ previewVisible: true, currentIndex });
          }}
          {...props}>
          + 上传图片
        </Upload>
        <Modal
          open={previewVisible}
          title="图片预览"
          width={800}
          footer={null}
          onCancel={this.handleModelCancel}
          {...previewProps}>
          {currentIndex >= 0 && (
            <img alt="example" style={{ width: '100%' }} src={this.value.url} />
          )}
        </Modal>
      </div>
    );
  }
}
