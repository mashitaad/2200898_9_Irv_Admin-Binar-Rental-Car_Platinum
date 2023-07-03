import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DialogBox from '../../../pages/car/components/DialogBox';

describe('DialogBox Component', () => {
  test('displays the delete confirmation modal when delete button is clicked', () => {
    render(<DialogBox onDelete={() => {}} />);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    const modalTitle = screen.getByText('Menghapus Data Mobil');
    expect(modalTitle).toBeInTheDocument();
  });

  test('calls the onDelete function and closes the modal when "Ya" button is clicked', () => {
    const onDeleteMock = jest.fn();
    render(<DialogBox onDelete={onDeleteMock} />);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    const confirmButton = screen.getByText('Ya');
    fireEvent.click(confirmButton);

    expect(onDeleteMock).toHaveBeenCalledTimes(1);

    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });

  test('closes the modal when "Tidak" button is clicked', () => {
    render(<DialogBox onDelete={() => {}} />);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    const cancelButton = screen.getByText('Tidak');
    fireEvent.click(cancelButton);

    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });
});