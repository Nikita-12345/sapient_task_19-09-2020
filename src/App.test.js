import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Filter from './Component/filter';
import ItemList from './Component/itemList';

const wrapper = shallow(<App />);

it('should render filter comp', ()=>{  
  const filter = wrapper.find(Filter);
  expect(filter.exists()).toBe(true);
})

it('should render itemList comp', ()=>{
  const itemList = wrapper.find(ItemList);
  expect(itemList.exists()).toBe(true);
})
