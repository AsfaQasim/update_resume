var form = document.querySelector("form");
form.onsubmit = function (e) {
    e.preventDefault();
    var _a = form, name = _a.name, email = _a.email, phone = _a.phone, experience = _a.experience, education = _a.education, skills = _a.skills;
    var resumeData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        experience: experience.value,
        education: education.value,
        skills: skills.value
    };
    renderData(resumeData);
};
var renderData = function (data) {
    var resumeOutputCont = document.querySelector("#resumeOutput");
    resumeOutputCont.innerHTML = "\n        <div class=\"template\">\n        <header>\n            <h1>".concat(data.name, "</h1>\n            <p>Full Stack Developer</p>\n            <p>").concat(data.email, "</p>\n            <p>").concat(data.phone, "</p>\n        </header>\n        <hr>\n        <div class=\"container\">\n            <div class=\"main\">\n                <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JvsHMRLdIGqlEWoVzeUyemB_bJyo6AZ-7A&s\"\n                    alt=\"Profile Picture\" class=\"profile-picture\">\n                <h1>About Me</h1>\n                <p>As a fresh Full Stack Developer, I am passionate about building web applications that are both\n                    functional\n                    and visually appealing. I have a solid foundation in front-end and back-end technologies, and I'm\n                    continuously expanding my skills. Currently, I'm enhancing my expertise by learning advanced topics\n                    at\n                    GIAIC, where I focus on mastering the latest tools and frameworks in web development. My goal is to\n                    create efficient, user-friendly solutions that meet the needs of modern businesses.</p>\n            </div>\n        </div>\n        <hr>\n\n        <main>\n            <section class=\"education\">\n                <h2>Education</h2>\n                <ul>\n                    ").concat(data.education, "\n                </ul>\n            </section>\n            <hr>\n            <section class=\"experience\">\n                <h2>Experience</h2>\n                <ul>\n                    ").concat(data.experience, "\n                </ul>\n            </section>\n            <hr>\n            <section class=\"skills\">\n                <h2>Skills</h2>\n                <ul>\n                    ").concat(data.skills, "\n                </ul>\n            </section>\n        </main>\n     </div>\n ");
};
