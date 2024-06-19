"use strict"
/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
var gPersonList = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    citizenId: "c1",
    address: "123 Main St, Anytown, USA",
    fullName: function () {
      return this.firstName + " " + this.lastName
    },
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    gender: "Female",
    citizenId: "c2",
    address: "456 Elm St, Othertown, USA",
    fullName: function () {
      return this.firstName + " " + this.lastName
    },
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    age: 35,
    gender: "Female",
    citizenId: "c3",
    address: "789 Maple St, Sometown, USA",
    fullName: function () {
      return this.firstName + " " + this.lastName
    },
  },
]

/*** REGION 2 - Vùng gán / thực thi sự kiện cho các elements */

/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
// hàm xử lý sự kiện clear HTML Log
function onPageLoading(){
    getPersonByIndex(1)
    getPersonByCitizenID("c3")
}

function getPersonByIndex(index){
    var person = gPersonList[index]
    console.log("First Name: " + person.firstName)
    console.log("Last Name: " + person.lastName)
    console.log("Full Name: " + person.fullName())
    console.log("Age: " + person.age)
    console.log("Gender: " + person.gender)
    console.log("Citizen ID: " + person.citizenId)
    console.log("Address: " + person.address)
}

function getPersonByCitizenID(citizenID){
    var i = 0;
    var person = {}
    console.log(gPersonList.length)

    while(i < gPersonList.length){
        if(gPersonList[i].citizenId === citizenID){
            person = gPersonList[i]
            break
        } else {
            i++
        }
    }

    console.log("First Name: " + person.firstName)
    console.log("Last Name: " + person.lastName)
    console.log("Full Name: " + person.fullName())
    console.log("Age: " + person.age)
    console.log("Gender: " + person.gender)
    console.log("Citizen ID: " + person.citizenId)
    console.log("Address: " + person.address)
}

function onBtnClearHTMLLogClick() {
  var vElementInputParagraph = document.getElementById("p-inner-html-log")
  vElementInputParagraph.innerHTML = ">"
}

// hàm xử lý sự kiện submit persondata
function onBtnSubmitPersonClick() {
  // khai báo đối tượng có thuộc tính và phương thức
  var vPersonInput = {
    // thuộc tính (properties)
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    citizenId: "",
    address: "",
    // method (phương thức) fullName
    fullName: function () {
      return this.firstName + " " + this.lastName
    },
    // phương thức kiểm tra tuổi
    isAgeValid: function () {
      if (isNaN(this.age)) {
        return false
      }
      if (this.age < 0 || this.age > 220) {
        return false
      }

      return true
    },
    // method displayInHTMLLog -- hiện thị ra luôn trên web
    displayInHTMLLog: function () {
      // gọi phương thức để kiểm tra tuổi, nếu tuổi hợp lệ thì mới hiển thị thông tin ra
      if (this.isAgeValid() == true) {
        // write to HTML log
        writeToHTMLLog("First Name: " + this.firstName)
        writeToHTMLLog("Last Name: " + this.lastName)
        writeToHTMLLog("Full Name: " + this.fullName())
        writeToHTMLLog("Age: " + this.age)
        writeToHTMLLog("Gender: " + this.gender)
        writeToHTMLLog("Citizen ID: " + this.citizenId)
        writeToHTMLLog("Address: " + this.address)
      } // tuổi ko hợp lệ thì ghi ra là không hợp lệ
      else {
        writeToHTMLLog("Tuổi nhập vào không hợp lệ!")
      }
    },
  }

  // Lấy thông tin từ form và cho vào đối tượng
  var vFirstNameInputElement = document.getElementById("inp-first-name")
  var vLastNameInputElement = document.getElementById("inp-last-name")
  var vAgeElement = document.getElementById("inp-age")
  var vGenderElement = document.getElementById("select-gender")
  var vCitizenIDElement = document.getElementById("inp-citizenID")
  var vAddressElement = document.getElementById("inp-address")

  vPersonInput.firstName = vFirstNameInputElement.value
  vPersonInput.lastName = vLastNameInputElement.value
  vPersonInput.age = parseInt(vAgeElement.value)
  vPersonInput.gender = vGenderElement.value
  vPersonInput.citizenId = vCitizenIDElement.value
  vPersonInput.address = vAddressElement.value

  // Gọi phương thức hiển thị thông tin đối tượng ra HTML Log
  vPersonInput.displayInHTMLLog()
}

/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
// write to HTML Log thay vì ghi vào Console
function writeToHTMLLog(paramStrToWrite) {
  var vElementInputParagraph = document.getElementById("p-inner-html-log")
  vElementInputParagraph.innerHTML += paramStrToWrite + "<br>" + ">"
}
