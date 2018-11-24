
  var motivation_array = ['К черту все! Берись и делай!',
'Если ты не знаешь, чего хочешь, ты в итоге останешься с тем, чего точно не хочешь',
'Все победы начинаются с победы над самим собой',
'Это своего рода забава, делать невозможное','"Неважно, кто мы такие, важно, какой у нас план'];
  //здесь мы задаем массив с фразами, которые должны нас мотивировать


  let button = document.querySelector('.button_plus');
  let tasks = document.querySelector('.tasks');
  let field = document.querySelector('input');
  let logo = document.querySelector('.logo');


  // здесь у нас происходит смена цитат
  function changePhrase() {
    document.querySelector('.motivation_speech').innerHTML = motivation_array[Math.round(Math.random()*(motivation_array.length - 1))];
    logo.className = "logo animated flash slow";
  }
  //запуск смены фраз;
  setInterval(changePhrase, 8000);
  setInterval(function(){
    logo.className = "logo";
  }, 19000);
//запуск смены лого

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



// удаление элемента
tasks.addEventListener('click', function (event) {
  let item = event.target.closest('i');
  let item2 = event.target.closest('.wrap-task');

  if (!item || !tasks.contains(item)) {
    return;
  }

  item2.className = "animated flipOutX wrap-task";
  setTimeout(function(){
    item2.parentNode.removeChild(item2);
    
  }, 700)
});
  

