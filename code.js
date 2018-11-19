
  var motivation_array = ['Дойдя до конца, люди смеются над страхами, мучившими их вначале.',
'Если ты не знаешь, чего хочешь, ты в итоге останешься с тем, чего точно не хочешь. ',
'Все победы начинаются с победы над самим собой',
'Это своего рода забава, делать невозможное. ','Неважно, кто мы такие, важно, какой у нас план'];
  //здесь мы задаем массив с фразами, которые должны нас мотивировать


  let button = document.querySelector('.button_plus');
  let tasks = document.querySelector('.tasks');
  let field = document.querySelector('input');
  let logo = document.querySelector('.logo');
  //а зачем мы задаем разные имена классам в html и js? Капитан очевидность негодуэ


    //здесь у нас написана функция, которая регулирует смену фраз на заднем плане
//прекрасная функция, но какая же длинная. Впрочем короче её не написать( а я только удлинил)
// написать её короче можно только если добавить еще одну функцию Rand
  function changePhrase() {
    document.querySelector('.motivation_speech').innerHTML = motivation_array[Math.round(Math.random()*(motivation_array.length - 1))];
    logo.className = "logo animated flash slow";
  }
  //запуск смены фраз;
  setInterval(changePhrase, 8000);
  setInterval(function(){
    logo.className = "logo";
  }, 19000);


//функция создания нового дела
function createItem(){
    let text = field.value;
    if (!text) {
      return;
      //здесь проверяем на наличие пустого поля
    }
    let index = Math.round(Math.random()*27);
    tasks.insertAdjacentHTML('afterbegin', `<div class='wrap-task'><div class="task">
    <img src="monsters/svg/monster-${index}.svg">
    <p>${text}</p>
</div>
<i class="fas fa-trash-alt trash"></i>
</div>
 `);
 field.value = '';
}
  


button.onclick = function (){
    createItem();
//здесь создается item. Но что-то мне подсказывает, что можно было переписать куда короче
}

document.addEventListener('keypress', (event) => {
    if(event.keyCode== 13){
        createItem();
    }
  });


// document.addEventListener('keydown', function(event) {
//     if (event.code == '13' && (event.ctrlKey || event.metaKey)) {
//       alert('Undo!');
//       //чего делать этот кусок кода? я хз, я откуда-то его скопировал
//     }
//   });




// удаление элемента
tasks.addEventListener('click', function (event) {
  let item = event.target.closest('i');
  let item2 = event.target.closest('.wrap-task');

  if (!item || !tasks.contains(item)) {
    return;
  }


  item2.className = "animated rollOut";
  item.style.display = "none";
  setTimeout(function(){
    item2.parentNode.removeChild(item2);
    
  }, 700)
 //эта часть получилась ппц какой сложной. Мда, зато анимации
});
  

