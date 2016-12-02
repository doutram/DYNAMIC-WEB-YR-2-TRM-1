//console log to see if theres is any bugs 
console.log('main.js')
//var ... window.jquery: // create shortcut for jquery reference.

// jquery show and hide //
var Backbutton = $('#back');
var FirstPage = $('#home-page');
var Results = $('#results');
//var Map = $('#MapResults');
var DropDown = $ ('.dropdown');
var Search = $ ('#search-button');
var ListButton = $ ('#ListButton');
var ListResults = $ ('list');
var List = $ ('#ListToggle');
var resultsOL = $('#results ol')


//defin the resultslist outside of everywhere

var resultsList = []

// tell the button to do something when we click it 
Backbutton.click(function(){
Results.hide()
FirstPage.show()
})

Search.click(function(){
    FirstPage.hide()
    Results.show()
})
 

var resultsToggleButton = $('#results .Toggle')
var resultsMap = $('#map')

resultsToggleButton.click( function()
{
    // list or map?
    // let's check the current state of the list
    // if it's 'block' then we want to show the map
    // otherwise we want to show the list
    var state = List.css('display') == 'block' ? 'map' : 'list'
    if (state == 'list')
    {
        List.show()
        resultsMap.hide()
        resultsToggleButton.html('Map')
    } 
    else
    {
        List.hide()
        resultsMap.show() 
        resultsToggleButton.html('List')
        addMarkers(List)
    }
})

function showDetails (data, interfaceElement) 
{
  var detailsHTML = makeDetailsHTML(data)
  interfaceElement.html(detailsHTML)
}


//text-ome

showList(resultsList, resultsOL)

$('#results li').click( function() {
    // grab the id from the clicked item
    var resultId = $(this).attr('id')
    // use the id to get the right data
    var resultData = resultsList[resultId]
    console.log(resultData)
    // call the function showDetails()
    showDetails(resultData, detailsInfo)
    // show the details!
    resultsSection.hide()
    detailsSection.show()
})

