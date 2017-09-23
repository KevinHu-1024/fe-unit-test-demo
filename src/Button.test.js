import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from './Button'

describe('测试按钮', () => {
  it('Button组件默认渲染不报错', () => {
    shallow(<Button></Button>)
  })
  it('handleClick触发时，如果传了处理函数，则执行', () => {
    const handler = jest.fn()
    const wrapper = shallow(<Button onClick={handler}></Button>)
    wrapper.instance().handleClick()
    expect(handler).toHaveBeenCalled()
  })
  it('handleClick触发时，如果没传处理函数，则返回false', () => {
    const wrapper = shallow(<Button></Button>)
    const res = wrapper.instance().handleClick()
    expect(res).toBeFalsy()
  })
  it('当Button有children时，children应该渲染出来', () => {
    const wrapper = shallow(<Button>按钮</Button>)
    expect(wrapper.contains('按钮')).toBeTruthy()
  })
  it('当传入处理函数，并且点击时，处理函数应以一个对象为参数调用，事件类型为click', () => {
    const handler = jest.fn()
    const wrapper = mount(<Button onClick={handler}></Button>)
    wrapper.find('button').simulate('click')
    expect(handler).toHaveBeenCalled()
    expect(handler.mock.calls[0][0].type).toBe('click')
  })
})
