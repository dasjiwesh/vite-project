import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Home'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(//i);
  expect(linkElement).toBeInTheDocument();
});


describe('Checks the title component', () => {
    
  it('checks the value of the Title component', () => {
      const { getByText } = render(<Title />);
      const titleValue = getByText('MY RTL PROJECT')
      expect(titleValue).toBe('MY RTL PROJECT')
  })
})
