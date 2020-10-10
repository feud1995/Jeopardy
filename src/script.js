/* Event Listeners */
document.getElementById("submit-btn").addEventListener("click", onSubmit);
document.getElementById("UI").addEventListener("click", openUserInterface);
document.getElementById("?info").addEventListener("click", openInfoWindow);
document.getElementById("infoClose").addEventListener("click", closeInfoWindow);

// <td> vent listeners
document.getElementById("cell_1A").addEventListener("click", cell_1A_js_func);
document.getElementById("cell_1B").addEventListener("click", cell_1B_js_func);
document.getElementById("cell_1C").addEventListener("click", cell_1C_js_func);
document.getElementById("cell_1D").addEventListener("click", cell_1D_js_func);
document.getElementById("cell_1E").addEventListener("click", cell_1E_js_func);
document.getElementById("cell_2A").addEventListener("click", cell_2A_js_func);
document.getElementById("cell_2B").addEventListener("click", cell_2B_js_func);
document.getElementById("cell_2C").addEventListener("click", cell_2C_js_func);
document.getElementById("cell_2D").addEventListener("click", cell_2D_js_func);
document.getElementById("cell_2E").addEventListener("click", cell_2E_js_func);
document.getElementById("cell_3A").addEventListener("click", cell_3A_js_func);
document.getElementById("cell_3B").addEventListener("click", cell_3B_js_func);
document.getElementById("cell_3C").addEventListener("click", cell_3C_js_func);
document.getElementById("cell_3D").addEventListener("click", cell_3D_js_func);
document.getElementById("cell_3E").addEventListener("click", cell_3E_js_func);
document.getElementById("cell_4A").addEventListener("click", cell_4A_js_func);
document.getElementById("cell_4B").addEventListener("click", cell_4B_js_func);
document.getElementById("cell_4C").addEventListener("click", cell_4C_js_func);
document.getElementById("cell_4D").addEventListener("click", cell_4D_js_func);
document.getElementById("cell_4E").addEventListener("click", cell_4E_js_func);
document.getElementById("cell_5A").addEventListener("click", cell_5A_js_func);
document.getElementById("cell_5B").addEventListener("click", cell_5B_js_func);
document.getElementById("cell_5C").addEventListener("click", cell_5C_js_func);
document.getElementById("cell_5D").addEventListener("click", cell_5D_js_func);
document.getElementById("cell_5E").addEventListener("click", cell_5E_js_func);
document.getElementById("cell_6A").addEventListener("click", cell_6A_js_func);
document.getElementById("cell_6B").addEventListener("click", cell_6B_js_func);
document.getElementById("cell_6C").addEventListener("click", cell_6C_js_func);
document.getElementById("cell_6D").addEventListener("click", cell_6D_js_func);
document.getElementById("cell_6E").addEventListener("click", cell_6E_js_func);


function getRadioValue() {
  var inputs = document.getElementsByName("gameType");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      return inputs[i].value;
    }
  }
};

