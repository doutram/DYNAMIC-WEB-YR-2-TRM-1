//var ... window.jquery: // create shortcut for jquery reference.

// jquery show and hide //
var Backbutton = $('#back')
var GoButton = $('#home button');
var HomeSection = $('#home')
var Results = $('#results')
// tell the button to do something when we click it 
GoButton.click(function(){
    HomeSection.hide()
    Results.show()
})

Backbutton.click(function(){
Results.hide()
HomeSection.show()
})
//logo fadein//
var logo = $('#logoimage')
logo.hide(function(){
logo.fadeIn(1500);
})