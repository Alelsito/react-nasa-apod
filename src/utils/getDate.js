const getDate = () => {
  let hoy = new Date()
  let day = hoy.getDate()
  let month = hoy.getMonth() + 1
  let year = hoy.getFullYear()
  let formato = `${year}-${month}-${day}`
  if (month < 10) {
    formato = `${year}-0${month}-${day}`
  }
  if (day < 10) {
    formato = `${year}-${month}-0${day}`
  }
  if (month < 10 && day < 10) {
    formato = `${year}-0${month}-0${day}`
  }

  return formato
}

export default getDate
