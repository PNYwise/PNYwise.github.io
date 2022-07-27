fetchingIdJsonData();

function fetchingIdJsonData() {

     fetch("./assets/json/content.json")
          .then(response => {
               return response.json();
          })
          .then((jsondata) => {
               const navbar = jsondata.map((data) => {
                    return data.id.navbar;
               });
               setNavValue(navbar);
               const about = jsondata.map((data) => {
                    return data.id.about;
               });
               setAboutValue(about);
               const resume = jsondata.map((data) => {
                    return data.id.resume;
               });
               setResumeValue(resume);
               const service = jsondata.map((data) => {
                    return data.id.service;
               });
               setServiceValue(service);
               const portfolio = jsondata.map((data) => {
                    return data.id.portfolio;
               });
               setPortfolioValue(portfolio);
               const contact = jsondata.map((data) => {
                    return data.id.contact;
               });
               setContactValue(contact);
          });
}
function fetchingEnJsonData() {
     fetch("./assets/json/content.json")
          .then(response => {
               return response.json();
          })
          .then((jsondata) => {
               const navbar = jsondata.map((data) => {
                    return data.en.navbar;
               });
               setNavValue(navbar);
               const about = jsondata.map((data) => {
                    return data.en.about;
               });
               setAboutValue(about);
               const resume = jsondata.map((data) => {
                    return data.en.resume;
               });
               setResumeValue(resume);
               const service = jsondata.map((data) => {
                    return data.en.service;
               });
               setServiceValue(service);
               const portfolio = jsondata.map((data) => {
                    return data.en.portfolio;
               });
               setPortfolioValue(portfolio);
               const contact = jsondata.map((data) => {
                    return data.en.contact;
               });
               setContactValue(contact);
          });
}

document.getElementById("languages").addEventListener("click", (e) => {
     const attr = document.getElementById('languages').getAttribute('class');
     if (attr == "indonesia") {
          document.getElementById('languages').setAttribute('class', 'english');
          fetchingEnJsonData();
     } else {
          document.getElementById('languages').setAttribute('class', 'indonesia');
          fetchingIdJsonData();
     }
});

function setNavValue(navbar) {
     document.getElementById("navhome").innerHTML = navbar[0].home;

     document.getElementById("navabout").innerHTML = navbar[0].about;
     document.getElementById("aboutTitle").innerHTML = navbar[0].about;

     document.getElementById("navresume").innerHTML = navbar[0].resume;
     document.getElementById("resumeTitle").innerHTML = navbar[0].resume;

     document.getElementById("navservice").innerHTML = navbar[0].service;
     document.getElementById("serviceTitle").innerHTML = navbar[0].service;

     document.getElementById("navportfolio").innerHTML = navbar[0].portfolio;
     document.getElementById("portfolioTitle").innerHTML = navbar[0].portfolio;

     document.getElementById("navcontact").innerHTML = navbar[0].contact;
     document.getElementById("contactTitle").innerHTML = navbar[0].contact;

     document.getElementById("languages").innerHTML = navbar[0].languages;
};

function setAboutValue(about) {
     document.getElementById("aboutHeader").innerHTML = about[0].header;
     document.getElementById("aboutDesc1").innerHTML = about[0].Desc1;
     document.getElementById("aboutDesc2").innerHTML = about[0].Desc2;
};

function setResumeValue(resume) {
     document.getElementById("resumeHeader").innerHTML = resume[0].header;
     // exp
     document.getElementById("resumeExperience").innerHTML = resume[0].experience;
     document.getElementById("experienceTitle1").innerHTML = resume[0].experienceItem[0].experienceTitle1;
     document.getElementById("experienceTime1").innerHTML = resume[0].experienceItem[0].experienceTime1;
     document.getElementById("experiencePlace1").innerHTML = resume[0].experienceItem[0].experiencePlace1;
     document.getElementById("experienceDesc1").innerHTML = resume[0].experienceItem[0].experienceDesc1;

     // edu
     document.getElementById("resumeEducation").innerHTML = resume[0].education;
     document.getElementById("educationTitle1").innerHTML = resume[0].educationItem[0].educationTitle1;
     document.getElementById("educationTime1").innerHTML = resume[0].educationItem[0].educationTime1;
     document.getElementById("educationPlace1").innerHTML = resume[0].educationItem[0].educationPlace1;
     document.getElementById("educationDesc1").innerHTML = resume[0].educationItem[0].educationDesc1;
};

function setServiceValue(service) {
     document.getElementById("serviceHeader").innerHTML = service[0].header;
     //item1
     document.getElementById("serviceItemTitle1").innerHTML = service[0].serviceItem[0].title;
     document.getElementById("serviceItemDesc1").innerHTML = service[0].serviceItem[0].desc;
     //item2
     document.getElementById("serviceItemTitle2").innerHTML = service[0].serviceItem[1].title;
     document.getElementById("serviceItemDesc2").innerHTML = service[0].serviceItem[1].desc;
     //item3
     document.getElementById("serviceItemTitle3").innerHTML = service[0].serviceItem[2].title;
     document.getElementById("serviceItemDesc3").innerHTML = service[0].serviceItem[2].desc;
     //item4
     document.getElementById("serviceItemTitle4").innerHTML = service[0].serviceItem[3].title;
     document.getElementById("serviceItemDesc4").innerHTML = service[0].serviceItem[3].desc;
     //item5
     document.getElementById("serviceItemTitle5").innerHTML = service[0].serviceItem[4].title;
     document.getElementById("serviceItemDesc5").innerHTML = service[0].serviceItem[4].desc;
};

function setPortfolioValue(portfolio) {
     document.getElementById("portfolioHeader").innerHTML = portfolio[0].header;
};

function setContactValue(contact) {
     document.getElementById("contactHeader").innerHTML = contact[0].header;
     document.getElementById("address").innerHTML = contact[0].address;
     document.getElementById("socialMedia").innerHTML = contact[0].socialMedia;
};