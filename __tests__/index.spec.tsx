import * as React from 'react';
import { render } from '@testing-library/react';
import ReactAntUploadMedia from '../src/main';

describe('01/basic props', () => {
  test('<ReactAntUploadMedia /> set content to body should be worked', () => {
    render(<ReactAntUploadMedia />);
    console.log(document.body.innerHTML);
    expect(document.body.innerHTML.includes('Enjoy coding')).toBeTruthy();
  });
});
