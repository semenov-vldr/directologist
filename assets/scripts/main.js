"use strict";

// Отправка данных формы в Телеграм
var TOKEN = "6388509099:AAFIQyVlZ4MapEiXhH2vQJh8CyZFgFoJ_mA";
var CHAT_ID = "-1002008090284";
var URL_API = "https://api.telegram.org/bot".concat(TOKEN, "/sendMessage");
var URL_API_DOC = "https://api.telegram.org/bot".concat(TOKEN, "/sendDocument");
var forms = document.querySelectorAll("form.form");
if (forms) {
  forms.forEach(function (form) {
    return form.addEventListener("submit", sendMessageTelegram);
  });
}
function sendMessageTelegram(evt) {
  evt.preventDefault();
  var typeConnection = this.querySelector(".form__connection-fieldset input[type='radio']:checked");
  var successFormMessage = this.querySelector('.form__message--success');
  var errorFormMessage = this.querySelector('.form__message--error');
  var quiz = this.closest("#quiz");
  function formSuccess() {
    successFormMessage.classList.add('js-message-active');
    quiz && setTimeout(function () {
      return location.reload();
    }, 3000);
  }
  function formError() {
    errorFormMessage.classList.add('js-message-active');
    quiz && setTimeout(function () {
      return location.reload();
    }, 3000);
  }
  var message = "<b>\u0417\u0430\u044F\u0432\u043A\u0430 \u0414\u0438\u0437\u0430\u0439\u043D \u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430</b>\n";
  message += "<b>\u0418\u043C\u044F: ".concat(this.name.value, " </b>\n");
  message += "<b>\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ".concat(this.tel.value, " </b>\n");
  message += "<b>\u0421\u043F\u043E\u0441\u043E\u0431 \u0441\u0432\u044F\u0437\u0438: ".concat(typeConnection.value, " </b>\n");

  // Если форма в квизе
  if (quiz) {
    var areaField = quiz.querySelector(".quiz-step-2__range-field");
    var checkedRoomType = quiz.querySelector(".quiz__step-1 fieldset input[type='radio']:checked");
    var checkedBudget = quiz.querySelector(".quiz__step-3 fieldset input[type='radio']:checked");
    var checkedStyleRoom = quiz.querySelector(".quiz__step-4 fieldset input[type='radio']:checked");
    message += "<b>----------</b>\n";
    checkedRoomType ? message += "<b>\u0422\u0438\u043F \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F: ".concat(checkedRoomType.value, " </b>\n") : null;
    areaField ? message += "<b>\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F: ".concat(areaField.value, " </b>\n") : null;
    checkedBudget ? message += "<b>\u0411\u044E\u0434\u0436\u0435\u0442: ".concat(checkedBudget.value, " </b>\n") : null;
    checkedStyleRoom ? message += "<b>\u0421\u0442\u0438\u043B\u044C \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430: ".concat(checkedStyleRoom.value, " </b>\n") : null;
  }
  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message
  }).then(function () {
    console.log("Заявка отправлена");
    formSuccess();
  })["catch"](function (err) {
    console.warn(err);
    formError();
  })["finally"](function () {
    console.log("Конец");
  });
  this.reset();

  // Send Doc
  var inputFile = quiz.querySelector(".add-layout input[type='file']").files[0];
  if (inputFile) {
    var formData = new FormData();
    formData.append('chat_id', CHAT_ID);
    formData.append('document', inputFile);
    axios.post(URL_API_DOC, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function () {
      console.log("Документ отправлен");
    })["catch"](function (err) {
      console.warn(err);
    })["finally"](function () {
      console.log("Конец");
    });
    this.reset();
  }
}
;
"use strict";

var html = document.querySelector('html');
var classBlockScroll = "js-no-scroll";
function blockScrollBody() {
  if (!html.classList.contains(classBlockScroll)) {
    html.classList.add(classBlockScroll);
  }
}
;
function unblockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  }
}
;
function toggleBlockScrollBody() {
  if (html.classList.contains(classBlockScroll)) {
    html.classList.remove(classBlockScroll);
  } else {
    html.classList.add(classBlockScroll);
  }
}
;
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @typedef {Object} dNode
 * @property {HTMLElement} parent
 * @property {HTMLElement} element
 * @property {HTMLElement} to
 * @property {string} breakpoint
 * @property {string} order
 * @property {number} index
 */

/**
 * @typedef {Object} dMediaQuery
 * @property {string} query
 * @property {number} breakpoint
 */

