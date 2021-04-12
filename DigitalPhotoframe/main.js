function preload(){

}
 
function setup(){
    canvas = createCanvas(640, 640);
    canvas.position(150,190);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";


}
function draw(){
    image(video, 100, 90, 440, 300);

    //rectangles
    fill(255,165,0);
   stroke(255,165,0);
    rect(45, 40, 20, 400);
    rect(570, 50, 20, 400);

    fill(255,69,0);
    stroke(255,69,0);
    rect(90, 40, 460, 20);
    rect(10, 410, 530, 20);
//circles
    fill(0,191,255);
    stroke(0,191,255);
    circle(50, 50, 80);

    fill(123,104,238);
    stroke(123,104,238);
    circle(580, 50, 80);

    fill(50,205,50);
    stroke(50,205,50);
    circle(50, 420, 80);

    fill(255,215,0);
    stroke(255,215,0);
    circle(580, 420, 80);


    tint(tint_color);

}
function take_snapshot(){
  save('student_name.png');
}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}

