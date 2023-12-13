import { render, fireEvent, screen, waitFor } from '@testing-library/react-native'
import React from 'react'
import SignIn from '../../components/SignIn'

describe('Sign in form', () => {
  it('calls function provided by onSubmit after submitting', async () => {
    const onSubmit = jest.fn()
    render(<SignIn submitFunction={onSubmit} />)
    screen.debug()
    fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
    fireEvent.press(screen.getByText('Sign in'));
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toStrictEqual({ username: 'kalle', password: 'password' })
    })

  })
})