/**
 * @param {'min' | 'max'} type
 */

useDynamicAdapt();
function useDynamicAdapt() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'max';
  var className = '_dynamic_adapt_';
  var attrName = 'data-da';

  /** @type {dNode[]} */
  var dNodes = getDNodes();

  /** @type {dMediaQuery[]} */
  var dMediaQueries = getDMediaQueries(dNodes);
  dMediaQueries.forEach(function (dMediaQuery) {
    var matchMedia = window.matchMedia(dMediaQuery.query);
    // массив объектов с подходящим брейкпоинтом
    var filteredDNodes = dNodes.filter(function (_ref) {
      var breakpoint = _ref.breakpoint;
      return breakpoint === dMediaQuery.breakpoint;
    });
    var mediaHandler = getMediaHandler(matchMedia, filteredDNodes);
    matchMedia.addEventListener('change', mediaHandler);
    mediaHandler();
  });
  function getDNodes() {
    var result = [];
    var elements = _toConsumableArray(document.querySelectorAll("[".concat(attrName, "]")));
    elements.forEach(function (element) {
      var attr = element.getAttribute(attrName);
      var _attr$split$map = attr.split(',').map(function (val) {
          return val.trim();
        }),
        _attr$split$map2 = _slicedToArray(_attr$split$map, 3),
        toSelector = _attr$split$map2[0],
        breakpoint = _attr$split$map2[1],
        order = _attr$split$map2[2];
      var to = document.querySelector(toSelector);
      if (to) {
        result.push({
          parent: element.parentElement,
          element: element,
          to: to,
          breakpoint: breakpoint !== null && breakpoint !== void 0 ? breakpoint : '767',
          order: order !== undefined ? isNumber(order) ? Number(order) : order : 'last',
          index: -1
        });
      }
    });
    return sortDNodes(result);
  }

  /**
   * @param {dNode} items
   * @returns {dMediaQuery[]}
   */
  function getDMediaQueries(items) {
    var uniqItems = _toConsumableArray(new Set(items.map(function (_ref2) {
      var breakpoint = _ref2.breakpoint;
      return "(".concat(type, "-width: ").concat(breakpoint, "px),").concat(breakpoint);
    })));
    return uniqItems.map(function (item) {
      var _item$split = item.split(','),
        _item$split2 = _slicedToArray(_item$split, 2),
        query = _item$split2[0],
        breakpoint = _item$split2[1];
      return {
        query: query,
        breakpoint: breakpoint
      };
    });
  }

  /**
   * @param {MediaQueryList} matchMedia
   * @param {dNodes} items
   */
  function getMediaHandler(matchMedia, items) {
    return function mediaHandler() {
      if (matchMedia.matches) {
        items.forEach(function (item) {
          moveTo(item);
        });
        items.reverse();
      } else {
        items.forEach(function (item) {
          if (item.element.classList.contains(className)) {
            moveBack(item);
          }
        });
        items.reverse();
      }
    };
  }

  /**
   * @param {dNode} dNode
   */
  function moveTo(dNode) {
    var to = dNode.to,
      element = dNode.element,
      order = dNode.order;
    dNode.index = getIndexInParent(dNode.element, dNode.element.parentElement);
    element.classList.add(className);
    if (order === 'last' || order >= to.children.length) {
      to.append(element);
      return;
    }
    if (order === 'first') {
      to.prepend(element);
      return;
    }
    to.children[order].before(element);
  }

  /**
   * @param {dNode} dNode
   */
  function moveBack(dNode) {
    var parent = dNode.parent,
      element = dNode.element,
      index = dNode.index;
    element.classList.remove(className);
    if (index >= 0 && parent.children[index]) {
      parent.children[index].before(element);
    } else {
      parent.append(element);
    }
  }

  /**
   * @param {HTMLElement} element
   * @param {HTMLElement} parent
   */
  function getIndexInParent(element, parent) {
    return _toConsumableArray(parent.children).indexOf(element);
  }

  /**
   * Функция сортировки массива по breakpoint и order
   * по возрастанию для type = min
   * по убыванию для type = max
   *
   * @param {dNode[]} items
   */
  function sortDNodes(items) {
    var isMin = type === 'min' ? 1 : 0;
    return _toConsumableArray(items).sort(function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.order === b.order) {
          return 0;
        }
        if (a.order === 'first' || b.order === 'last') {
          return -1 * isMin;
        }
        if (a.order === 'last' || b.order === 'first') {
          return 1 * isMin;
        }
        return 0;
      }
      return (a.breakpoint - b.breakpoint) * isMin;
    });
  }
  function isNumber(value) {
    return !isNaN(value);
  }
}
"use strict";
"use strict";

