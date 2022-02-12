import * as React from 'react';
import { render } from '@testing-library/react';
import ReactAntUpload2weibo from '../src/main';

describe('01/basic props', () => {
  test('<ReactAntUpload2weibo /> set content to body should be worked', () => {
    render(<ReactAntUpload2weibo />);
    console.log(document.body.innerHTML);
    expect(document.body.innerHTML.includes('Enjoy coding')).toBeTruthy();
  });
});
