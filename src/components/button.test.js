// const mockFun =jest.fn();
// test('fun',()=>{
//     mockFun();
//     mockFun();
//     expect(mockFun).toHaveBeenCalledTimes(2);

// })


import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './button'
test('Render Button with label',()=>{
    const {getByText}=render(<Button label="Click me"/>)
    const buttonElement=getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
});
test('ClassName btn present',()=>{
    const {container}=render(
        <Button label="Click me"/>
    )
    const buttonElement=container.querySelector('button');
    expect(buttonElement).toHaveClass('btn')
})
test('button clicked',()=>{
    const onClickMock=jest.fn()
    const button=render(
        <Button label="Click me" 
        onClick={onClickMock} />)
        const buttonElement=button.getByText('click me');
        fireEvent.click(buttonElement)
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(2);

    
})

