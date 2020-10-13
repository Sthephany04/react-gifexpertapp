import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';



describe('Pruebas en <GifGridItem />', () => {

  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg'
  const wrapper = shallow( <GifGridItem title={ title} url={ url } /> );

  test('debe mostrar el componente correctamente', () => {
    
    expect( wrapper ).toMatchSnapshot();

  });

  test('debe tener un parrafo con el title', () => {
    
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( title );

  });

  test('debe tener la imagen igual al url y alt de los props', () => {
    
    const img = wrapper.find('img');
    //console.log( img.props().src )
    expect( img.props().src ).toBe( url );
    expect( img.props().alt ).toBe( title );
  })
  
  test('debe tener card como clase', () => {
    
    const div = wrapper.find('div');
    //console.log(div.props('className'))
    const className = div.prop('className');
    expect( className.includes('card') ).toBe( true );
    
  })
  
})