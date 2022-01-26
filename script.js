document.getElementById("time").innerHTML="Not Started";
var reset_button=document.getElementById("reset_start");

var answers  = ['A','B','C','D'];

var correct_option;
var time_remaining;

function displayScore(){
  clearInterval(time_remaining);
  var code = document.getElementsByClassName("container")[0].innerHTML;
  var final_points = document.getElementById("points").innerHTML;
  document.getElementsByClassName("container")[0].style.fontSize="90px";
  document.getElementsByClassName("container")[0].style.textAlign="center";
  document.getElementsByClassName("container")[0].innerHTML=
  `<p> TIME OVER <br />` +
  `FINAL SCORE:` + final_points.slice(8) +`</p>` ;
  document.getElementsByClassName("container")[0].style.justifyContent="center";
}

function change_time(){
  var time = document.getElementById("time");
  if(time.innerHTML=="Not Started")
  {
    time.innerHTML="0:59";
  }
  else if(time.innerHTML=="0:0")
  {
    displayScore();
  }
  else {
    var current_time = parseInt(time.innerHTML.slice(2));
    current_time-=1;
    time.innerHTML="0:"+current_time;
  }

}
  reset_button.onclick = function() {
  clearInterval(time_remaining);
  document.getElementById("time").innerHTML="Not Started";
  time_remaining = setInterval(change_time,1000);
  reset_button.value="RESET";
  document.getElementById("points").innerHTML="Score : 0";
  var a = Math.floor(Math.random()*10)+1;
  var b = Math.floor(Math.random()*10)+1;
  var ans_1 = a*b;
  var ans_2 = a*(b-1);
  var ans_3 = b*(a-1);
  var ans_4 = a*b+2;
  var options =[ans_1,ans_2,ans_3,ans_4];
  document.getElementById("statement").innerHTML =a+"x"+b;
  document.getElementById("statement").style.fontSize="90px";
  document.getElementById("statement").style.textAlign="center";
  var done = [];
  var index;
  for(let i=0;i<4;)
  {
    index = Math.floor(Math.random()*4);
    // window.console.log("generated : " + index +"\n");
    var flag=0;
    for(let j=0;j<done.length;j++)
    {
      if(done[j]==index)
      {
        flag=1;
        break;
      }
    }
    if(flag==0)
    {
      done.push(index);
      // document.getElementById(answers[index]).value=options[i];
      i++;
      // window.console.log("i changed to " + i +"\n");
    }
  }
  // document.getElementById('A').value=done;
  for(let k=0;k<4;k++)
  {
    document.getElementById(answers[done[k]]).value=options[k];
    // window.console.log(typeof document.getElementById(answers[done[k]]).value);
  }
  correct_option = options[0];
}




var option_1 = document.getElementById('A');
var option_2 = document.getElementById('B');
var option_3 = document.getElementById('C');
var option_4 = document.getElementById('D');


