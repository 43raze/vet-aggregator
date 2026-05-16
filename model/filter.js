import { getClinicRankById } from './comments.js'

const filters = {
  animalsKinds: ['Dog', 'Cat', 'Parrot'],
  cities: ['Kyiv', 'Odessa', 'Kharkiv', 'Sumy'],
  districts: ['Pecherskij', 'Darnickij', 'Shevchenkovskij'],
  overstayDaysFrom: 5,
  overstayDaysTo: 25,
  rankFrom: 0,
  rankTo: 5,
}

const clinic = {
  id: 7299,
  get rank() {
    return getClinicRankById(this.id)
  },
  photos: [],
  district: '',
  animalsKinds: [],
  overstayDays: 25,
  title: 'Клініка Дружок',
  description: 'Опис клініки',
  phone: '+38 (044) 999-00-11',
  email: 'druzhok@vet.ua',
  address: 'Khreshatik str. 1',
  city: 'Kyiv',
}

let isIncludes = (clinic, filters) =>
  filters.overstayDaysFrom <= clinic.overstayDays &&
  clinic.overstayDays <= filters.overstayDaysTo

function filtrateClinicsByOverstayDays(clinics, filters) {
  return clinics.filter(c => isIncludes(c, filters))
}

let isIncludesAnimalsKinds = (clinic, filters) =>
  clinic.animalsKinds.some(kind => filters.animalsKinds.includes(kind))

function filtrateClinicsByAnimalsKinds(clinics, filters) {
  return clinics.filter(c => isIncludesAnimalsKinds(c, filters))
}

let isIncludesRank = (clinic, filters) =>
  filters.rankFrom <= clinic.rank && clinic.rank <= filters.rankTo

function filtrateClinicsByRank(clinics, filters) {
  return clinics.filter(c => isIncludesRank(c, filters))
}

console.log(clinic.rank)
// let result = isIncludes(clinic, filters)

// console.log(result)
