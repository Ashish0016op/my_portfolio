const allskill = [
    { HTML: './assets/html.png' },
    { CSS: './assets/css.png' },
    { Js: './assets/javascript.png'},
    { Typescript: './assets/typescript.png' },
    { React: './assets/reactjs.png'},
    { Redux: './assets/redux.png' },
    { Nextjs: './assets/nextjs.png'},
    { Nodejs: './assets/Nodejs.png' },
    { ExpressJs: './assets/express.png' },
    { Mongodb:  './assets/mongodb.png'},
    { Mongoose: './assets/mongoose.png' },
    { Git: './assets/git.png' },
    { AWS: './assets/aws.png' },
    { ChakraUi: './assets/chakraui.png' },
    { Tailwindcss: './assets/tailwindcss.png'},
  ];
  const fontendSkills=[
    { HTML: './assets/html.png' },
    { CSS:'./assets/css.png' },
    { Js: './assets/javascript.png' },
    { Typescript:'./assets/typescript.png'},
    { React:'./assets/reactjs.png' },
    { Redux: './assets/redux.png' },
    { Nextjs: './assets/nextjs.png' },
    { ChakraUi: './assets/chakraui.png' },
    { Tailwindcss: './assets/tailwindcss.png' },
  ];
  const backendSkills=[
    { Nodejs: './assets/Nodejs.png' },
    { ExpressJs: './assets/express.png' },
    { Mongodb: './assets/mongodb.png' },
    { Mongoose: './assets/mongoose.png'},
    { AWS: './assets/aws.png' },
  ]
      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
      document.addEventListener('DOMContentLoaded', showAllSkills);
      function showAllSkills() {
    const allSkills = document.getElementById('All-Skills');
    allSkills.innerHTML = '';
    allskill.map((skill) => {
      const skillName = Object.keys(skill)[0];
      const imagePath = skill[skillName];
      const div = document.createElement('div');
      div.className='skill';
      div.innerHTML = `<img src=${imagePath} alt="image"/><p>${skillName}</p>`;
      allSkills.appendChild(div);
    });
  }

  function showFrontendSkills() {
    const allSkills = document.getElementById('All-Skills');
    allSkills.innerHTML = '';
    fontendSkills.map((skill) => {
      const skillName = Object.keys(skill)[0];
      const imagePath = skill[skillName];
      const div = document.createElement('div');
      div.className='skill';
      div.innerHTML = `<img src=${imagePath} alt="image"/><p>${skillName}</p>`;
      allSkills.appendChild(div);
    });
  }

  function showBackendSkills() {
    const allSkills = document.getElementById('All-Skills');
    allSkills.innerHTML = '';
    backendSkills.map((skill) => {
      const skillName = Object.keys(skill)[0];
      const imagePath = skill[skillName];
      const div = document.createElement('div');
      div.className='skill';
      div.innerHTML = `<img src=${imagePath} alt="image"/><p>${skillName}</p>`;
      allSkills.appendChild(div);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav_list a');
  
    window.onscroll = () => {
      let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      sections.forEach(section => {
        if (
          scrollPosition >= section.offsetTop - 150 &&
          scrollPosition < section.offsetTop + section.offsetHeight - 150
        ) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
              link.classList.add('active');
            }
          });
        }
      });
    };
  });
  