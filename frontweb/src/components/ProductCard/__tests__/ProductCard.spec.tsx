import { render, screen } from '@testing-library/react';
import ProductCard from '..';
import { Product } from 'types/product';


test('should render ProductCard', () => {

  const product : Product = {
    name : 'DVD',
    description: 'leitor de discos',
    price: 150.1,
    imgUrl: 'https://m.media-amazon.com/images/I/619ur+XXcUS._AC_UF1000,1000_QL80_.jpg',
    
  } as Product

  render(<ProductCard product={product}/>);


  

  // espera que tenha no documento
  expect(screen.getByText(product.name)).toBeInTheDocument();
  expect(screen.getByAltText(product.name)).toBeInTheDocument();
  expect(screen.getByText('R$')).toBeInTheDocument();
  expect(screen.getByText('150,10')).toBeInTheDocument();
});
