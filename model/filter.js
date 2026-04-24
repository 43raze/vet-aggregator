const filters = {
  animalsKinds: ['Dog', 'Cat', 'Parrot'],
  cities: ['Kyiv', 'Odessa', 'Kharkiv', 'Sumy'],
  districts: ['Pecherskij', 'Darnickij', 'Shevchenkovskij'],
  overstayDaysFrom: 5,
  overstayDaysTo: 25,
  rankFrom: 0,
  rankTo: 5,
}

function filtrateClinicsByOverstayDays(clinics, filters) {
  const filteredClinics = []
  clinics.map()
}

const clinic = {
  id: 7299,
  rank: 0,
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

let result = isIncludes(clinic, filters)

console.log(result)

// вычислять rank динамически
// для массива клиник фильтр по overstayDays
// для массива клиник фильтр по rank
// для одной клиники по animalsKinds
// для массива клиник по animalsKinds
