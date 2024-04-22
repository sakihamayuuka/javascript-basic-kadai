
const btn = document.getElementById('btn');
const text = document.getElementById('text');


btn.addEventListener('click' , () => {
   console.log('ボタンをクリックしました');
  text.textContent = 'ボタンをクリックしました';

});

