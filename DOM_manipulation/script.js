
const body = document.body
// body.append("hello world")
const div= document.createElement('div')
// const strong = document.createElement('strong')
// strong.innerText = 'hello world 2'
// div.append(strong)

const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

// console.log(spanHi.datset)
spanHi.dataset.longerName ='again'
spanHi.classList.add('new-class')
spanHi.classList.toggle('he') // remove it if already exists else add 

// console.log(spanHi.getAttribute('id'),spanHi.id)
//console.log(spanHi.setAttribute('id','myid))

// spanBye.remove()
// div.append(spanBye)

// div.removeChild(spanHi)

// div.innerHTML = "<strong> Hello world2 </strong>"



// //div.innerText = 'hello world'
// div.textContent ='helloword2'
// body.append(div)

// const div =document.querySelector('div')

// console.log(div.textContent)
// console.log(div.innerText)