var mouse_event = "empty";
var last_position_of_x, last_position_of_y

canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

color = "blue";
width_of_line = "1";


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
   mouse_event = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
   current_position_of_x = e.clientX - canvas.offsetLeft;
   current_position_of_y = e.clientY - canvas.offsetTop;

   if (mouse_event == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("last position of x and y cordnates = ");
    console.log("x =" + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("current position of x and y cordnates = ");
    console.log("x =" + current_position_of_x + "y = " + current_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
   }

   last_position_of_x = current_position_of_x;
   last_position_of_y = current_position_of_y;
}