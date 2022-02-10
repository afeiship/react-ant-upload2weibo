import * as React from 'react';
import { render } from '@testing-library/react';
import ReactAntUpload from '../src/main';

describe('01/basic props', () => {
  test('<ReactAntUpload /> set content to body should be worked', () => {
    render(<ReactAntUpload />);
    console.log(document.body.innerHTML);
    expect(document.body.innerHTML.includes('Enjoy coding')).toBeTruthy();
  });
});
