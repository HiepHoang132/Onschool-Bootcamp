"use strict"
/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
// CAR_DB: mảng chứa danh sách các đối tượng ô tô (car)
var gListCars = [
  {
    brand: "Ford",
    model: "Explorer",
    year: 2017,
    color: "White",
    carImg: "images/cars/ford_explorer_2017.png",
    vID: "AB-10111",
    owner: "Morris Mccoy",
    ownerAvatar: "images/owners/morris_mccoy.jpg",
  },
  {
    brand: "Toyota",
    model: "Corolla",
    year: 2018,
    color: "Silver",
    carImg: "images/cars/toyota_corolla_2018.png",
    vID: "DN-23218",
    owner: "Claire Robertson",
    ownerAvatar: "images/owners/claire_robertson.jpg",
  },
  {
    brand: "Mazda",
    model: "Mazda 6",
    year: 2020,
    color: "Red",
    carImg: "images/cars/mazda_2020_red.png",
    vID: "TZ-23212",
    owner: "Ted Hawkins",
    ownerAvatar: "images/owners/ted_hawkins.jpg",
  },
  {
    brand: "Toyota",
    model: "Fortuna",
    year: 2016,
    color: "Black",
    carImg: "images/cars/toyota-fortuner_black.png",
    vID: "IN-91925",
    owner: "Juanita Bell",
    ownerAvatar: "images/owners/juanita_bell.jpg",
  },
  {
    brand: "Honda",
    model: "Civic",
    year: 2020,
    color: "Black",
    carImg: "images/cars/honda_civic_2020.png",
    vID: "MN-44593",
    owner: "Clevaio Simon",
    ownerAvatar: "images/owners/clevaio_simon.jpg",
  },
]

/*** REGION 2 - Vùng gán / thực thi hàm xử lý sự kiện cho các elements */

/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
function onPageLoading() {
  // Code để chạy thử test hàm getCarByIndex()
  var vCarA = getCarByIndex(1) // hàm này trả về một đối tượng
  console.log("Car found by getCarByIndex, index = " + 1)
  console.log(vCarA.brand)
  console.log(vCarA.model)
  console.log(vCarA.color)
  renderCarsToHTML()
  var notFound = document.getElementById("div-not-found")
  notFound.style.visibility = "hidden"
}

function renderCarsToHTML() {
  var carsElement = document.getElementById("div-list-cars")
  var carHTML = ""
  for (var car of gListCars) {
    carHTML += renderOneCarToHTML(car)
  }
  carsElement.innerHTML = carHTML
}
// hàm viết object car ra HTML
function renderOneCarToHTML(car) {
  return `
        <div class="car">
            <div class="left-content">
                <img src="${car.carImg}" alt="img">
            </div>

            <div class="right-content">
                <div class="right__header">
                    <div class="right__brand">${car.brand}</div>
                    <div class="right__model">${car.model}</div>
                    <div class="right__vid">${car.vID}</div>
                </div>

                <div class="right__title">
                    ${car.brand} - ${car.model} - ${car.year} - ${car.color}
                </div>

                <div class="right__footer">
                    <div class="footer__owner">
                        <div class="avatar">
                            <img src="${car.ownerAvatar}" alt="">
                        </div>
                        <div class="owner-name">${car.owner}</div>
                    </div>
                    <div class="footer__readmore">
                        View detail 🡢
                    </div>
                </div>
            </div>
        </div>
    `
}

// hàm thực hiện sự kiện nút Tìm kiếm click
function onBtnSearchCarClick() {
  // lấy biển số cần tìm kiếm
  var vSearchVIdInput = document.getElementById("input-search-vid")
  var vSearchVId = vSearchVIdInput.value.trim()
  /** bạn hãy hoàn thiện tiếp quá trình tìm kiếm */
  var foundCar = getCarByVId(vSearchVId)
  if (foundCar === undefined) {
    var carsElement = document.getElementById("div-list-cars")
    carsElement.innerHTML = ""
    var notFound = document.getElementById("div-not-found")
    notFound.style.visibility = "visible"
  } else {
    var carsElement = document.getElementById("div-list-cars")
    carsElement.innerHTML = renderOneCarToHTML(foundCar)
  }
}

/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình */
/* đây là 01 function đã trả lại object car bởi index.
   bạn hãy tham khảo cách trả lại khi tìm thấy và không tìm thấy */
function getCarByIndex(paramIndexOfCar) {
  //if the input index not in the invalid range (index đưa vào không có trong array gCAR_DB)
  if (paramIndexOfCar < 0 || paramIndexOfCar > gListCars.length - 1) {
    return null // null là đối tượng rỗng
  }
  // nếu có thì return object ở vị trí đó
  return gListCars[paramIndexOfCar]
}

/* bạn hãy viết function trả lại car object dựa vào VID
   gợi ý tìm kiếm "while loop javascript" */
function getCarByVId(paramCarVId) {
  var foundCar = gListCars.find((car) => car.vID === paramCarVId)
  return foundCar
}
