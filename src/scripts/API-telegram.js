// Отправка данных формы в Телеграм
const TOKEN = "7430554237:AAHgWfUwpVxzQ3NqPSoeYh9dNWBlSA4gLtQ";
const CHAT_ID = "-1002234427330";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;



const forms = document.querySelectorAll("form.form");

if (forms) {
  forms.forEach(form => form.addEventListener("submit", sendMessageTelegram));
}

function sendMessageTelegram (evt) {
  evt.preventDefault();

  let titlePopup;
  let selectConnection;

  if ( evt.target.classList.contains("popup__form") ) {
    titlePopup = evt.target.closest(".popup").querySelector(".popup__title").textContent;
    selectConnection = evt.target.closest(".popup").querySelector(".popup__connection-item.js-active").textContent;
  }

  const titleForm = titlePopup || "Остались вопросы";
  const inputPhone = evt.target.querySelector("input[name='phone']");
  const inputEmail = evt.target.querySelector("input[name='email']");


  let message = `<b>${titleForm}</b>\n`;
  message += `<b>Имя: ${this.name.value} </b>\n`;
  message += `<b>Способ связи: ${selectConnection || "Телефон"} </b>\n`;
  if (inputPhone.value) message += `<b>Телефон: ${this.phone.value} </b>\n`;
  if (inputEmail && inputEmail.value) message += `<b>Почта: ${this.email.value} </b>\n`;


  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  })
    .then( () => {
      console.log("Заявка отправлена");
      window.location.href = "thank-you-page.html";
    })
    .catch(err => {
      console.warn(err);
      alert("Ошибка отправки формы")
    })
    .finally(() => {
      console.log("Конец отправки формы");
    });
  this.reset();

};