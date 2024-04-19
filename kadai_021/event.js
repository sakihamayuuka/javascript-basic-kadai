const btn = document.getElementById('btn');

 btn.addEventListener('click' , () => {

setTimeout(() => {
  console.log('ボタンをクリックしました');
  text.textContent = 'ボタンをクリックしました';
}, 2000);


 });