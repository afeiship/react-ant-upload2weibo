import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import { Upload } from 'antd';
import NxLeancloudOptions from '@afeiship/next-leancloud-options';

const CLASS_NAME = 'react-ant-upload2weibo';
const WEIBO_API = '/weibo_api/interface/pic_upload.php';
const ROOT_COOKIE = '; Path=/;';

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

  async componentDidMount() {
    const lcOpts = new NxLeancloudOptions({ id: '60f768f6d9f1465d3b1d5c43' });
    const res = await lcOpts.get();
    document.cookie = 'SUB=' + res.value + ROOT_COOKIE;
  }

  handleBeforeUpload = () => {
    console.log('click me!');
  };

  handleChange = () => {
    console.log('click me!');
  };

  render() {
    const { className, onChange, ...props } = this.props;

    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)}>
        <Upload
          name="pic1"
          action={WEIBO_API}
          listType="picture-card"
          beforeUpload={this.handleBeforeUpload}
          onChange={this.handleChange}
          {...props}>
          + 上传图片
        </Upload>
      </div>
    );
  }
}
