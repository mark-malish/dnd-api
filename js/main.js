document.querySelector('button').addEventListener('click', getFetch)

//.split(' ').join('-').toLowerCase() <-- should apply this to input

function getFetch() {    
const choice = document.querySelector('input').value
const url = `https://www.dnd5eapi.co/api/spells/${choice}`
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.spellName').innerText = data.name
      document.querySelector('.schoolMagic').innerText = data.school.name
      document.querySelector('.spellLevel').innerText = data.level
      document.querySelector('.castTime').innerText = data.casting_time
      document.querySelector('.range').innerText = data.range
      document.querySelector('.components').innerText = data.components
      document.querySelector('.duration').innerText = data.duration
      document.querySelector('.desc').innerText = data.desc
      document.querySelector('.higherLevel').innerText = data.higher_level
      data.classes.forEach(obj => {
          console.log(obj.name)
          const li = document.createElement('li')
          li.textContent = obj.name
          document.querySelector('ul').appendChild(li)
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

