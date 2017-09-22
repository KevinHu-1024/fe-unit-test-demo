import fetchData from './fetch'

it('异步测试', async() => {
  const p = fetchData()
  await expect(p).resolves.toHaveLength(4)
})
