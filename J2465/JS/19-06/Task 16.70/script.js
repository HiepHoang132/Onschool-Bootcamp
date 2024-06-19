"use strict"
/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
var gPersonList = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    citizenId: "c1",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    citizenId: "c2",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    age: 35,
    citizenId: "c3",
  },
]

/*** REGION 2 - Vùng gán / thực thi sự kiện cho các elements */

/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
function onBtnListPersonClick() {
  console.clear()
  for (var person of gPersonList) {
    printOnePerson(person)
  }
}

function printOnePerson(person) {
  console.log("First Name: " + person.firstName)
  console.log("Last Name: " + person.lastName)
  console.log(`Full Name: ${person.firstName} ${person.lastName}`)
  console.log("Age: " + person.age)
  console.log("Citizen ID: " + person.citizenId)
}

function onBtnFindPersonClick() {
  var citizenIDElement = document.getElementById("inp-citizenID")
  var citizenID = citizenIDElement.value.trim()

  if (citizenID === "") {
    console.clear()
    console.log("Không tìm thấy citizen nào dựa trên ID đã cho")
  } else {
    getPersonByCitizenID(citizenID)
  }
}

function getPersonByCitizenID(citizenID) {
  var i = 0
  var person = {}

  while (i < gPersonList.length) {
    if (gPersonList[i].citizenId === citizenID) {
      person = gPersonList[i]
      break
    } else {
      i++
    }
  }

  console.clear()
  printOnePerson(person)
}

function onBtnClearHTMLLogClick() {
  var vElementInputParagraph = document.getElementById("p-inner-html-log")
  vElementInputParagraph.innerHTML = ">"
}

// hàm xử lý sự kiện submit persondata
function onBtnAddPersonClick() {
  checkDataInput()
  const formElements = document.getElementsByClassName("form-control")
  for(var element of formElements){
    element.value = ""
  }
}

function checkDataInput() {
  var valid = true
  var vPerson = getDataInput()
  console.clear()
  if (vPerson.firstName === "") {
    console.log("First name nhập vào không hợp lệ!")
    valid = false
  }
  if (vPerson.lastName === "") {
    console.log("Last name nhập vào không hợp lệ!")
    valid = false
  }
  if (
    vPerson.age === "" ||
    isNaN(vPerson.age) ||
    vPerson.age < 0 ||
    vPerson.age > 220
  ) {
    console.log("Tuổi nhập vào không hợp lệ!")
    valid = false
  }
  if (vPerson.citizenId === "") {
    console.log("Citizen ID nhập vào không hợp lệ!")
    valid = false
  }

  if (valid){
    gPersonList.push(vPerson)
    console.clear()
    console.log("Đã thêm citizen vào database")
  }
}

function getDataInput() {
  // khai báo đối tượng có thuộc tính và phương thức
  var vPersonInput = {
    // thuộc tính (properties)
    firstName: "",
    lastName: "",
    age: 0,
    citizenId: "",
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
  }

  // Lấy thông tin từ form và cho vào đối tượng
  var vFirstNameInputElement = document.getElementById("inp-first-name")
  var vLastNameInputElement = document.getElementById("inp-last-name")
  var vAgeElement = document.getElementById("inp-age")
  var vCitizenIDElement = document.getElementById("inp-citizenID")

  vPersonInput.firstName = vFirstNameInputElement.value
  vPersonInput.lastName = vLastNameInputElement.value
  vPersonInput.age = vAgeElement.value
  vPersonInput.citizenId = vCitizenIDElement.value

  return vPersonInput
}
/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
