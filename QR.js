const input = document.getElementById('input');
const imgBox = document.getElementById('img-box');
const generateBtn = document.getElementById('generate-btn');
const qrCode = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
  if (input.value.length > 0) {
    imgBox.src =
      'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
      input.value;
  } else {
    setTimeout(() => {
      input.classList.add('error');
    }, 1000);
    input.classList.remove('error');
  }
});
