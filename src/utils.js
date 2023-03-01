export const generateList = (elements = 10) => {
  return Array(elements)
    .fill(0)
    .map((_, index) => {
      return {
        id: `uuid${index + 1}`,
        title: `Title ${index + 1}`,
        text: `Text ${(index + 1) * 5}`,
      }
    })
}
