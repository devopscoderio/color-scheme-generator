let colorPick = document.getElementById('colorPick')
colorPick.addEventListener('change', () => {
  console.log(colorPick.value.replace('#',''))
  const hexCode = colorPick.value.replace('#','')

  fetch(`https://www.thecolorapi.com/scheme?hex=${hexCode}&format=json`)
  .then(res => res.json())
  .then(data => {
    console.log(data.colors)
    // return data.colors
let template = ""
    for(let color of data.colors){
      console.log(color.hex)

      template += `
      <div>
      <img src=${color.image.bare}>
        ${color.hex.value}
      <div>
      `
    }
    document.getElementById('colors').innerHTML = template
  })
})


const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  console.log('clicked')
  e.preventDefault()
console.log(document.getElementById('colorScheme').value)
console.log(colorPick.value)

// post scheme and color

})




