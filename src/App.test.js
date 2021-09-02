import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const API_URL = 'https://api.jungledevs.com/api/v1/challenge-newsletter/';


describe('Tests for the Hero section form', () => {
  test('Submit button is not enabled if email format is not correct', () => {
    const { getByTestId } = render(<App />)

    const submitBtn = getByTestId("submit-btn")
    expect(submitBtn).toBeInTheDocument()
    expect(submitBtn).not.toBeEnabled();

    const nameInput = getByTestId('name-input')
    expect(nameInput).toBeInTheDocument()
    userEvent.type(nameInput, 'johnny')

    const emailInput = getByTestId('email-input')
    expect(emailInput).toBeInTheDocument()
    userEvent.type(emailInput, 'johnny')

    expect(submitBtn).not.toBeEnabled();

    userEvent.type(emailInput, 'johnny@email.com')
    
    expect(submitBtn).toBeEnabled();
  });

  test('User can input values to Hero section form and submit', () => {
    const { getByTestId } = render(<App />)
    jest.spyOn(global, "fetch")

    const nameInput = getByTestId('name-input')
    userEvent.type(nameInput, 'johnny')

    const emailInput = getByTestId('email-input')
    userEvent.type(emailInput, 'johnny@email.com')

    const submitBtn = getByTestId("submit-btn")
    userEvent.click(submitBtn)
    
    expect(global.fetch).toHaveBeenCalledWith(
      API_URL, {
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        "body": JSON.stringify({name: "johnny", email: "johnny@email.com"}),
        "method": "POST"
      }
    );
  });
});
