
export function findProductsInPage(pagination) {
  const items = []
  for (let index = 1; index < 50; index++) {
    items.push({ id: index, title: 'title' + index, desc: 'desc' + index, image: `/images/${index % 5}.jpg` })
  }
  return Promise.resolve({
    total: 100,
    items
  })
}
