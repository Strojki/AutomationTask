describe ("Tests ment for testing Geocoding API", function(){

var request = require('C:/Users/Edin/AppData/Roaming/npm/node_modules/superagent');
var helperFunctions= require('../HelperFunctions/helperFunctions.js')


  it(" (Test no.1) Making a valid request on API and getting positive status OK", function() {

    browser.ignoreSynchronization=true;
    browser.logger.info ("(Test no.1) Making a valid request on API and getting positive status OK");


    //Call on API to chech status
      request
        .post("https://maps.googleapis.com/maps/api/geocode/json?address=ZmajaodBosne&key=AIzaSyBYCy_R0ZRUNLMFjGnPqUbgAQo0YE-DBBs")
        .set('Accept', 'application/json')
        .end(function(error,result){

            if( error || !result.ok){
              browser.logger.info("Got an error while sending post request for forward geocoding");
            }
            else{

              if(helperFunctions.areStringsEqual(browser.params.LocationChecker.results[0].status, result.body.status)===true
              && helperFunctions.areStringsEqual(browser.params.LocationChecker.testAddressData.address, result.body.results[0].address_components[0].long_name)===true
              && helperFunctions.areStringsEqual(browser.params.LocationChecker.testAddressData.lat, result.body.results[0].geometry.location.lat)===true
              && helperFunctions.areStringsEqual(browser.params.LocationChecker.testAddressData.lng, result.body.results[0].geometry.location.lng)===true
            ){
              //logging JSON
              browser.logger.info("JSON file:" + "\n" + JSON.stringify(result.body, null, '\t'));
              browser.logger.info("All is as expected");
            }
              else if (!helperFunctions.areStringsEqual(browser.params.LocationChecker.results[0].status, result.body.status)) {
                browser.logger.info("Status not as expected: "+ browser.params.LocationChecker.results[0].status);
                browser.logger.info("Returned status is:" + result.body.status);
              }
              else if (!helperFunctions.areStringsEqual(browser.params.LocationChecker.testAddressData.address, result.body.results[0].address_components[0].long_name)) {
                browser.logger.info("Address returned not as expected: "+ browser.params.LocationChecker.results[0].address);
                browser.logger.info("Returned address is:" + result.body.results[0].address_components[0].long_name);
              }
              else if (!helperFunctions.areStringsEqual(browser.params.LocationChecker.testAddressData.lat, result.body.results[0].geometry.location.lat)) {
                browser.logger.info("Latitude returned not as expected: "+ browser.params.LocationChecker.testAddressData.lat);
                browser.logger.info("Returned latitude is:" + result.body.results[0].geometry.location.lat);
              }
              else if (!helperFunctions.areStringsEqual(browser.params.LocationChecker.testAddressData.lng, result.body.results[0].geometry.location.lng)) {
                browser.logger.info("Longitude returned not as expected: "+ browser.params.LocationChecker.testAddressData.lng);
                browser.logger.info("Returned longitude is:" + result.body.results[0].geometry.location.lng);
              }


            }


        });

        browser.get("https://maps.googleapis.com/maps/api/geocode/json?address=ZmajaodBosne&key=AIzaSyBYCy_R0ZRUNLMFjGnPqUbgAQo0YE-DBBs")
        var JSONresponse = element(by.xpath("/html/body/pre"));
        JSONresponse.getText().then(function (t){
          var parsedText= JSON.parse(t);
          if(helperFunctions.areStringsEqual(browser.params.LocationChecker.results[0].status, parsedText.status)){
            browser.logger.info("Status verified via UI");
          }
        } );

  } );



    it(" (Test no.2) Making a valid reverse geocoding request on API and getting positive status OK", function() {

      browser.ignoreSynchronization=true;
      browser.logger.info("(Test no.2) Making a valid reverse geocoding request on API and getting positive status OK");


      //Call on API to chech status
        request
          .post("https://maps.googleapis.com/maps/api/geocode/json?latlng=43.8540601,18.3925673&key=AIzaSyBYCy_R0ZRUNLMFjGnPqUbgAQo0YE-DBBs")
          .set('Accept', 'application/json')
          .end(function(error,result){

              if(error || !result.ok){
                browser.logger.info("Got an error while sending post request for forward geocoding");
              }
              else{

                if(helperFunctions.areStringsEqual(browser.params.LocationChecker.results[0].status, result.body.status)){
                browser.logger.info("Returned status is OK");
                //logging JSON
                browser.logger.info("JSON file:" + "\n" + JSON.stringify(result.body, null, '\t'));
              }
              else if(helperFunctions.areStringsEqual(browser.params.LocationChecker.results[0].status, result.body.status)===false){
                browser.logger.info("Returned status is" + result.body.status);
              }
              }


          });



    });



});
