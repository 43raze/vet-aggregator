import { getClinicRankById } from './comments.js'

export const clinics = []

export function editClinic(id, dto) {
  const clinic = clinics.find(c => c.id === id)
  if (!clinic) return
  Object.assign(clinic, dto)
}

export function deleteClinic(id) {
  const index = clinics.findIndex(c => c.id === id)
  if (index === -1) return
  clinics.splice(index, 1)
}

export function getClinics() {
  return clinics
}

export function getClinicById(id) {
  return clinics.find(c => c.id === id)
}

function createClinic(dto) {
  const id = Math.trunc(Math.random() * 10000)

  return {
    id,
    rank: getClinicRankById(id),
    photos: [],
    district: '',
    animalsKinds: [],
    overstayDays: 0,
    ...dto,
  }
}

function addClinic(dto) {
  const clinic = createClinic(dto)
  clinics.push(clinic)
}

addClinic({
  title: 'Клініка Дружок',
  description: 'Опис клініки',
  phone: '+38 (044) 999-00-11',
  email: 'druzhok@vet.ua',
  address: 'Khreshatik str. 1',
  city: 'Kyiv',
})

// addClinic({
//   title: 'Ветеринарна клініка «Лапки»',
//   description:
//     'Повний спектр ветеринарних послуг. Досвідчені лікарі, сучасне обладнання. Працюємо 24/7.',
//   phone: '+38 (044) 123-45-67',
//   email: 'lapki@vet.ua',
//   address: 'Khreshatik str. 14',
//   city: 'Kyiv',
// })

// console.log(clinics)

// console.log(getClinics())

// console.log('after:', clinics)
// deleteClinic(clinics[0].id)
// console.log('before:', clinics)
