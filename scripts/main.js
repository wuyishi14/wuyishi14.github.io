let myImage = document.querySelector("img");

  myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/01.jpg") {
      myImage.setAttribute("src", "images/02.jpg");
    } 
    if (mySrc === "images/02.jpg") {
        myImage.setAttribute("src", "images/03.jpg");
    } 
    if (mySrc === "images/03.jpg") {
        myImage.setAttribute("src", "images/01.jpg");
    } 
    
  };
  let myButton = document.querySelector("button");
  let myHeading = document.querySelector("h1");
  function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎来到ly和" + myName+"的小屋";
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎来到ly和" + storedName+"的小屋";
  }
  myButton.onclick = function () {
    setUserName();
  };
  function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "欢迎来到ly和" + myName+"的小屋";
    }
  }
     
    