function changeText() {
    var nameArray = [
      "SIT719 - Security and Privacy issue in Analytics",
      "SIT753 - Professional Practice in IT",
      "SIT726 - Information Technology innovations and Enterpreneurship",
      "INTRODUCTION TO PROGRAMMING",
      "WELCOME TO SIT725!",
    ];
    var number = getRandomNumberBetween(0, nameArray.length - 1);
    console.log("Index: ", number);
    document.getElementById("heading").innerHTML = nameArray[number];
  }
  
  function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  