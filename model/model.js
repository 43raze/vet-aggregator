const clinics = [
  {
    id: 1,
    title: 'Ветеринарна клініка «Лапки»',
    description:
      'Повний спектр ветеринарних послуг. Досвідчені лікарі, сучасне обладнання. Працюємо 24/7.',
    rank: '4.8',
    phone: '+38 (044) 123-45-67',
    email: 'lapki@vet.ua',
    website: 'lapki-vet.ua',
    address: 'Khreshatik str. 14',
    district: 'Pecherskij',
    photos: ['clinic-a.jpg', 'clinic-b.jpg', 'clinic-c.jpg'],
    animalsKinds: ['Собака'],
    overstayDays: 3,
    city: 'Kyiv',
  },
]

function addClinic(
  title,
  description,
  phone,
  email,
  website,
  address,
  district,
  photos,
  animalsKinds,
  overstayDays,
  city,
) {
  const id = clinics.length + 1
  const clinic = {
    id,
    title,
    description,
    phone,
    email,
    website,
    address,
    district,
    photos,
    animalsKinds,
    overstayDays,
    city,
  }
  clinics.push(clinic)
  return clinic
}

const filters = {
  animalsKinds: ['Dog', 'Cat', 'Parrot'],
  cities: ['Kyiv', 'Odessa', 'Kharkiv', 'Sumy'],
  districts: ['Pecherskij', 'Darnickij', 'Shevchenkovskij'],
  overstayDaysFrom: 0,
  overstayDaysTo: 30,
  rankFrom: 0,
  rankTo: 5,
}

let isIncludes =
  filters.overstayDaysFrom < clinics[0].overstayDays &&
  clinics[0].overstayDays < filters.overstayDaysTo

const comments = [
  { id: 1, clinicId: 1, author: 'Анна', text: 'Чудова клініка, дякую лікарям' },
  { id: 2, clinicId: 1, author: 'Максим', text: 'Швидко та професійно.' },
]

function addCommentByClinicId(clinicId, author, text) {
  const id = comments.length + 1
  const comment = { id, clinicId, author, text }
  comments.push(comment)
  return comment
}

console.log(
  addClinic(
    'Клініка Дружок',
    'Опис клініки',
    '+38 (044) 999-00-11',
    'druzhok@vet.ua',
    'druzhok-vet.ua',
    'Khreshatik str. 1',
    'Pecherskij',
    [''],
    ['Кіт'],
    5,
    'Kyiv',
  ),
)
console.log(clinics)
console.log(addCommentByClinicId(1, 'Petya', 'всё супер!'))
console.log(comments)