function onSubmit() {
  console.log("run");
 
 // Get values of <textarea>'s input
 // Convert value to JavaScript variable
 var cell_1A_get_question = document.getElementById("cell_1A-setup-question").value;
 var cell_1A_get_answer   = document.getElementById("cell_1A-setup-question").value;
 var cell_1B_get_question = document.getElementById("cell_1B-setup-question").value;
 var cell_1B_get_answer   = document.getElementById("cell_1B-setup-question").value;
 var cell_1C_get_question = document.getElementById("cell_1C-setup-question").value;
 var cell_1C_get_answer   = document.getElementById("cell_1C-setup-question").value;
 var cell_1D_get_question = document.getElementById("cell_1D-setup-question").value;
 var cell_1D_get_answer   = document.getElementById("cell_1D-setup-question").value;
 var cell_1E_get_question = document.getElementById("cell_1E-setup-question").value;
 var cell_1E_get_answer   = document.getElementById("cell_1E-setup-question").value;
 var cell_2A_get_question = document.getElementById("cell_2A-setup-question").value;
 var cell_2A_get_answer   = document.getElementById("cell_2A-setup-question").value;
 var cell_2B_get_question = document.getElementById("cell_2B-setup-question").value;
 var cell_2B_get_answer   = document.getElementById("cell_2B-setup-question").value;
 var cell_2C_get_question = document.getElementById("cell_2C-setup-question").value;
 var cell_2C_get_answer   = document.getElementById("cell_2C-setup-question").value;
 var cell_2D_get_question = document.getElementById("cell_2D-setup-question").value;
 var cell_2D_get_answer   = document.getElementById("cell_2D-setup-question").value;
 var cell_2E_get_question = document.getElementById("cell_2E-setup-question").value;
 var cell_2E_get_answer   = document.getElementById("cell_2E-setup-question").value;
 var cell_3A_get_question = document.getElementById("cell_3A-setup-question").value;
 var cell_3A_get_answer   = document.getElementById("cell_3A-setup-question").value;
 var cell_3B_get_question = document.getElementById("cell_3B-setup-question").value;
 var cell_3B_get_answer   = document.getElementById("cell_3B-setup-question").value;
 var cell_3C_get_question = document.getElementById("cell_3C-setup-question").value;
 var cell_3C_get_answer   = document.getElementById("cell_3C-setup-question").value;
 var cell_3D_get_question = document.getElementById("cell_3D-setup-question").value;
 var cell_3D_get_answer   = document.getElementById("cell_3D-setup-question").value;
 var cell_3E_get_question = document.getElementById("cell_3E-setup-question").value;
 var cell_3E_get_answer   = document.getElementById("cell_3E-setup-question").value;
 var cell_4A_get_question = document.getElementById("cell_4A-setup-question").value;
 var cell_4A_get_answer   = document.getElementById("cell_4A-setup-question").value;
 var cell_4B_get_question = document.getElementById("cell_4B-setup-question").value;
 var cell_4B_get_answer   = document.getElementById("cell_4B-setup-question").value;
 var cell_4C_get_question = document.getElementById("cell_4C-setup-question").value;
 var cell_4C_get_answer   = document.getElementById("cell_4C-setup-question").value;
 var cell_4D_get_question = document.getElementById("cell_4D-setup-question").value;
 var cell_4D_get_answer   = document.getElementById("cell_4D-setup-question").value;
 var cell_4E_get_question = document.getElementById("cell_4E-setup-question").value;
 var cell_4E_get_answer   = document.getElementById("cell_4E-setup-question").value;
 var cell_5A_get_question = document.getElementById("cell_5A-setup-question").value;
 var cell_5A_get_answer   = document.getElementById("cell_5A-setup-question").value;
 var cell_5B_get_question = document.getElementById("cell_5B-setup-question").value;
 var cell_5B_get_answer   = document.getElementById("cell_5B-setup-question").value;
 var cell_5C_get_question = document.getElementById("cell_5C-setup-question").value;
 var cell_5C_get_answer   = document.getElementById("cell_5C-setup-question").value;
 var cell_5D_get_question = document.getElementById("cell_5D-setup-question").value;
 var cell_5D_get_answer   = document.getElementById("cell_5D-setup-question").value;
 var cell_5E_get_question = document.getElementById("cell_5E-setup-question").value;
 var cell_5E_get_answer   = document.getElementById("cell_5E-setup-question").value;
 var cell_6A_get_question = document.getElementById("cell_6A-setup-question").value;
 var cell_6A_get_answer   = document.getElementById("cell_6A-setup-question").value;
 var cell_6B_get_question = document.getElementById("cell_6B-setup-question").value; 
 var cell_6B_get_answer   = document.getElementById("cell_6B-setup-question").value;
 var cell_6C_get_question = document.getElementById("cell_6C-setup-question").value;
 var cell_6C_get_answer   = document.getElementById("cell_6C-setup-question").value;
 var cell_6D_get_question = document.getElementById("cell_6D-setup-question").value;
 var cell_6D_get_answer   = document.getElementById("cell_6D-setup-question").value;
 var cell_6E_get_question = document.getElementById("cell_6E-setup-question").value;
 var cell_6E_get_answer   = document.getElementById("cell_6E-setup-question").value;
 
 // document.getElementById("myTextarea").value = "Fifth Avenue, New York City";
 
 
 
  var selections = ["Questions", "Answers"];
  var selected = getRadioValue();
  if (selected === "Questions") {
    $(document).ready(function() {
      $('td').click(function() {
        $(this).text("question");
        $(this).removeClass('.display-default');
        $(this).removeClass('.display-answer');
        $(this).addClass('.display-question');
      });
      $('td').dblclick(function() {
        $(this).text("answer");
        $(this).removeClass('.display-default');
        $(this).removeClass('.display-question');
        $(this).addClass('.display-answer');
      });
      $('#UserInterface').hide();
      $('#board').show();
      $('#toolbar').show();
     
      $.fn.gotoAnchor = function(anchor) {
       location.href = this.selector;
      }
      $('#1').gotoAnchor();
     
      $('#?info').click(function(){
       $('#infoWindow').removeClass("inactive-infoWindow");
       $('#infoWindow').addClass("active-infoWindow");
      });
      $('#infoClose').click(function(){
       $('#infoWindow').removeClass("active-infoWindow");
       $('#infoWindow').addClass("inactive-infoWindow");
      });
     
    });
  } else if (selected === "Answers") {
    $(document).ready(function() {
      $('#gameType-TXT1').css("color", "#000000");
      $('#gameType-TXT2').css("color", "#000000");
      $('td').click(function() {
        $(this).text("answer");
        $(this).removeClass('.display-default');
        $(this).removeClass('.display-question');
        $(this).addClass('.display-answer');
      });
      $('#gameType-TXT1').css("color", "#000000");
      $('#gameType-TXT2').css("color", "#000000");
      $('td').dblclick(function() {
        $(this).text("question");
        $(this).removeClass('.display-default');
        $(this).removeClass('.display-answer');
        $(this).addClass('.display-question');
      });
      $('#UserInterface').hide();
      $('#board').show();
      $('#toolbar').show();
     
      $.fn.gotoAnchor = function(anchor) {
       location.href = this.selector;
      }
      $('#1').gotoAnchor();
     
     $('#?info').click(function(){
      $('#infoWindow').removeClass("inactive-infoWindow");
      $('#infoWindow').addClass("active-infoWindow");
     });
     $('#infoClose').click(function(){
      $('#infoWindow').removeClass("active-infoWindow");
      $('#infoWindow').addClass("inactive-infoWindow");
     });
     
    });
  } else {
    $.fn.gotoAnchor = function(anchor) {
     location.href = this.selector;
    }
    $('#2').gotoAnchor();
   
    alert("ERROR: Unable to identify game type!\n TROUBLESHOOT: Select a game type.")
    $('#gameType-TXT1').css("color", "#FF0000");
    $('#gameType-TXT1').css("font-weight", "bold");
    $('#gameType-TXT2').css("color", "#FF0000");
    $('#gameType-TXT2').css("font-weight", "bold");
    $('td','#UserInterface','#board', '#toolbar').stop();
  }
 
};

