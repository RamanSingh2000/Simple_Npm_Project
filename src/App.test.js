import { render, screen } from '@testing-library/react';
import App from './App';
 
test('renders Hello World text', () => {
  render(<App />);
  const helloWorldElement = screen.getByText(/Hello Dev Team,Deployment is Successful/i);
  expect(helloWorldElement).toBeInTheDocument();
});
