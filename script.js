var options = ["box1","box2","box3", "box4"];

function test1() {
    if (correct_box == "box1") {
        correct();
    } else {
        incorrect();
    }
    }
function test2() {
    if (correct_box == "box2") {
        correct();
    } else {
        incorrect();
    }
    }
function test3() {
    if (correct_box == "box3") {
        correct();
    } else {
        incorrect();
    }
    }
function test4() {
    if (correct_box == "box4") {
        correct();
    } else {
        incorrect();
    }
    }


function correct() {
    let correct_phrases = ["👑👑👑👑👑 LETS GO KING THATS THE ONE 👑👑👑👑👑", "🤖🤖🤖I think youre ACTUALLY a ROBOT!! YOU GOT IT RIGHT🦾🦾🦾", "WHAT A LEGEND!! YOURE ON FIRE🥶🥶🥶", "ABSOLUTE COLOR GOD!! 🔱🔱🔱🔱", "BAZZINGAAAAA ⚡⚡⚡ SLAYY YOU GOT ITTT"];
    let phrase = correct_phrases[Math.floor(Math.random()*5)];
    alert(phrase);
}

function incorrect() {
    let incorrect_phrases = ["I really think you could do better", "Are you actually trying????? Choose another one.", "You thought THAT was the answer??? lmfao", "guess......again", "😭😭😭😭😭 try again!", "Is that the best you can do?"];
    let phrase = incorrect_phrases[Math.floor(Math.random()*6)];
    alert(phrase);
}

var r = 0;
var g = 0;
var b = 0;

var random = Math.floor(Math.random()*4)+1;
var correct_index = random-1;
const correct_box = (options[correct_index]);

const arrayWithoutElementAtIndex = function (arr, index) {
    return arr.filter(function(value, arrIndex) {
      return index !== arrIndex;
    });
}
var fake_boxes = arrayWithoutElementAtIndex(options, correct_index);



function rgb_generator() {
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
}

function set_random_color() {
    //grab r,b,g values
    //use javascript to select random values between 0-255
    //math.floor(Math.random() * 255)
    // set to r, g, b
    rgb_generator();
    document.getElementById("guess_color").style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}

function generate() {
    document.getElementById(correct_box).innerHTML = '('+r+','+g+','+b+')';
    rgb_generator();
    document.getElementById(fake_boxes[0]).innerHTML = '('+r+','+g+','+b+')';
    rgb_generator();
    document.getElementById(fake_boxes[1]).innerHTML = '('+r+','+g+','+b+')';
    rgb_generator();
    document.getElementById(fake_boxes[2]).innerHTML = '('+r+','+g+','+b+')';
    
}

function refresh(){
    location.reload();
}

window.onload = () => {
    set_random_color();
    generate();}



