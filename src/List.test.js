import React from 'react'
import { shallow } from 'enzyme'
import List from './List'

it('默认渲染不报错', () => {
  shallow(<List />)
})

it('初始渲染之后，state应该是data为空, ready为false', () => {
  const wrapper = shallow(<List />)
  const exceptedState = {
    data: [],
    ready: false,
  }
  expect(wrapper.state()).toMatchObject(exceptedState)
})

it('渲染完成后，默认应该请求第一页的数据，传参page=1', () => {

})
