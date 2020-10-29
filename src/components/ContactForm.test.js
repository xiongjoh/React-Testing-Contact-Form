import React from 'react'
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import ContactForm from './ContactForm'

test('Renders ContactForm without errors', () => {
    render(<ContactForm/>)
})

test('Check form inputs and submit button', async () => {
    render(<ContactForm/>)

    //Act:
    const firstname = screen.getByLabelText(/first name/i);
    const lastname = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);

    // add text to fields
    fireEvent.change(firstname, {target: {value: 'Johnny', name:'firstName'}})
    fireEvent.change(lastname, {target: {value:'Xiong', name:'lastName'}})
    fireEvent.change(email, {target: {value:'123@gmail.com', name:'email'}})
    fireEvent.change(message, {target: {value:'Hello', name:'message'}})

    // Click button
    const submit = screen.getByTestId('button')
    fireEvent.click(submit)

    // Assert: 
    await waitFor(() => {
        expect(firstname).toHaveValue('Johnny')
        expect(lastname).toHaveValue('Xiong')
        expect(email).toHaveValue('123@gmail.com')
        expect(message).toHaveValue('Hello')
    })


    const output = screen.getByText('Johnny')
    // console.log(output)
    // expect(output).toHaveTextContent(/Edd/i)

} )