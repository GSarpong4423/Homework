
function namesAndEmail(data1){

var cleanData = data1.split(", ");
var indexPlace = 0;

var finalArray = [];


for (var i = 0; i < cleanData.length / 6; i++) {
    finalArray.push(cleanData.slice(indexPlace,indexPlace+6));
    indexPlace = indexPlace + 6;
    console.log(finalArray[i][3]+ ",",finalArray[i][1]);
}
//return
}; 

namesAndEmail ("1, Cozmo, Solway, csolway0@yale.edu, Male, 252.122.92.241, 2, Dominik, Gisbye, dgisbye1@oakley.com, Male, 84.100.73.246, 3, Celka, Jaquet, cjaquet2@networksolutions.com, Female, 71.58.228.161, 4, Annadiana, Toxell, atoxell3@usatoday.com, Female, 90.77.69.8, 5, Marthe, Pinn, mpinn4@rambler.ru, Female, 152.117.34.43, 6, Ian, Tollfree, itollfree5@state.gov, Male, 226.51.115.236, 7, Doretta, Willisch, dwillisch6@blogspot.com, Female, 30.169.126.187, 8, Darleen, Brignall, dbrignall7@state.gov, Female, 206.199.159.249, 9, Alasteir, Christon, achriston8@odnoklassniki.ru, Male, 130.156.62.72, 10, Julienne, Lowman, jlowman9@usgs.gov, Female, 44.220.89.181");