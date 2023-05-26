/* Define all the functions */
const setTitle = (data) => {
  // Set page title
  document.title = `${data.title} | ${data.name}`;
  document.querySelector('#profileName').innerHTML = data.name;
  document.querySelector('#profileSubTitle').innerHTML = data.sub_title;
  document.querySelector('#aboutIntro').innerHTML = data.about.intro;
  document.querySelector('#contactEmail').innerHTML = data.about.contact.email;
  document
    .querySelector('#contactEmail')
    .setAttribute('href', `mailto:${data.about.contact.email}`);
  document.querySelector('#contactPhone').innerHTML = data.about.contact.phone;
  document
    .querySelector('#contactPhone')
    .setAttribute('href', `tel:${data.about.contact.phone}`);
  // document.querySelector('#contactAddress').innerHTML =
  //   data.about.contact.address;

  if(window.innerWidth < 800){
    profileData.image.imageEnable = false;
  }

  if (data.image.imageEnable) {
    const profileHeader = document.querySelector('.header');
    profileHeader.style.display = 'flex';
    profileHeader.style.alignItems = 'center';
    profileHeader.style.justifyContent = 'space-between';
    profileHeader.style.textAlign = 'left';
    const aboutMe = document.querySelector('.about-me');
    aboutMe.style.width = '75%';
    const imgContainer = document.querySelector('.image-container');
    imgContainer.style.display = 'block';
    document.querySelector('#profileImage').src = data.image.src;
  }else{
    const profileHeader = document.querySelector('.header');
    profileHeader.style.textAlign = 'center';
    const aboutMe = document.querySelector('.about-me');
    aboutMe.style.width = '';
    const imgContainer = document.querySelector('.image-container');
    imgContainer.style.display = 'none';
    document.querySelector('#profileImage').src = '';
  }
};

const setLinks = (links) => {
  const linksList = document.querySelector('#linksList');
  links.forEach((link) => {
    const li = document.createElement('li');
    const title = document.createElement('div');
    title.className = 'link-title';
    title.innerHTML = link.title;
    li.appendChild(title);

    const linkSrc = document.createElement('div');
    linkSrc.className = 'link-src';
    const a = document.createElement('a');
    a.href = link.src;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = link.src;
    linkSrc.appendChild(a);
    li.appendChild(linkSrc);

    linksList.appendChild(li);
  });
};

const setEducation = (education) => {
  const ul = document.querySelector('#educationList');
  education.forEach((edu) => {
    const li = document.createElement('li');

    const eduHeader = document.createElement('div');
    eduHeader.className = 'edu-header';

    const eduAlma = document.createElement('span');
    eduAlma.className = 'edu-alma';
    eduAlma.innerHTML = edu.alma;
    eduHeader.appendChild(eduAlma);

    const eduDuration = document.createElement('span');
    eduDuration.className = 'edu-duration';
    eduDuration.innerHTML = edu.duration;
    eduHeader.appendChild(eduDuration);

    li.appendChild(eduHeader);

    const eduMid = document.createElement('div');
    eduMid.className = 'edu-mid';
    const eduBoard = document.createElement('span');
    eduBoard.className = 'edu-board';
    eduBoard.innerHTML = edu.board;

    eduMid.appendChild(eduBoard);
    li.appendChild(eduMid);

    const eduClassData = document.createElement('div');
    eduClassData.className = 'edu-class-data';

    const eduStd = document.createElement('span');
    eduStd.className = 'edu-std';
    eduStd.innerHTML = edu.std;
    eduClassData.appendChild(eduStd);

    const eduScore = document.createElement('span');
    eduScore.className = 'edu-score';
    eduScore.innerHTML = edu.score;
    eduClassData.appendChild(eduScore);

    li.appendChild(eduClassData);

    ul.appendChild(li);
  });
};

