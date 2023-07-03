import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SignInPage from '../../pages/auth/signin/SignInPage';
import { Provider } from 'react-redux';
import store from '../../store';

describe('SignInPage Component', () => {
    test('calls onSubmit function with correct form data when Sign In button is clicked', () => {
        const mockOnSubmit = jest.fn();
        const { getByLabelText, getByText } = render(
            <Router>
                <Provider store={store}>
                    <SignInPage onSubmit={mockOnSubmit} />
                </Provider>
            </Router>
        );

        const emailInput = getByLabelText('Email');
        fireEvent.change(emailInput, { target: { value: 'admin@bcr.io' } });

        const passwordInput = getByLabelText('Password');
        fireEvent.change(passwordInput, { target: { value: '123456' } });

        const signInButton = getByText('Sign In');
        fireEvent.click(signInButton);

        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit).toHaveBeenCalledWith({
            email: 'admin@bcr.io',
            password: '123456',
        });


    });
});
