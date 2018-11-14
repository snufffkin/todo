window.onload = function() {
  var motivation = ['Дойдя до конца, люди смеются над страхами, мучившими их вначале.',
'Если ты не знаешь, чего хочешь, ты в итоге останешься с тем, чего точно не хочешь. ',
'Чтобы дойти до цели, надо идти. ',
'Это своего рода забава, делать невозможное. ']
  var color_back = ["AliceBlue ", "Chocolate ","Crimson", "DarkBlue", "DarkMagenta", "DarkOrange"];
  //здесь мы задаем массив с цветеами, которые отображаются на to-do


  let button = document.querySelector('button');
  let wrap = document.querySelector('.tasks');
  let field = document.querySelector('input');
  let todo = document.querySelector(".todo-list");
  

  function changePhrase() {
    document.querySelector('.motivation').innerHTML = motivation[Math.round(Math.random()*(motivation.length - 1))]
  }
  //здесь у нас написана функция, которая регулирует смнеу задника на заднем плане
  setInterval(changePhrase, 10000)



//запуск смены кадров;






function createItem(){
    let text = field.value
    if (!text) {
      return
    }
    let index = Math.round(Math.random()*27);
    wrap.insertAdjacentHTML('afterbegin', `<div class='wrap-task'><div class="task">
    <img src="monsters/svg/monster-${index}.svg">
    <p>${text}</p>
</div>
<img class="trash" src="delete.svg">
</div>
 `);
 field.value = ''
    
}
  



button.onclick = function (){
    createItem();
}

document.addEventListener('keypress', (event) => {
    if(event.keyCode== 13){
        createItem();
    }
  });


document.addEventListener('keydown', function(event) {
    if (event.code == '13' && (event.ctrlKey || event.metaKey)) {
      alert('Undo!')
    }
  });






// удаление элемента
wrap.addEventListener('click', function (event) {
  if (event.target.className == 'trash') {
    event.target.closest('.wrap-task').remove()
  }
});
  









}