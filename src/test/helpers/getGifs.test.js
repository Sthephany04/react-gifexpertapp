import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {

  test('debe traer 10 elementos', async () => {
    
    const gifs = await getGifs('Dragon Ball');

    expect( gifs.length ).toBe( 10 );
  });

  test('debe traer un arreglo dde gifs igual a cero', async () => {
    
    const gifs = await getGifs('');

    expect( gifs.length ).toBe( 0 );
  })
  
})