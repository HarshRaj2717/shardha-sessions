function myFun() {
  const text = document.getElementById("textarea").value;
  const myList = document.getElementById("notes");
  myList.innerHTML = myList.innerHTML + "<li class='border-2 bg-red-500 p-4'>" + text + "</li>";
}
