const data = [
  { text: '智', id: 1 },
  { text: '课', id: 2 },
  { text: '教', id: 3 },
  { text: '育', id: 4 },
]
export default function fetchDate(page) {
  return new Promise((res) => {
    setTimeout(function() {
      res(data)
    }, 2000);
  })
}