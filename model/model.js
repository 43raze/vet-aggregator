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

function addClinic(title, phone, animalsKinds, overstayDays, address, city) {
  //
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

isIncludes

const comments = [
  { id: 1, clinicId: 1, author: 'Анна', text: 'Чудова клініка, дякую лікарям' },
  { id: 2, clinicId: 1, author: 'Максим', text: 'Швидко та професійно.' },
]

// function addCommentByClinicId(clinicId, author, text) {
//   // body

//   comments.push(clinicId)
// }

// addCommentByClinicId(1, 'Petya', 'всё супер!')
