import React from 'react';
import { render } from 'utils/test-utils';
import { describe, expect, it } from 'vitest';

import { ErrorBoundary } from '.';

const Child = () => {
  throw new Error();
};

describe('Error Boundary', () => {
  it(`should render error boundary component when there is an error`, () => {
    const { getByText } = render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>,
    );
    const errorMessage = getByText('Sorry.. there was an error');
    expect(errorMessage).toBeDefined();
  });
});
