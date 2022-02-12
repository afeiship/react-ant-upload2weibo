import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import { Upload } from 'antd';
import NxLeancloudOptions from '@afeiship/next-leancloud-options';
import NxWeiboOss from '@jswork/next-weibo-oss';

const CLASS_NAME = 'react-ant-upload2weibo';

export type ReactAntUpload2weiboProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * The change handler.
   */
  onChange?: Function;
};

export default class ReactAntUpload2weibo extends Component<ReactAntUpload2weiboProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    onChange: noop
  };

  private ossClient: any = null;

  async componentDidMount() {
    const lcOpts = new NxLeancloudOptions({ id: '60f768f6d9f1465d3b1d5c43' });
    const res = await lcOpts.get();
    this.ossClient = new NxWeiboOss(res.value);
  }

  handleBeforeUpload = () => {
    console.log('click me!');
  };

  handleChange = (inEvent) => {
    if(inEvent.percent === 100) {
      console.log('change.!', inEvent);
    }
  };

  handleUploadRequest = (inEvent) => {
    this.ossClient.upload(inEvent.file).then((res) => {
      console.log('res:', res[0].url);
      inEvent.onSuccess(res[0].url);
    });
  };

  render() {
    const { className, onChange, ...props } = this.props;

    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)}>
        <Upload
          listType="picture-card"
          multiple
          beforeUpload={this.handleBeforeUpload}
          customRequest={this.handleUploadRequest}
          onChange={this.handleChange}
          {...props}>
          + 上传图片
        </Upload>
      </div>
    );
  }
}
