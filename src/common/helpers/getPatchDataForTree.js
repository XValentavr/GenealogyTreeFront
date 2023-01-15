export const createPatchBodyAddMore = (getDateBirth,
                                       getDateMarry,
                                       getMotherSurname,
                                       getPlaceOfBirth,
                                       getDateOfDeath,
                                       getPlaceOfDeath,
                                       getReasonOfDeath) => {
  let body = {}

  if (getDateBirth.current && getDateBirth.current.value) {
    body.dateOfBirth = getDateBirth.current.value
  }
  if (getDateMarry.current && getDateMarry.current.value) {
    body.dateOfMarry = getDateMarry.current.value
  }

  if (getMotherSurname.current && getMotherSurname.current.value) {
    body.motherSurname = getMotherSurname.current.value
  } else {
    body.motherSurname = null
  }
  if (getPlaceOfBirth.current && getPlaceOfBirth.current.value) {
    body.placeOfBirth = getPlaceOfBirth.current.value
  } else {
    body.placeOfBirth = null

  }
  if (getDateOfDeath.current && getDateOfDeath.current.value) {
    body.dateOfDeath = getDateOfDeath.current.value
  }
  if (getPlaceOfDeath.current && getPlaceOfDeath.current.value) {
    body.placeOfDeath = getPlaceOfDeath.current.value
  } else {
    body.placeOfDeath = null
  }
  if (getReasonOfDeath.current && getReasonOfDeath.current.value) {
    body.reasonOfDeath = getReasonOfDeath.current.value
  } else {
    body.reasonOfDeath = null
  }
  return body
}
