import { fireEvent, render, screen } from '@testing-library/react'
import Home from './index';

describe('HomeScreen Component', () => {
  it('should render Home with hello message', () => {
    render(<Home />)
    screen.getByText('Hello berimbau')
  });
  it('should change message on button click', () => {
    render(<Home />)

    screen.getByText('vasco da gama');

    const button = screen.getByText(/change message/i)
    fireEvent.click(button);

    screen.getByText(/new message!/i)
  })
})