option_1.onclick = function(){
  var flag = 0;
  if(option_1.value==correct_option)
  {
    document.getElementById("result").innerHTML="Correct Answer";
    document.getElementById("result").style.backgroundColor="lightgreen";
    document.getElementById("result").style.visibility="visible";
    setTimeout(function(){
      document.getElementById("result").style.visibility="hidden";},1000);
    flag = 1;
  }
  else {
    document.getElementById("result").innerHTML="Wrong Answer";
    document.getElementById("result").style.backgroundColor="red";
    document.getElementById("result").style.visibility="visible";
    setTimeout(function(){
      document.getElementById("result").style.visibility="hidden";},1000);
  }

  if(flag==1)
  {
    var current_points = document.getElementById("points").innerHTML;
    var current_points_int = parseInt(current_points.slice(8))+1;
    var updated_points = "Score : "+current_points_int;
    document.getElementById("points").innerHTML = updated_points;
    var a = Math.floor(Math.random()*10)+1;
    var b = Math.floor(Math.random()*10)+1;
    var ans_1 = a*b;
    var ans_2 = a*(b-1);
    var ans_3 = b*(a-1);
    var ans_4 = a*b+2;
    var options =[ans_1,ans_2,ans_3,ans_4];
    document.getElementById("statement").innerHTML =a+"x"+b;
    document.getElementById("statement").style.fontSize="90px";
    document.getElementById("statement").style.textAlign="center";
    var done = [];
    var index;
    for(let i=0;i<4;)
    {
      index = Math.floor(Math.random()*4);
      // window.console.log("generated : " + index +"\n");
      var flag=0;
      for(let j=0;j<done.length;j++)
      {
        if(done[j]==index)
        {
          flag=1;
          break;
        }
      }
      if(flag==0)
      {
        done.push(index);
        // document.getElementById(answers[index]).value=options[i];
        i++;
        // window.console.log("i changed to " + i +"\n");
      }
    }
    // document.getElementById('A').value=done;
    for(let k=0;k<4;k++)
    {
      document.getElementById(answers[done[k]]).value=options[k];
      // window.console.log(typeof document.getElementById(answers[done[k]]).value);
    }
    correct_option = options[0];
  }
}


option_2.onclick = function(){
  var flag = 0;
  if(option_2.value==correct_option)
  {
    document.getElementById("result").innerHTML="Correct Answer";
    document.getElementById("result").style.backgroundColor="lightgreen";
    document.getElementById("result").style.visibility="visible";
    setTimeout(function(){
      document.getElementById("result").style.visibility="hidden";},1000);
    flag = 1;
  }
  else {
    document.getElementById("result").innerHTML="Wrong Answer";
    document.getElementById("result").style.backgroundColor="red";
    document.getElementById("result").style.visibility="visible";
    setTimeout(function(){
      document.getElementById("result").style.visibility="hidden";},1000);
  }

  if(flag==1)
  {
    var current_points = document.getElementById("points").innerHTML;
    var current_points_int = parseInt(current_points.slice(8))+1;
    var updated_points = "Score : "+current_points_int;
    document.getElementById("points").innerHTML = updated_points;
    var a = Math.floor(Math.random()*10)+1;
    var b = Math.floor(Math.random()*10)+1;
    var ans_1 = a*b;
    var ans_2 = a*(b-1);
    var ans_3 = b*(a-1);
    var ans_4 = a*b+2;
    var options =[ans_1,ans_2,ans_3,ans_4];
    document.getElementById("statement").innerHTML =a+"x"+b;
    document.getElementById("statement").style.fontSize="90px";
    document.getElementById("statement").style.textAlign="center";
    var done = [];
    var index;
    for(let i=0;i<4;)
    {
      index = Math.floor(Math.random()*4);
      // window.console.log("generated : " + index +"\n");
      var flag=0;
      for(let j=0;j<done.length;j++)
      {
        if(done[j]==index)
        {
          flag=1;
          break;
        }
      }
      if(flag==0)
      {
        done.push(index);
        // document.getElementById(answers[index]).value=options[i];
        i++;
        // window.console.log("i changed to " + i +"\n");
      }
    }
    // document.getElementById('A').value=done;
    for(let k=0;k<4;k++)
    {
      document.getElementById(answers[done[k]]).value=options[k];
      // window.console.log(typeof document.getElementById(answers[done[k]]).value);
    }
    correct_option = options[0];
  }
}


