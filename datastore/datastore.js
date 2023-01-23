/**
 * datastore.js
 * 
 * @author 
 * @since 
 */
"use strict";

const dataStore = (function(){
    const registrationData = [
        {studentId: "000-11-0001", fullName: "Anna Lynn Smith", levelOfStudy: "Graduate"},
        {studentId: "000-11-0002", fullName: "Bob K. Jones", levelOfStudy: "Undergraduate"}
    ];

    const getData = function() {
        return registrationData;
    }

    const registerNewStudent = function(newStudent) {
        registrationData.push(newStudent);
    }

    return {
        getData: getData,
        registerNewStudent: registerNewStudent
    }

})();

module.exports = dataStore;

module.exports = dataStore;