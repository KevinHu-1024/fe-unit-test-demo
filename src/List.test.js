import React from 'react'
import { shallow, mount } from 'enzyme'
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
  // 1. 首先使用假函数，替换掉原有组件中的fetchData函数
  const mockFetch = jest.fn()
  const mockPromise = page => {
    mockFetch(page)
    return new Promise(res => res([]))
  }
    // 发现fetchData在组件内部根本无法替换
      // 1. 在constructor中统一管理外部依赖
        // 一般用于非首次渲染调用的函数，使用shallow渲染
      // 2. 使用props传入
        // 一般用于在willMount，didMount周期中调用的函数，使用mount渲染
  // 1.5 开始重构
  // 2. 渲染组件
    // shallow不跑生命周期
    // mount按真实的跑
  mount(<List fetchData={mockPromise} />)
  // 3. 检测假函数的.mock.calls[0][0]是不是等于page
  expect(mockFetch.mock.calls[0][0]).toBe(1)

})
