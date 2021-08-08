const swup = new Swup();



let controllerNav = document.getElementById('controllerNav');
let hiddenMenu = document.getElementById('hiddenMenu');
let closeMark = document.getElementById('closeMark')
console.log('random')


window.addEventListener('resize',function(){
  if(window.innerWidth < 768){
      
    console.log('working')
    /* Need to add a class instead of directly injecting styles */
    controllerNav.addEventListener('click',()=>{
      hiddenMenu.classList.remove('toggleSmall')
      hiddenMenu.classList.add('toggle')
    })

    /* When Something is clicked in the menu, close the menu as-well*/

    hiddenMenu.addEventListener('click',(event)=>{
    if(event.target.classList.contains('click') ) {
      console.log(event.target)
      hiddenMenu.classList.remove('toggle')
      hiddenMenu.classList.add('toggleSmall')
    }
    else {
      console.log('random')
    }

    })

  document.addEventListener('mouseup',function(event){
    if(event.target != hiddenMenu){
      hiddenMenu.classList.remove('toggle')
      hiddenMenu.classList.add('toggleSmall')
    }
  })
}
})
