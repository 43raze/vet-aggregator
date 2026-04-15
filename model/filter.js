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
