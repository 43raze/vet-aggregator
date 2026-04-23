export const comments = []

export function editComment(id, dto) {
  const comment = getCommentById(id)
  if (!comment) return
  Object.assign(comment, dto)
}

export function deleteComment(id) {
  const index = comments.findIndex(c => c.id === id)
  if (index === -1) return
  comments.splice(index, 1)
}

export function getComments() {
  return comments
}

export function getCommentById(id) {
  return comments.find(c => c.id === id)
}

function createComment(dto) {
  return {
    id: Math.trunc(Math.random() * 10000),
    ...dto,
  }
}

export function addComment(dto) {
  const comment = createComment(dto)
  comments.push(comment)
}

export function getClinicRankById(clinicId) {
  return (
    comments
      .filter(c => c.clinicId === clinicId)
      .map(c => c.rank)
      .reduce((acc, item) => acc + item, 0) / comments.length
  )
}

// addComment({
//   clinicId: 33,
//   author: 'Анна',
//   text: 'Чудова клініка, дякую лікарям',
//   rank: 5, // надо это как-то отрисовать
// })

// addComment({
//   clinicId: 42,
//   author: 'John',
//   text: 'Швидко та професійно!',
//   rank: 4,
// })

// console.log(comments)
