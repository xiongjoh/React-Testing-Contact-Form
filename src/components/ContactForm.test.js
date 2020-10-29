import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

test('Renders ContactForm without errors', () => {
    render(<ContactForm/>)
})

test('Check form inputs and submit button', () => {
    render(<ContactForm/>)

    const firstname = screen.getByLabelText(/first name/i);
    const lastname = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);
    const submit = screen.getByRole("button");

    fireEvent.change(firstname, {target: {value: 'Edd', name:'firstName'}})
} )