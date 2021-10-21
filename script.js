let thingToType = "I'm Basu Karki, Student With a Aim Of Software Engineer. I Love To Code And Help People."
thingToType = thingToType.split("")
let i = 0
let printedStr = ""

let interval = setInterval(() => {
  printedStr += thingToType[i]
  document.getElementById("Text").innerText = printedStr
  i++;
  if (i === thingToType.length) clearInterval(interval);
}, 50)