const setProjects = (projects) => {
  const ul = document.querySelector('#projectList');
  projects.forEach((project) => {
    const li = document.createElement('li');

    const projectHeader = document.createElement('div');
    projectHeader.className = 'project-header';

    const projectTitle = document.createElement('span');
    projectTitle.className = 'project-title';
    projectTitle.innerHTML = project.title;
    projectHeader.appendChild(projectTitle);

    const projectDuration = document.createElement('span');
    projectDuration.className = 'project-duration';
    projectDuration.innerHTML = project.duration;
    projectHeader.appendChild(projectDuration);

    li.appendChild(projectHeader);

    if (!!project.link || !!project.website || !!project.internship) {
      const projectLink = document.createElement('div');
      projectLink.className = 'project-link';

      if (!!project.link) {
        const projectIns = document.createElement('span');
        const a = document.createElement('a');
        a.href = project.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `Project Link`;
        projectIns.appendChild(a);
        projectLink.appendChild(projectIns);
      }
      if (!!project.website) {
        const projectIns = document.createElement('span');
        const a = document.createElement('a');
        a.href = project.website;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `Website Link`;
        projectIns.appendChild(a);
        projectLink.appendChild(projectIns);
      }
      if (!!project.internship) {
        const projectIns = document.createElement('span');
        const a = document.createElement('a');
        projectIns.style.backgroundColor = '#c93232';
        a.href = project.internship.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = `Internship : ${project.internship.company}`;
        projectIns.appendChild(a);
        projectLink.appendChild(projectIns);
      }

      li.appendChild(projectLink);
    }

    const projectDesc = document.createElement('div');
    projectDesc.className = 'project-desc';
    projectDesc.innerHTML = project.desc;

    li.appendChild(projectDesc);

    ul.appendChild(li);
  });
};

const setSkills = (skills) => {
  const skillList = document.querySelector('#skillList');
  skills.forEach((skill) => {
    let type_klass = 'cat-skill-type';
    let body_klass = 'cat-skill-body';

    if (!skill.graph) {
      type_klass += ' force-inline';
      body_klass += '-gen';
    }

    const catSkillItem = document.createElement('li');
    catSkillItem.className = 'cat-skill-item';

    const catSkillType = document.createElement('div');
    catSkillType.className = type_klass;
    catSkillType.innerHTML = skill.category;
    catSkillItem.appendChild(catSkillType);

    const catSkillBody = document.createElement('div');
    catSkillBody.className = body_klass;

    if (skill.graph) {
      skill.topics.forEach((topic) => {
        const skillGen = document.createElement('div');
        skillGen.className = 'skill-gen';

        const skillTitle = document.createElement('div');
        skillTitle.className = 'skill-title';
        skillTitle.innerHTML = topic;
        skillGen.appendChild(skillTitle);

        const skillProgressTrack = document.createElement('div');
        skillProgressTrack.className = 'skill-progress-track';
        const skillProgress = document.createElement('div');
        skillProgress.className = 'skill-progress';
        skillProgress.style = `width: ${topic.perc}`;
        skillProgressTrack.appendChild(skillProgress);

        skillGen.appendChild(skillProgressTrack);

        catSkillBody.appendChild(skillGen);
      });
    } else {
      skill.topics.forEach((topic) => {
        const skillGen = document.createElement('div');
        skillGen.className = 'skill-gen';
        skillGen.innerHTML = topic;
        catSkillBody.appendChild(skillGen);
      });
    }

    catSkillItem.appendChild(catSkillBody);

    skillList.appendChild(catSkillItem);
  });
};

const setExperience = (experiences) => {
  const expList = document.querySelector('#experienceList');
  experiences.forEach((exper) => {
    const expListItem = document.createElement('li');

    const expItem = document.createElement('div');
    expItem.className = 'exp-item';

    const expOrg = document.createElement('div');
    expOrg.className = 'exp-org';
    expOrg.innerHTML = exper.organization;
    expItem.appendChild(expOrg);

    const expSub = document.createElement('div');

    const expTitle = document.createElement('span');
    expTitle.className = 'exp-title';
    expTitle.innerHTML = `${exper.title}, (${exper.date})`;
    expSub.appendChild(expTitle);

    // const expDura = document.createElement('span');
    // expDura.className = 'ach-duration';
    // expDura.innerHTML = exper.date;
    // expSub.appendChild(expDura);

    expItem.appendChild(expSub);

    expListItem.appendChild(expItem);

    if (exper.details) {
      const expDetails = document.createElement('ul');
      expDetails.className = 'expDet';

      exper.details.forEach((dText) => {
        const detItem = document.createElement('li');
        detItem.style.listStyle = 'square';
        detItem.innerHTML = dText;
        expDetails.appendChild(detItem);
      });

      expListItem.appendChild(expDetails);
    }

    expList.appendChild(expListItem);
  });
};

