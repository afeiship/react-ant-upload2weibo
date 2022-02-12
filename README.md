# react-ant-upload-media
> React ant upload files.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-upload-media
```

## usage
1. import css
  ```scss
  @import "~@jswork/boilerplate-react-component/dist/style.css";

  // or use sass
  @import "~@jswork/boilerplate-react-component/dist/style.scss";

  // customize your styles:
  $boilerplate-react-component-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactAntUploadMedia from '@jswork/boilerplate-react-component';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactAntUploadMedia />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-ant-upload-media/

## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-upload-media/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-upload-media
[version-url]: https://npmjs.org/package/@jswork/react-ant-upload-media

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-upload-media
[license-url]: https://github.com/afeiship/react-ant-upload-media/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-upload-media
[size-url]: https://github.com/afeiship/react-ant-upload-media/blob/master/dist/react-ant-upload-media.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-upload-media
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-upload-media
