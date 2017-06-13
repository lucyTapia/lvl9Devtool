quteBox = [
  "Do the thing! ","You only live once, but if you do it right, once is enough.","In three words I can sum up everything I've learned about life: it goes on.","YOLO","You will never be this young.","Send the stupid text","Life is what happens to us while we are making other plans.","Take a chance roll the dice","It's okay to be stubborn sometimes.","Time is not measured by clocks but by moements","You woke up like this ","Always stay gracious best revenge is your paper.","Wave it in his face, tell him boy bye", "Do Yo Thang!","Get Sh** Done! ",
]
$("#button").click(function(){
        var lengthVar = quteBox.length   
        var quteNo = Math.floor(Math.random()*quteBox.length)
        $(".center").html(quteBox[quteNo]);
   
      });

document.getElementById('header').addEventListener('click', function(e) {
  document.getElementById('menu').className = 'open'; 
});

document.getElementById('menu').addEventListener('click', function(e) {
  document.getElementById('menu').className = 'close';
});