import React from 'react';
import { render, screen, userEvent } from 'utils/test-utils';
import { describe, expect, it } from 'vitest';

import { Tip } from '.';

describe('Tip component', () => {
  let tipPercentage = 10;
  const handleChange = () => {};
  it('Tip custom false', async () => {
    render(
      <Tip
        currentPrecent={25}
        tipPercentage={tipPercentage}
        handleChangeProps={handleChange}
        custom={false}
      />,
    );
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/25%/i)).toBeInTheDocument();
  });
});
