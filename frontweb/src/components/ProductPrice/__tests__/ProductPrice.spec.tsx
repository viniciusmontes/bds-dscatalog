import { render, screen } from '@testing-library/react';
import ProductPrice from '..';
import { formatPrice } from 'util/formatters';

test('should render ProductPrice', () => {
  const price = 10.1;

  render(<ProductPrice price={price} />);

  // espera que tenha no documento
  expect(screen.getByText('R$')).toBeInTheDocument();
  expect(screen.getByText('10,10')).toBeInTheDocument();
});
