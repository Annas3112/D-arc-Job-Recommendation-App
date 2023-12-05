const firebase = require('./firebase_config.js');
const db = firebase.firestore();
const companyJSON = require('./data/company.json');
const jobJSON = require('./data/job.json');


let company = companyJSON.company;
let job = jobJSON.job;

company.forEach(function(obj) {
    db.collection("company").add({
        company_name: obj.company_name,
        location: obj.location,
        about: obj.about,

    }).then(function(docRef) {
        console.log("Company document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding company document: ", error);
    });
});

company.forEach(function(obj) {
    db.collection("job").add({
        job_title : obj.job_title,
        company : obj.company,
        job_location : obj.job_location,
        job_status : obj.job_status,
        min_salary : obj.min_salary,
        max_salary : obj.max_salary,
        desc_and_reqt : obj.desc_and_reqt,
        
    }).then(function(docRef) {
        console.log("Job document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding job document: ", error);
    });
});