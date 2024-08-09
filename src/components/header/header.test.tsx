import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Header from './header';

describe('Header tests', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const user = userEvent.setup();
  const logoElement = screen.getByTestId('logo');

  it('renders the logo', async () => {
    expect(logoElement).not.toBeNull();
  });

  it('navigates to home on logo click', async () => {
    user.click(logoElement);
    expect(window.location.pathname).toBe('/');
  });
});
