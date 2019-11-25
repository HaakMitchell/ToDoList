let btn = document.getElementById('add');
btn.addEventListener('click', function() {

  var check = document.createElement('input');
  check.type = 'checkbox';
  addEventListener('click', function() {

  });

  var para = document.createElement('P');
  para.innerHTML = '<input type="checkbox"> <button>' + document.getElementById('task').value + '</button>'
  para.addEventListener('click', function() {
    para.remove();
  })
  document.getElementById('list').appendChild(para);

});
