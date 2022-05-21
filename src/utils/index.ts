import { createGlobalStyle, css } from 'styled-components';

export const calcTipPerPerson = (billAmount: number, guestNumber: number, tipPercentage: number) => {
  return ((billAmount * (tipPercentage / 100)) / guestNumber).toFixed(2);
};

export const calcTotalPerPerson = (
  billAmount: number,
  guestNumber: number,
  tipPercentage: number,
) => {
  return (
    billAmount / guestNumber +
    (billAmount * (tipPercentage / 100)) / guestNumber
  ).toFixed(2);
};

const fonts = css`
  @font-face {
    font-family: 'SpaceMono';
    font-style: normal;
    font-weight: 400;
    src: url('src/assets/fonts/SpaceMono/SpaceMono-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'SpaceMono';
    font-style: italic;
    font-weight: 400;
    src: url('src/assets/fonts/SpaceMono/SpaceMono-Italic.ttf') format('truetype');
  }
  @font-face {
    font-family: 'SpaceMono';
    font-style: normal;
    font-weight: 600;
    src: url('src/assets/fonts/SpaceMono/SpaceMono-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'SpaceMono';
    font-style: italic;
    font-weight: 600;
    src: url('src/assets/fonts/SpaceMono/SpaceMono-BoldItalic.ttf') format('truetype');
  }
`;

export const GlobalStyles = createGlobalStyle`
${fonts}

:root {
  --color-very-dark: hsl(183, 100%, 15%);
  --color-dark-grayish: hsl(186, 14%, 43%);
  --color-grayish-cyan: hsl(184, 14%, 56%);
  --color-light-grayish-cyan: hsl(185, 41%, 84%);
  --color-very-light-grayish-cyan: hsl(189, 41%, 97%);
  --color-white: hsl(0, 0%, 100%);
  --color-mb-green: hsl(183, 79%, 24%);
  --color-mb-blue: hsl(172, 67%, 45%);
  --color-hover-btn: hsl(173, 61%, 77%);
  --color-red: hsl(13, 70%, 60%);
  --font-weight-600: 600;
  --font-weight-400: 400;
  --color-light-white: #c5e4e7;
  --default-size: 24px;
  --size-2: 2px;
  --size-4: 4px;
  --size-6: 6px;
  --size-8: 8px;
  --size-10: 10px;
  --size-12: 12px;
  --size-14: 14px;
  --size-16: 16px;
  --size-32: 32px;
  --size-48: 48px;
  --size-378: 378px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html:focus-within {
  scroll-behavior: smooth;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

body {
  font-family: 'SpaceMono', sans-serif;
  font-size: var(--default-size);
  font-weight: var(--font-weight-400);
  background-color: var(--color-light-white);
  font-style: normal;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
