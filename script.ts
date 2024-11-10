const form = document.querySelector("form") as HTMLFormElement;

form.onsubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, experience, education, skills } = form as Record<string, HTMLInputElement>;

    const resumeData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        experience: experience.value,
        education: education.value,
        skills: skills.value
    }
    renderData(resumeData)
}
interface ResData {
    name: string,
    email: string,
    phone: string,
    experience: string,
    education: string,
    skills: string
}

const renderData = (data: ResData) => {
    const resumeOutputCont = document.querySelector("#resumeOutput") as HTMLDivElement
    
    resumeOutputCont.innerHTML = `
        <div class="template">
        <header>
            <h1>${data.name}</h1>
            <p>Full Stack Developer</p>
            <p>${data.email}</p>
            <p>${data.phone}</p>
        </header>
        <hr>
        <div class="container">
            <div class="main">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JvsHMRLdIGqlEWoVzeUyemB_bJyo6AZ-7A&s"
                    alt="Profile Picture" class="profile-picture">
                <h1>About Me</h1>
                <p>As a fresh Full Stack Developer, I am passionate about building web applications that are both
                    functional
                    and visually appealing. I have a solid foundation in front-end and back-end technologies, and I'm
                    continuously expanding my skills. Currently, I'm enhancing my expertise by learning advanced topics
                    at
                    GIAIC, where I focus on mastering the latest tools and frameworks in web development. My goal is to
                    create efficient, user-friendly solutions that meet the needs of modern businesses.</p>
            </div>
        </div>
        <hr>

        <main>
            <section class="education">
                <h2>Education</h2>
                <ul>
                    ${data.education}
                </ul>
            </section>
            <hr>
            <section class="experience">
                <h2>Experience</h2>
                <ul>
                    ${data.experience}
                </ul>
            </section>
            <hr>
            <section class="skills">
                <h2>Skills</h2>
                <ul>
                    ${data.skills}
                </ul>
            </section>
        </main>
     </div>
 `
}