const setEvents = (events) => {
  const footer = document.querySelector('.eveList');
  events.forEach((event) => {
    const eventTitle = setCatagoryHeader(event.title);
    footer.appendChild(eventTitle);

    const eventBody = document.createElement('div');
    eventBody.className = 'cat-list-body';

    const ul = document.createElement('ul');

    event.body.forEach((evt) => {
      const li = document.createElement('li');

      const achItem = document.createElement('div');
      achItem.className = 'ach-item';

      const achTitle = document.createElement('div');
      achTitle.className = 'ach-title';
      achTitle.innerHTML = evt.desc;
      achItem.appendChild(achTitle);

      const achDuration = document.createElement('div');
      achDuration.className = 'ach-duration';
      achDuration.innerHTML = evt.date;
      achItem.appendChild(achDuration);

      li.appendChild(achItem);
      ul.appendChild(li);
    });

    eventBody.appendChild(ul);
    footer.appendChild(eventBody);
  });
};

const setCertification = (certifications) => {
  const certList = document.getElementById('certList');

  certifications.forEach((evt) => {
    const li = document.createElement('li');

    const achItem = document.createElement('div');
    achItem.className = 'ach-item';

    const achTitle = document.createElement('div');
    achTitle.className = 'ach-title';
    achTitle.innerHTML = evt.desc;
    achItem.appendChild(achTitle);

    const achDuration = document.createElement('div');
    achDuration.className = 'ach-duration';
    achDuration.innerHTML = evt.date;
    achItem.appendChild(achDuration);

    li.appendChild(achItem);
    certList.appendChild(li);
  });
};

const setCatagoryHeader = (title) => {
  const catHeader = document.createElement('div');
  catHeader.className = 'cat-header';

  const catIndicator = document.createElement('span');
  catIndicator.className = 'cat-indicator';

  const i = document.createElement('i');
  i.className = 'fa fa-chevron-right';
  i['area-hidden'] = 'true';
  catIndicator.appendChild(i);
  catHeader.appendChild(catIndicator);

  const catTitle = document.createElement('span');
  catTitle.className = 'cat-title';
  catTitle.innerHTML = title;
  catHeader.appendChild(catTitle);

  return catHeader;
};

//  Entry Function, IIFE
(() => {
  // Call functions to load profile
  setTitle(profileData);
  setLinks(profileData.links);
  setExperience(profileData.experiences);
  setProjects(profileData.projects);
  setSkills(profileData.skills);
  setEducation(profileData.education);
  setCertification(profileData.certifications);
  setEvents(profileData.events);
  
  if(window.innerWidth < 800){
    const inCol = document.querySelector('.inacolomn');
    inCol.style.flexDirection = 'column'
  }else{
    const inCol = document.querySelector('.inacolomn');
    inCol.style.flexDirection = 'row'
  }

})();

const profileName = document.getElementById('profileName');
var darkTheme = true;
const linkCSS = document.querySelector('.linkCSS');

profileName.addEventListener('click', () => {
  if (darkTheme) {
    linkCSS.setAttribute('href', './assets/css/index.css');
    darkTheme = false;
  } else {
    linkCSS.setAttribute('href', './assets/css/darkIndex.css');
    darkTheme = true;
  }
});

window.addEventListener('resize',()=>{
  if(window.innerWidth < 800){
    profileData.image.imageEnable = false;
    const inCol = document.querySelector('.inacolomn');
    inCol.style.flexDirection = 'column'
  }
  else{
    profileData.image.imageEnable = true;
    const inCol = document.querySelector('.inacolomn');
    inCol.style.flexDirection = 'row'
  }
  setTitle(profileData);
})