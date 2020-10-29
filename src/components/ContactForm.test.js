import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
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

    act(() => {
        fireEvent.change(firstname, {target: {value: 'Edd', name:'firstName'}})
        expect(firstname).toHaveValue('Edd')

        fireEvent.change(lastname, {target: {value:'Burke', name:'lastName'}})
        expect(lastname).toHaveValue('Burke')

        fireEvent.change(email, {target: {value:'123@gmail.com', name:'email'}})
        expect(email).toHaveValue('123@gmail.com')

        fireEvent.change(message, {target: {value:'Hello', name:'message'}})
        expect(message).toHaveValue('Hello')
    })
    // act(() => {
    //     fireEvent.click(submit)
    //     expect
    // })
} )