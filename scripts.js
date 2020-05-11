var currentDate = document.getElementById('currentDay');
currentDate.textContent = moment().format('dddd MM YYYY');

var saveBtn1 = document.getElementById('saveBtn1');
var description1 = document.getElementById('description1');
var time1 = document.getElementById('time1');

if (localStorage.getItem(time1.textContent)) {
description1.value = localStorage.getItem(time1.textContent)
}
saveBtn1.addEventListener('click', function() {
var key = time1.textContent;
var value = description1.value;
localStorage.setItem(key, value);
});

var saveBtn2 = document.getElementById('saveBtn2');
var description2 = document.getElementById('description2');
var time2 = document.getElementById('time2');

if (localStorage.getItem(time2.textContent)) {
description2.value = localStorage.getItem(time2.textContent)
}
saveBtn2.addEventListener('click', function() {
var key = time2.textContent;
var value = description2.value;
localStorage.setItem(key, value);
});

var saveBtn3 = document.getElementById('saveBtn3');
var description3 = document.getElementById('description3');
var time3 = document.getElementById('time3');

if (localStorage.getItem(time3.textContent)) {
description3.value = localStorage.getItem(time3.textContent)
}
saveBtn3.addEventListener('click', function() {
var key = time3.textContent;
var value = description3.value;
localStorage.setItem(key, value);
});

var saveBtn4 = document.getElementById('saveBtn4');
var description4 = document.getElementById('description4');
var time4 = document.getElementById('time4');

if (localStorage.getItem(time4.textContent)) {
description4.value = localStorage.getItem(time4.textContent)
}
saveBtn4.addEventListener('click', function() {
var key = time4.textContent;
var value = description4.value;
localStorage.setItem(key, value);
});

var saveBtn5 = document.getElementById('saveBtn5');
var description5 = document.getElementById('description5');
var time5 = document.getElementById('time5');

if (localStorage.getItem(time5.textContent)) {
description5.value = localStorage.getItem(time5.textContent)
}
saveBtn5.addEventListener('click', function() {
var key = time5.textContent;
var value = description5.value;
localStorage.setItem(key, value);
});

var saveBtn6 = document.getElementById('saveBtn6');
var description6 = document.getElementById('description6');
var time6 = document.getElementById('time6');

if (localStorage.getItem(time6.textContent)) {
description6.value = localStorage.getItem(time6.textContent)
}
saveBtn6.addEventListener('click', function() {
var key = time6.textContent;
var value = description6.value;
localStorage.setItem(key, value);
});

var saveBtn7 = document.getElementById('saveBtn7');
var description7 = document.getElementById('description7');
var time7 = document.getElementById('time7');

if (localStorage.getItem(time7.textContent)) {
description7.value = localStorage.getItem(time7.textContent)
}
saveBtn7.addEventListener('click', function() {
var key = time7.textContent;
var value = description7.value;
localStorage.setItem(key, value);
});

var saveBtn8 = document.getElementById('saveBtn8');
var description8 = document.getElementById('description8');
var time8 = document.getElementById('time8');

if (localStorage.getItem(time8.textContent)) {
description8.value = localStorage.getItem(time8.textContent)
}
saveBtn8.addEventListener('click', function() {
var key = time8.textContent;
var value = description8.value;
localStorage.setItem(key, value);
});

var saveBtn9 = document.getElementById('saveBtn9');
var description9 = document.getElementById('description9');
var time9 = document.getElementById('time9');

if (localStorage.getItem(time9.textContent)) {
description9.value = localStorage.getItem(time9.textContent)
}
saveBtn9.addEventListener('click', function() {
var key = time9.textContent;
var value = description9.value;
localStorage.setItem(key, value);
});

var saveBtn10 = document.getElementById('saveBtn10');
var description10 = document.getElementById('description10');
var time10 = document.getElementById('time10');

if (localStorage.getItem(time10.textContent)) {
description10.value = localStorage.getItem(time10.textContent)
}
saveBtn10.addEventListener('click', function() {
var key = time10.textContent;
var value = description10.value;
localStorage.setItem(key, value);
});


