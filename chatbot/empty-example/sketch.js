let score = 0;
let button1Prompts = ["My helmet has some sort of glitch.",
                      "Can I ask about Dardura again?",
                      "My helmet has some sort of glitch.",
                      "Can I ask about Dardura again?",
                      "What else can you tell me about Dardura?", 
                      "What else can you tell me about Dardura?"
                     ];

let button2Prompts = ["Dardura?",
                      "is my error code.",
                      "What else can you tell me about Dardura?",
                      "is my error code.",
                      "Thanks!",
                      "What else can you tell me about Dardura?"
                     ];

let button1Answer = button1Prompts[score];
let button2Answer = button2Prompts[score];

let daedalusText = ["Greetings, I'm Daedalus - Dardura's wisdom & tech support. How may I help you today?", 
                    "Oh no! What happens to be your error code?",
                    "Dardura is developed by Dardura Co. Is an elite alternative to reality. It has millions of members who exclusively live there.",
                    "Doesn't look to be a known error code, please try again.",
                    "Sorry to hear your helmet is acting up, please reboot your system by holding the power button for 7 seconds.",
                    "Anything else I can help you with?",
                    "Not everyone is satisfied living in an alternative reality. A community has recently spawned who emphasizes living without Dardura. They call themselves iCarus",
                    "Dardura is run by no single person, but rather a group interested in giving power back to the people in this novel reality. As Kade Havoc says- Dardura is the elite reality that can truly allow its citizens to reach their potential without the restrictions of reality."
                   ];
let maxHistoryLength = 12;
 let errorCodeInput;
let chatHistory = []; 
function setup() {
    createCanvas(windowWidth, windowHeight);
    
    //button setup
    button1 = createButton(button1Answer);
    button2 = createButton(button2Answer);
    button1.id("button1");
    button2.id("button2");
    button1.position(width/4, 3* height/4);
    button1.mousePressed(button1Click);
    button2.position(3*width/4, 3* height/4);
    button2.mousePressed(button2Click);
    //errorcode input
    errorCodeInput = createInput('');
     errorCodeInput.id("errorCodeInput");
    errorCodeInput.position(3*width/4-120, 3* height/4);
    errorCodeInput.size(100);
    errorCodeInput.style('display','none');
}

function draw() {
    textAlign(CENTER);
    background(11);
    fill(255);
    textSize(25);
    text(daedalusText[score],width/2,height/2);
    button1Answer = button1Prompts[score];
    button2Answer = button2Prompts[score];
    //display number input only if needed
    if (score== 1|| score==3){
        errorCodeInput.style('display','block');
    }
    else{
        errorCodeInput.style('display','none');
    }
   
    document.getElementById("button1").innerHTML=button1Answer;
    document.getElementById("button2").innerHTML=button2Answer;
    
    for (let i = 0; i < chatHistory.length; i++) {
   
    chatHistory[i].display(i);
  }
  // put drawing code here
}


//onbutton1click
function button1Click() {
    chatHistory.splice(maxHistoryLength, 1)
    chatHistory.unshift(new History("Daedalus: "+daedalusText[score],chatHistory.length));
    
  if (score == 0){
      chatHistory.splice(maxHistoryLength, 1)
        chatHistory.unshift(new History("You: "+button1Prompts[score],chatHistory.length));
      score = 1;
  }
    else if (score == 1){
      chatHistory.splice(maxHistoryLength, 1)
        chatHistory.unshift(new History("You: "+button1Prompts[score],chatHistory.length));
      score = 2;
  }
  else if (score == 2){
      chatHistory.splice(maxHistoryLength, 1)
        chatHistory.unshift(new History("You: "+button1Prompts[score],chatHistory.length));
      score = 1;
  }

  
    console.log(score);
}
//onbutton2click
function button2Click() {
chatHistory.splice(maxHistoryLength, 1)
chatHistory.unshift(new History("Daedalus: "+daedalusText[score],chatHistory.length));
  if (score == 0){
      chatHistory.splice(maxHistoryLength, 1)
        chatHistory.unshift(new History("You: "+button2Prompts[score],chatHistory.length));
      score = 2;
  }
    if (score == 1 || score == 3){
      chatHistory.splice(maxHistoryLength, 1)
        chatHistory.unshift(new History("You: "+document.getElementById("errorCodeInput").value+" "+button2Prompts[score],chatHistory.length));
      
        if(document.getElementById("errorCodeInput").value == "8973"){
          
        score = 4;

        }
        else{
        score = 3 
        }
  }

  if (score == 2){
    chatHistory.splice(maxHistoryLength, 1)
      chatHistory.unshift(new History("Daedalus: "+button1Prompts[score],chatHistory.length));
    score = 6;
  }
    console.log(score);

     if (score == 4){
      chatHistory.splice(maxHistoryLength, 1)
        chatHistory.unshift(new History("Daedalus: "+daedalusText[score],chatHistory.length));
      score = 5;
  }
  else if (score == 5){
    chatHistory.splice(maxHistoryLength, 1)
      chatHistory.unshift(new History("Daedalus: "+daedalusText[score],chatHistory.length));
    score = 6;
}
else if (score == 6){
  chatHistory.splice(maxHistoryLength, 1)
    chatHistory.unshift(new History("Daedalus: "+daedalusText[score],chatHistory.length));
  score = 7;
}
}






class History {
  constructor(text,position) {
    this.text = text;
    this.x = windowWidth/2;
  }

  display(position) {
    this.x = windowWidth/2;
    this.y = windowHeight/2-10 - ((position+1) *30);
    textSize(15);
    text(this.text,this.x, this.y);
  }
}