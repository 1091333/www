/* ==========================================================================
    METHOD getCities

 Inserir os nome das cidades no select "sltCity"
========================================================================== */

function getCities(){
var selectCity = document.getElementById("sltCity");
    
// apagar anteriores
if(selectCity!=null){
    while (selectCity.firstChild) {
        selectCity.removeChild(selectCity.firstChild);
    }
}

   var option = document.createElement("option");
    var optionText = document.createTextNode("");
    option.appendChild(optionText);
    selectCity.appendChild(option);

    var cities = getCitiesWS();
    
    // preenche select com as cidades
    for (var i = 0; i < cities.length; i++) {
    
        option = document.createElement("option");
        optionText = document.createTextNode(cities[i]);
        option.appendChild(optionText);
        selectCity.appendChild(option);
    }
}
/*
function getTime(){

          alert("getTime");
    
    var city = getSelectedText("sltCity");
    if (city != "") {
        
        var time = getTimeWS(city);
        //  var vh = time.split(":");   
        hours = "3";
        minutes = "45";
        seconds = "25";

        // criar tabela com informação
        var table = "<table> ";
        table += "<tr><td>" + hours + ":</td><td>" + minutes + ":</td><td>" + seconds + "</td></tr>";
        table += "</table>";

        // alteração do conteúdo textual do div resposta
        document.getElementById("response-content").innerHTML = table;
    } else {
        alert("chooses one city !! ");
        document.getElementById("response-content").innerHTML = "";
    }

}
*/
function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
}



function getCitiesWS()
{
    alert('getCities - link interno (172.31.101.6) não funciona ');
    alert("getCitiesWS");
    var arrayCities = new Array();
    var url = "http://172.31.101.6/basicapp/wstime.asmx/GetCities";

    $.ajax({
                Type: "GET",
                dataType: "json",
                url: url,
                success: onSuccess,
                error: onErro
                });
    
            function onSuccess(data){
                alert("ooook");
                /*var cities = data;  
                for (var x = 0; x++; x< cities.length)  
                {  
                    var city = cities[x];
                    
                    //arrayCities.push(city);
                }
                var message = data.status.message;
                var value= data.status.value;
                
                $("#response-content").html("Result: <p>" + message + "</p><br/><p>" +value + "</p>");
                */
            }
    
            function onErro(xhr, textStatus, thrownError){
                alert('Error! ' + textStatus + ' Status = ' + xhr.status );
            }

    return arrayCities;
}


/*
function getTimeWS(cityName) {

    alert(cityName);

        var time = "";
        var webMethod = "http://172.31.101.6/basicapp/wstime.asmx/GetCities";
        var parameters = "{city: cityName}";
                if(theName.length > 0)
                {
                    $.ajax({
                      type: "POST",
                      url: webMethod,
                      data: parameters,
                      cache: false,
                      dataType: "text",
                      success: onSuccess
                    });
                }
                           
            $("#resultLog").ajaxError(function(event, request, settings, exception) {
              $("#resultLog").html("Error Calling: " + settings.url + "<br />HTTP Code: " + request.status);
            });
 
            function onSuccess(data)
            {
                alert(data);
                time =  data;
                $("#response-content").html("Result: " + data);
            }
    
    return time;
}
*/
function test_call_json(){
    
    var self = this;
    self.showAlert('function', 'test_call_json');

    alert('test_call_json link externo (api.geonames.org) funciona ');
    var time = "";
    
    //http://api.geonames.org/srtm3?lat=50.01&lng=10.2&username=demo&style=full
    
    //http://api.geonames.org/srtm3JSON?formatted=true&lat=50.01&lng=10.2&username=demo&style=full
    
    //http://172.31.101.6/basicapp/wstime.asmx/GetCities
    
        var url = "http://api.geonames.org/srtm3JSON?formatted=true&lat=50.01&lng=10.2&username=demo&style=full";

                $.ajax({
                Type: "GET",
                dataType: "json",
                url: url,
                success: onSuccess,
                error: onErro
                });
    
            function onSuccess(data){
                alert("ooook");
                var message = data.status.message;
                var value= data.status.value;
                
                $("#response-content").html("Result: <p>" + message + "</p><br/><p>" +value + "</p>");
            }
    
            function onErro(xhr, textStatus, thrownError){
                alert('Error! ' + textStatus + ' Status = ' + xhr.status );
                //alert("Error "+ data.status.message +" <br />HTTP Code: " + data.status);
            }
}

//http://api.geonames.org/srtm3?lat=50.01&lng=10.2&username=demo&style=full&type=XML

function test_call_xml(){
    
    var self = this;
    self.showAlert('function', 'test_call_xml');

    var time = "";
    
    //http://api.geonames.org/srtm3?lat=50.01&lng=10.2&username=demo&style=full&type=XML
    
    /*
   
    */
        var url = "http://api.geonames.org/srtm3?lat=50.01&lng=10.2&username=demo&style=full&type=XML";

                $.ajax({
                Type: "GET",
                cache: false,
                dataType: "xml",
                url: url,
                success: onSuccess,
                error: onErro
                });
    
            function onSuccess(data){
                alert("data");
                $(data).find('geonames').each(function(){
                    var status = $(this).find("status");
                    alert(status.text);
                });
            }
    
            function onErro(xhr, textStatus, thrownError){
                alert('Error! ' + textStatus + ' Status = ' + xhr.status );
                //alert("Error "+ data.status.message +" <br />HTTP Code: " + data.status);
            }
}