option_3.onclick = function(){
  var flag = 0;
  if(option_3.value==correct_option)
  {
    document.getElementById("result").innerHTML="Correct Answer";
    document.getElementById("result").style.backgroundColor="lightgreen";
    document.getElementById("result").style.visibility="visible";
    setTimeout(function(){
      document.getElementById("result").style.visibility="hidden";},1000);
    flag = 1;
  }
  else {
    document.getElementById("result").innerHTML="Wrong Answer";
    document.getElementById("result").style.backgroundColor="red";
    document.getElementById("result").style.visibility="visible";
    setTimeout(function(){
      document.getElementById("result").style.visibility="hidden";},1000);
  }

  if(flag==1)
  {
    var current_points = document.getElementById("points").innerHTML;
    var current_points_int = parseInt(current_points.slice(8))+1;
    var updated_points = "Score : "+current_points_int;
    document.getElementById("points").innerHTML = updated_points;
    var a = Math.floor(Math.random()*10)+1;
    var b = Math.floor(Math.random()*10)+1;
    var ans_1 = a*b;
    var ans_2 = a*(b-1);
    var ans_3 = b*(a-1);
    var ans_4 = a*b+2;
    var options =[ans_1,ans_2,ans_3,ans_4];
    document.getElementById("statement").innerHTML =a+"x"+b;
    document.getElementById("statement").style.fontSize="90px";
    document.getElementById("statement").style.textAlign="center";
    var done = [];
    var index;
    for(let i=0;i<4;)
    {
      index = Math.floor(Math.random()*4);
      // window.console.log("generated : " + index +"\n");
      var flag=0;
      for(let j=0;j<done.length;j++)
      {
        if(done[j]==index)
        {
          flag=1;
          break;
        }
      }
      if(flag==0)
      {
        done.push(index);
        // document.getElementById(answers[index]).value=options[i];
        i++;
        // window.console.log("i changed to " + i +"\n");
      }
    }
    // document.getElementById('A').value=done;
    for(let k=0;k<4;k++)
    {
      document.getElementById(answers[done[k]]).value=options[k];
      // window.console.log(typeof document.getElementById(answers[done[k]]).value);
    }
    correct_option = options[0];
  }
}

option_4.onclick = function(){
  var flag = 0;
  if(option_4.value==correct_option)
  {
    document.getElementById("result").innerHTML="Correct Answer";
    document.getElementById("result").style.backgroundColor="lightgreen";
    document.getElementById("result").style.visibility="visible";
    setTimeout(function(){
      document.getElementById("result").style.visibility="hidden";},1000);
    flag = 1;
  }
  else {
    document.getElementById("result").innerHTML="Wrong Answer";
    document.getElementById("result").style.backgroundColor="red";
    document.getElementById("result").style.visibility="visible";
    setTimeout(function(){
      document.getElementById("result").style.visibility="hidden";},1000);
  }

  if(flag==1)
  {
    var current_points = document.getElementById("points").innerHTML;
    var current_points_int = parseInt(current_points.slice(8))+1;
    var updated_points = "Score : "+current_points_int;
    document.getElementById("points").innerHTML = updated_points;
    var a = Math.floor(Math.random()*10)+1;
    var b = Math.floor(Math.random()*10)+1;
    var ans_1 = a*b;
    var ans_2 = a*(b-1);
    var ans_3 = b*(a-1);
    var ans_4 = a*b+2;
    var options =[ans_1,ans_2,ans_3,ans_4];
    document.getElementById("statement").innerHTML =a+"x"+b;
    document.getElementById("statement").style.fontSize="90px";
    document.getElementById("statement").style.textAlign="center";
    var done = [];
    var index;
    for(let i=0;i<4;)
    {
      index = Math.floor(Math.random()*4);
      // window.console.log("generated : " + index +"\n");
      var flag=0;
      for(let j=0;j<done.length;j++)
      {
        if(done[j]==index)
        {
          flag=1;
          break;
        }
      }
      if(flag==0)
      {
        done.push(index);
        // document.getElementById(answers[index]).value=options[i];
        i++;
        // window.console.log("i changed to " + i +"\n");
      }
    }
    // document.getElementById('A').value=done;
    for(let k=0;k<4;k++)
    {
      document.getElementById(answers[done[k]]).value=options[k];
      // window.console.log(typeof document.getElementById(answers[done[k]]).value);
    }
    correct_option = options[0];
  }
}