function openUserInterface() {
  $('#UserInterface').show();
  $('#board').hide();
  $('#toolbar').hide();
};


// Daily Double
var random = Math.random();



// <td> single-click functions

function cell_1A_js_func() {
  document.getElementById("cell_1A").innerHTML = "test" /*cell_1A_get_question*/;
  console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_1B_js_func() {
 document.getElementById("cell_1B").innerHTML = cell_1B_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_1C_js_func() {
 document.getElementById("cell_1C").innerHTML = cell_1C_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_1D_js_func() {
 document.getElementById("cell_1D").innerHTML = cell_1D_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_1E_js_func() {
 document.getElementById("cell_1E").innerHTML = cell_1E_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_2A_js_func() {
 document.getElementById("cell_2A").innerHTML = cell_2A_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_2B_js_func() {
 document.getElementById("cell_2B").innerHTML = cell_2B_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_2C_js_func() {
 document.getElementById("cell_2C").innerHTML = cell_2C_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_2D_js_func() {
 document.getElementById("cell_2D").innerHTML = cell_2D_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_2E_js_func() {
 document.getElementById("cell_2E").innerHTML = cell_2E_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_3A_js_func() {
 document.getElementById("cell_3A").innerHTML = cell_3A_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_3B_js_func() {
 document.getElementById("cell_3B").innerHTML = cell_3B_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_3C_js_func() {
 document.getElementById("cell_3C").innerHTML = cell_3C_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_3D_js_func() {
 document.getElementById("cell_3D").innerHTML = cell_3D_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_3E_js_func() {
 document.getElementById("cell_3E").innerHTML = cell_3E_get_question;
 console.log("EVENT: USER CLICKED ON 'CELL_1A' ('<tr>#1_<td>#1')");
 
  // Test for errors and log information on console
  if (document.getElementById("cell_1A").innerHTML = cell_1A_get_question) {
    console.log(" SUCCESS");
    console.log("  ELEMENT VALUE CHANGED TO: '" + cell_1A_get_question + "'");
  }
  else if (document.getElementById("cell_1A").innerHTML != cell_1A_get_question) {
    alert("ERROR: Unable to change element value.");
    console.log(" FAILURE");
    console.log("  ERROR: UNABLE TO CHANGE ELEMENT VALUE");
  }
  else {
   alert("ERROR: Unknown error.");
   conosle.log(" FAILURE");
   console.log("  ERROR: UNKNOWN ERROR");
  }
};

function cell_4A_js_func() {
 document.getElementById("cell_4A").innerHTML = cell_4A_get_question;
};

function cell_4B_js_func() {
 document.getElementById("cell_4B").innerHTML = cell_4B_get_question;
};

function cell_4C_js_func() {
 document.getElementById("cell_4C").innerHTML = cell_4C_get_question;
};

function cell_4D_js_func() {
 document.getElementById("cell_4D").innerHTML = cell_4D_get_question;
};

function cell_4E_js_func() {
 document.getElementById("cell_4E").innerHTML = cell_4E_get_question;
};

function cell_5A_js_func() {
 document.getElementById("cell_5A").innerHTML = cell_5A_get_question;
};

function cell_5B_js_func() {
 document.getElementById("cell_5B").innerHTML = cell_5B_get_question;
};

function cell_5C_js_func() {
 document.getElementById("cell_5C").innerHTML = cell_5C_get_question;
};

function cell_5D_js_func() {
 document.getElementById("cell_5D").innerHTML = cell_5D_get_question;
};

function cell_5E_js_func() {
 document.getElementById("cell_5E").innerHTML = cell_5E_get_question;
};

function cell_6A_js_func() {
 document.getElementById("cell_6A").innerHTML = cell_6A_get_question;
};

function cell_6B_js_func() {
 document.getElementById("cell_6B").innerHTML = cell_6B_get_question;
};

function cell_6C_js_func() {
 document.getElementById("cell_6C").innerHTML = cell_6C_get_question;
};

function cell_6D_js_func() {
 document.getElementById("cell_6D").innerHTML = cell_6D_get_question;
};

function cell_6E_js_func() {
 document.getElementById("cell_6E").innerHTML = cell_6E_get_question;
};