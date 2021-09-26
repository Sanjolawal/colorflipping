let button = document.querySelector('button')
console.log(button)

let Colorname = document.querySelector('span')
console.log(Colorname)

let mainbody = document.querySelector('body')
  console.log(mainbody)

 function changeNameOfColor(){
     nameOfColor = ['Green', 'blue', 'yellow', 'purple',  'teal',
    'goldenrod', 'black', 'white', 'brown', 'darkgreen', 'lightblue']
    
      nextmainbody = nameOfColor
    bgColorindex = Math.floor(Math.random()*nextmainbody.length)
   mainbody.style.backgroundColor = nextmainbody[bgColorindex]
   console.log(mainbody.style.backgroundColor)


Colorname.innerHTML =  nameOfColor[bgColorindex]
    console.log(nameOfColor[bgColorindex])
}


button.addEventListener('click', changeNameOfColor)

