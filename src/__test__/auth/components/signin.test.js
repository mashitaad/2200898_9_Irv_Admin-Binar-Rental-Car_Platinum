import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignIn from '../../../pages/auth/signin/components/SignIn';

describe('SignIn Component', () => {
  test('renders SignIn component', () => {
    const { getByLabelText, getByText } = render(<SignIn />);

    const emailInput = getByLabelText('Email');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();

    const signInButton = getByText('Sign In');
    expect(signInButton).toBeInTheDocument();
  });

  test('calls onSubmit prop with form data when Sign In button is clicked', () => {
    const mockOnSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<SignIn onSubmit={mockOnSubmit} />);

    const emailInput = getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'admin@bcr.io' } });

    const passwordInput = getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const signInButton = getByText('Sign In');
    fireEvent.click(signInButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({ email: 'admin@bcr.io', password: 'password123' });
  });
});
