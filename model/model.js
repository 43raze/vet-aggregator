import { clinics } from './clinics.js'
import { addComment, comments, getClinicRankById } from './comments.js'

addComment({
  clinicId: clinics[0].id,
  author: 'Анна',
  text: 'Чудова клініка, дякую лікарям',
  rank: 5, // надо это как-то отрисовать
})

addComment({
  clinicId: clinics[0].id,
  author: 'John',
  text: 'Швидко та професійно!',
  rank: 4,
})

addComment({
  clinicId: clinics[0].id,
  author: 'John',
  text: 'Швидко та професійно!',
  rank: 3,
})

// console.log(clinics)

// console.log(comments)

console.log(getClinicRankById(clinics[0].id))
