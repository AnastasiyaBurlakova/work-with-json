let users = [
{
  name: "Mark2",
  age: 22, 
  role: {
    isAdmin: true,
    isEditor: false
  }
},


{
  name: "Dasha",
  age: 19,
  role: {
    isAdmin: false,
    isEditor: false
  }
},

{
  name: "Mark",
  age: 22, 
  role: {
    isAdmin: false,
    isEditor: false
  }
},


{
  name: "Dasha",
  age: 19,
  role: {
    isAdmin: false,
    isEditor: false
  }
}
]  


//вывод в сonsole.log первого элемента переменной users
//console.log(users[0]["name"])
console.log(users[0]['role']['isAdmin'])


//1. создали div с id test в html
//2. сделали переменную content, которая содержит наш div с id test
let content = document.querySelector("#content")
//3. проверка что наш div с id test действительно существует
//console.log(content)
//4. обращаемся к нашей переменной content и вызываем функцию insertadjacentHTML
//content.insertAdjacentHTML('afterbegin', '<div>'+users[0]["name"]+'</div>');

//content.insertAdjacentHTML('afterbegin', '<div class="feature col"><div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"><svg class="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg></div><h3 class="fs-2">'+users[0]["name"]+'</h3><p>Paragraph of text beneath the heading to explain the heading. We will add onto it with another sentence and probably just keep going until we run out of words.</p><a href="#" class="icon-link d-inline-flex align-items-center">Call to action<svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg></a></div>');


//content.insertAdjacentHTML('afterbegin', '<div class="feature col"><div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"><svg class="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg></div><h3 class="fs-2">'+users[1]["name"]+'</h3><p>Paragraph of text beneath the heading to explain the heading. We will add onto it with another sentence and probably just keep going until we run out of words.</p><a href="#" class="icon-link d-inline-flex align-items-center">Call to action<svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg></a></div>');


// делаем с помощью цикла вместо каждого элемента, вывод сразу всех элементов


let div_html_head = '<div class="feature col"><div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">'
div_html_head = div_html_head + '<svg class="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg></div>'

for (var i = users.length - 1; i >= 0; i--) {
 
 if (users[i]['role']['isAdmin']) {
    content.insertAdjacentHTML('afterbegin', div_html_head + '<h3 class="fs-2">'+users[i]["name"]+'</h3><p>Я админ, Возраст: '+users[i]['age']+'</p><a href="#" class="icon-link d-inline-flex align-items-center">Call to action<svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg></a></div>');
 
  } else {
      content.insertAdjacentHTML('afterbegin', div_html_head + '<h3 class="fs-2">'+users[i]["name"]+'</h3><p>Возраст: '+users[i]['age']+'</p><a href="#" class="icon-link d-inline-flex align-items-center">Call to action<svg class="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg></a></div>');
 
  }
}














































