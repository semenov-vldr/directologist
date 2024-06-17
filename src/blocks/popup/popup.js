const popup = document.querySelector("#popup");

if (popup) {

  // Tabs connection
  const popupConnectionItems = popup.querySelectorAll(".popup__connection .popup__connection-item");
  popupConnectionItems.forEach(btn => {
    btn.addEventListener("click", () => {
      popupConnectionItems.forEach(btn => btn.classList.remove("js-active"));
      btn.classList.add("js-active");
    });
  });


  const popupLinks = document.querySelectorAll(".popup-link");
  const popupTitle = popup.querySelector(".popup__title");
  const popupClose = popup.querySelector(".popup__close");

  popupLinks.forEach(popupLink => {
    popupLink.addEventListener("click", (evt) => {
      popupTitle.textContent = popupLink.dataset.popupTitle;
      popup.classList.add("js-popup-open");
      blockScrollBody();
    });
  });

  popupClose.addEventListener("click", closePopup);

  document.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      closePopup();
    }
  })

  function closePopup () {
    popup.classList.remove("js-popup-open");
    unblockScrollBody();
  }

}