function updateScore()
{
    score=score+1;
document.getElementById("score").innerHTML="puntaje :"+score;
}
function saveScore()
{
    localStorage.setItem("score",score);
}
function nextPage()
{
    window.location="activity_2(1) - copia.html";
}
function addUser()
{
p1name=document.getElementById("p1name_input").value;
p2name=document.getElementById("p2name_input").value;
localStorage.setItem("p1name",p1name);
localStorage.setItem("p2name",p2name);
window.location.replace="game_page(1) - copia.html";
}
p1name = localStorage.getItem("p1name");
p2name = localStorage.getItem("p2name");

p1_score = 0;
p2_score = 0;

document.getElementById("p1name").innerHTML = p1name + ":" ;
document.getElementById("p2name").innerHTML = p2name + ":" ;

document.getElementById("p1_score").innerHTML = p1_score ;
document.getElementById("p2_score").innerHTML = p2_score ;

document.getElementById("player_question").innerHTML = "Turno para preguntar" ;
document.getElementById("player_answer").innerHTML = "Turno para responder" ;

function send()
{
get_word = document.getElementById("word").value;
word = get_word.toLowerCase();
console.log("Palabra en minusculas" + word);

charAt1 = word.charAt1(1);
console.log(charAt1);

length_divide_2 = Math.floor(word.lenght/2);
charAt2 = word.charAt(lenghy_divide_2);
console.log(charAt2);

lenght_minus_1 = word.lenght - 1;
charAt3 = word.charAt(lenght_minus_1);
console.log(charAt3);

remove_charAt1 = word.replace(charAt1, "_");
remove_charAt2 = remove_charAt1.replace (charAt2, "_");
remove_charAt3 = remove_charAt2.replace (charAt3, "_");
console.log(charAt3);

question_word = "<h4 id='word_display'> Q."+remove_charAt3+"</h4>";
input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row ;
document.getElementById("word").value = "";
}