// CALCULATOR.JS
//   Note: Look at 04_SampleProgram first
//
//

//
var Calc = {

Model : {
},


View : {
  textRow : {id: "textRow", type: "text", value: "", onclick:""},
  button7 : {id: "button7", type: "button", value: 7, onclick:""},
  button8 : {id: "button8", type: "button", value: 8, onclick:""},
  button9 : {id: "button9", type: "button", value: 9, onclick:""},
  buttonplus : {id: "buttonplus", type: "button", value: '+', onclick:""},
  button4 : {id: "button4", type: "button", value: 4, onclick:""},
  button5 : {id: "button5", type: "button", value: 5, onclick:""},
  button6 : {id: "button6", type: "button", value: 6, onclick:""},
  buttonminus : {id: "buttonminus", type: "button", value: '-', onclick:""},
  button4 : {id: "button4", type: "button", value: 4, onclick:""},
  button5 : {id: "button5", type: "button", value: 5, onclick:""},
  button6 : {id: "button6", type: "button", value: 6, onclick:""},
  buttonminus : {id: "buttonminus", type: "button", value: '-', onclick:""},
  button1 : {id: "button1", type: "button", value: 1, onclick:""},
  button2 : {id: "button2", type: "button", value: 2, onclick:""},
  button3 : {id: "button3", type: "button", value: 3, onclick:""},
  buttonmult : {id: "buttonmult", type: "button", value: '*', onclick:""},
  button0 : {id: "button0", type: "button", value: 0, onclick:""},
  buttondec : {id: "buttondec", type: "button", value: '.', onclick:""},
  buttoneq : {id: "buttoneq", type: "button", value: '=', onclick:""},
  buttondiv : {id: "buttondiv", type: "button", value: '/', onclick:""},
  buttonC : {id: "buttonC", type: "button", value: 'C', onclick:""},
  buttonMR : {id: "buttonMR", type: "button", value: 'MR', onclick:""},
  buttonMM : {id: "buttonMM", type: "button", value: 'M-', onclick:""},
  buttonMP : {id: "buttonMP", type: "button", value: 'M+', onclick:""},
  buttonMC : {id: "buttonMC", type: "button", value: 'MC', onclick:""}

},

Controller : {

},

run : function() {
  Calc.attachHandlers();
  console.log(Calc.display());
  return Calc.display();
},


displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

display : function() {
  var s;
  s = "<table id=\"myTable\" border=2>"
  s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button7);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.button8);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.button9);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.buttonplus);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button3);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.button5);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.button6);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.buttonminus);
  s += "</td></tr>"
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button1);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.button2);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.button3);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.buttonmult);
  s += "</td></tr>"
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button0);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.buttondec);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.buttoneq);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.buttondiv);
  s += "</td></tr>"
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonC);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.buttonMR);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.buttonMM);
  s += "&nbsp&nbsp";
  s += Calc.displayElement(Calc.View.buttonMP);
  s += "</td></tr>"
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonMC);
  s += "</td></tr></table>";
  return s;
},

attachHandlers : function() {
  Calc.View.button7.onclick = "Calc.button7Handler()";
},

button7Handler : function() {
  alert("Hi");
}

} // end of Calc;
