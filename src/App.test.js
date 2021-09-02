import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const API_URL = 'https://api.jungledevs.com/api/v1/challenge-newsletter/';


describe('Tests for the Nanny share landing page', () => {
  test('User can input values to Hero section form and submit', () => {
    const { getByTestId } = render(<App />)
    jest.spyOn(global, "fetch")

    const nameInput = getByTestId('name-input')
    expect(nameInput).toBeInTheDocument()
    userEvent.type(nameInput, 'johnny')

    const emailInput = getByTestId('email-input')
    expect(emailInput).toBeInTheDocument()
    userEvent.type(emailInput, 'johnny@email.com')

    const submitBtn = getByTestId("submit-btn")
    expect(submitBtn).toBeInTheDocument()
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
