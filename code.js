// window.onload = function() {
  // я закомментировал загрузку, зато добавил async  к script в html. Так короче
  var motivation_array = ['Дойдя до конца, люди смеются над страхами, мучившими их вначале.',
'Если ты не знаешь, чего хочешь, ты в итоге останешься с тем, чего точно не хочешь. ',
'Чтобы дойти до цели, надо идти. ',
'Это своего рода забава, делать невозможное. '];
  //здесь мы задаем массив с фразами, которые должны нас мотивировать


  let button = document.querySelector('.button_plus');
  let wrap = document.querySelector('.tasks');
  let field = document.querySelector('input');
  //а зачем мы задаем разные имена классам в html и js? Капитан очевидность негодуэ


    //здесь у нас написана функция, которая регулирует смену фраз на заднем плане
//прекрасная функция, но какая же длинная. Впрочем короче её не написать( а я только удлинил)
  function changePhrase() {
    document.querySelector('.motivation').innerHTML = motivation_array[Math.round(Math.random()*(motivation_array.length - 1))]
  }
  //запуск смены кадров;
  setInterval(changePhrase, 10000);



//функция создания нового дела
function createItem(){
    let text = field.value
    if (!text) {
      return;
      //здесь проверяем на наличие пустого поля
    }
    let index = Math.round(Math.random()*27);
    wrap.insertAdjacentHTML('afterbegin', `<div class='wrap-task'><div class="task">
    <img src="monsters/svg/monster-${index}.svg">
    <p>${text}</p>
</div>
<i class="fas fa-trash-alt trash"></i>
</div>
 `);
 //там я поменял мусор на библиотечный. хех
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


document.addEventListener('keydown', function(event) {
    if (event.code == '13' && (event.ctrlKey || event.metaKey)) {
      alert('Undo!');
      //чего делать этот кусок кода? я хз, я откуда-то его скопировал
    }
  });




// удаление элемента
wrap.addEventListener('click', function (event) {
  let item = event.target.closest('i');
  let item2 = event.target.closest('.wrap-task');

  if (!item || !wrap.contains(item)) {
    return;
  }


  item2.className = "animated zoomOutLeft";
  setTimeout(function(){
    item2.className = "trans";
  }, 600)
 //эта часть получилась ппц какой сложной. Мда, зато анимации
});
  


// }