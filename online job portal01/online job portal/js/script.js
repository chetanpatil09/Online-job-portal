// this is latest job opening div card

$(document).ready(function () {
      const jobs = [
      { title: "Frontend Developer", company: "TechCorp", location: "Pune", type: "Full-time" },
      { title: "Backend Developer", company: "DevSolutions", location: "Mumbai", type: "Part-time" },
      { title: "UI/UX Designer", company: "Creative Inc.", location: "Remote", type: "Freelance" },
      { title: "Software Developer", company: "Infosys", location: "Pune", type: "Full-time" },
      { title: "Web Developer", company: "Wipro", location: "Mumbai", type: "Part-time" },
      { title: "Tester", company: "Cravita.", location: "Remote", type: "Freelance" },
      { title: "World press Developer", company: "Capgimini.", location: "pune", type: "Freelance" },
      { title: "Java Developer", company: "Growth.", location: "Benglore", type: "full-time" },
      { title: "Python Developer", company: "Mahindra.", location: "Satara", type: "full-time" },

    ];
      jobs.forEach(job => {
      $("#jobList").append(`
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${job.title}</h5>
              <p class="card-text">${job.company} - ${job.location}</p>
              <p class="badge bg-info">${job.type}</p>
              <button class="btn btn-outline-success w-100"onclick="clickme()" value="open">Apply Now</button>
            </div>
          </div>
        </div>
      `);
    });
  });




  // this is trending job cards code
  $(document).ready(function(){
    const companys=[
      {title:"Infosys", Opening:"50+ opening",location:"Pan India",jobtype:"Full time",salaryPackage:"Above 7 LPA"},
      {title:"Paytms", Opening:"10+ opening",location:"Galana,India",jobtype:"Full time/part-time",salaryPackage:"Above 6 LPA"},
      {title:"Mahindra", Opening:"100+ opening",location:"Pan India",jobtype:"Full time",salaryPackage:"Above 5 LPA"},
      {title:"phonepay", Opening:"20+ opening",location:"Bengalore, India",jobtype:"Full time/part-time",salaryPackage:"Above 8 LPA"},
      {title:"Amezon", Opening:"5+ opening",location:" Mumbai,India",jobtype:"Full time",salaryPackage:"Above 10 LPA"},
      {title:"Mesho", Opening:"500+ opening",location:"Pune,India",jobtype:"Temparary",salaryPackage:"Above 7.5 LPA"},
      {title:"Airtel", Opening:"50+ opening",location:"Pan India",jobtype:"Full time",salaryPackage:"Above 6.5 LPA"},
    ];

    companys.forEach(company=> {
      $("#open").append(`
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <a href="#" Class=btn btn_danger><h5 class="card-title">${company.title}</h5></a>
              <p class="card-text">${company.Opening}</p> 
              <p class="card-text> ${company.location}</p>
              <p class="badge bg-info">${company.jobtype}</p>
              <p class="badge bg-info">${company.salaryPackage}</p>
              <button class="btn btn-outline-success w-100" onclick="clickme()" value="open">Apply Now</button>
            </div>
          </div>
        </div>
      `);
    });
  });



// this is  logout function

    function logout() {
      // Clear localStorage when logging out
      localStorage.removeItem('registeredEmail');
      localStorage.removeItem('registeredPassword');
      window.location.href = 'login.html'; // Redirect to login page
    }


    // this is for apply link code redirect 
    function clickme(){
      open("../html/apply.html");
    }