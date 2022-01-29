const ruLanguageButton = document.querySelector('#RU')
const uaLanguageButton = document.querySelector('#UA')

function selectLanguage (link) {
  window.location.href = link
}

uaLanguageButton.addEventListener('click', () => {
  selectLanguage('../UaHTML/index.html')
})

ruLanguageButton.addEventListener('click', () => {
  selectLanguage('../index.html', ruLanguageButton)
})

const mapOpenButton = document.querySelector('#mapButton')
const mapPopup = document.querySelector('.yandex-map__popup')
const mapCloseButton = document.querySelector('#mapCloseButton')

function openMap () {
  mapPopup.classList.add('map-visible')
}

function closeMap () {
  mapPopup.classList.remove('map-visible')
  popupImages.classList.remove('popup-opened')
}
mapOpenButton.addEventListener('click', openMap)
mapCloseButton.addEventListener('click', closeMap)
mapPopup.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('map-visible')) {
    closeMap()
  };
})

const sertificates = document.querySelectorAll('.sertificate-image')
const popupImages = document.querySelector('.popup-images')
const popupImagesProp = document.querySelector('.popup_images-properties')
const popupImagesCloseButton = document.querySelector('#imagesPopClose')



function openPopup (popup) {
  popup.classList.add('popup-opened')
}
function closePopup(popup) {
  popup.classList.remove('popup-opened')
}
function handleEscClose (popup) {
  document.addEventListener('keydown', (evt) => {
    if(popup.classList.contains('popup-opened') && evt.key === 'Escape') {
      closePopup(popup)
    }
  })
}

sertificates.forEach((item) => {
  item.addEventListener('click', (evt) => {
    popupImagesProp.src = evt.target.src;
    openPopup(popupImages)
  })  
})
popupImages.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('popup-opened')) {
    closePopup(popupImages)
  };
})

popupImagesCloseButton.addEventListener('click', () => {
  closePopup(popupImages)
})

handleEscClose(popupImages)