var images = document.querySelectorAll("img");
if (images) {
  images.forEach(function (img) {
    return img.setAttribute("loading", "lazy");
  });
}
"use strict";

var phoneInputs = document.querySelectorAll('input[data-tel-input]');
var getInputNumbersValue = function getInputNumbersValue(input) {
  return input.value.replace(/\D/g, "");
};
var onPhoneInput = function onPhoneInput(evt) {
  var input = evt.target;
  var inputNumbersValue = getInputNumbersValue(input);
  var formattedInputValue = "";
  var selectionStart = input.selectionStart;
  if (!inputNumbersValue) input.value = "";
  if (input.value.length !== selectionStart) {
    if (evt.data && /\D/g.test(evt.data)) {
      input.value = formattedInputValue;
    }
    return;
  }
  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    // Российские номера
    if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
    var firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";
    if (inputNumbersValue[0] === "8") {
      //phoneInputs[0].setAttribute("pattern", ".{17,}");
      console.log(phoneInputs[0].getAttribute("pattern"));
    }
    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.slice(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.slice(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.slice(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.slice(9, 11);
    }

    // Не российские номера
  } else formattedInputValue = "+" + inputNumbersValue;
  input.value = formattedInputValue;
};

// Стирание первого символа
var onPhoneKeyDown = function onPhoneKeyDown(evt) {
  var input = evt.target;
  if (evt.keyCode === 8 && getInputNumbersValue(input).length === 1) {
    input.value = "";
  }
};

// Вставка цифр в любое место
var onPhonePaste = function onPhonePaste(evt) {
  var pasted = evt.clipboardData || window.clipboardData;
  var input = evt.target;
  var inputNumbersValue = getInputNumbersValue(input);
  if (pasted) {
    var pastedText = pasted.getData("Text");
    if (/\D/g.test(pastedText)) {
      input.value = inputNumbersValue;
    }
  }
};
phoneInputs.forEach(function (input) {
  input.addEventListener('input', onPhoneInput);
  input.addEventListener("keydown", onPhoneKeyDown);
  input.addEventListener("paste", onPhonePaste);
});
"use strict";

var videoAbout = document.querySelector('.play-button');
function playShow(btnPlay, video) {
  video.play();
  btnPlay.classList.add('visually-hidden');
}
;
function pauseShow(btnPlay, video) {
  video.pause();
  btnPlay.classList.remove('visually-hidden');
}
;
if (videoAbout) {
  var parent = videoAbout.parentNode;
  var videoContent = parent.querySelector('video');
  videoAbout.addEventListener('click', function () {
    return playShow(videoAbout, videoContent);
  });
  videoContent.addEventListener('click', function () {
    return pauseShow(videoAbout, videoContent);
  });
}
"use strict";

var faq = document.getElementById("faq");
if (faq) {
  var accordionItems = faq.querySelectorAll('.faq__item'); // список элементов аккордиона
  var toggleClass = function toggleClass(item) {
    return item.classList.toggle('js-faq-active');
  };
  accordionItems.forEach(function (accordionItem) {
    accordionItem.addEventListener('click', function () {
      return toggleClass(accordionItem);
    });
  });
}
"use strict";

function mobileNav() {
  var header = document.querySelector("header.header");
  if (!header) return;
  var nav = header.querySelector(".header__nav");
  var burger = header.querySelector(".header__burger");
  var navLinks = nav.querySelectorAll(".header-nav__link");
  function closeMenu() {
    nav.classList.remove("js-mobile-nav-open");
    unblockScrollBody();
  }
  ;

  // Открытие мобильного меню Бургер
  burger.addEventListener("click", function () {
    nav.classList.toggle("js-mobile-nav-open");
    toggleBlockScrollBody();

    // Скрытие меню по клику вне блока
    if (nav.classList.contains("js-mobile-nav-open")) {
      document.addEventListener("click", function (evt) {
        if (!evt.target.closest(".header")) closeMenu();
      });
    }
  });
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", closeMenu);
  });
}
mobileNav();
"use strict";

function hideLoader() {
  var loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hide');
    setTimeout(function () {
      loader.remove();
    }, 500);
  }
}
;
window.addEventListener('load', hideLoader);