const profileData = {
  title: 'Resume',
  name: 'Om Prakash Bharati',
  sub_title: 'Full Stack Developer',
  image: {
    imageEnable: true,
    src: './assets/Images/ImageProfile.png',
    alt: 'Om Prakash Bharati',
  },
  about: {
    intro: `I am an innovative and passionate developer with a primary interest in <strong>JavaScript & React</strong>
     and its applications. Experienced in designing and implementing sophisticated UI/UX with
      Progressive Web Application standards and application life-cycle management.`,
    contact: {
      email: 'omprakash121samuni@gmail.com',
      phone: '+919660102328',
      address: 'Bihar, IN',
    },
  },
  links: [
    { title: 'Website', src: 'http://samnickgammer.github.io/' },
    { title: 'GitHub', src: 'https://github.com/SamNickGammer' },
    { title: 'LinkedIn', src: 'https://www.linkedin.com/in/omprakashbharati/' },
    { title: 'Twitter', src: 'https://twitter.com/omprakash121uni' },
    { title: 'HackerRank', src: 'https://www.hackerrank.com/samnickgammer_' },
  ],
  education: [
    {
      alma: 'Amity University, Kolkata',
      board: 'Amity School of Engineering and Technology ',
      duration: '2019 - Current',
      std: 'B.Tech. (Computer Science & Engineering)',
      score: '7.57 CGPA',
    },
    {
      alma: 'P.M.Y (S.S) School, Seoganj',
      board: 'Bihar School Examination Board',
      duration: '2017 - 2019',
      std: 'Class XI - XII (PCM)',
      score: '66.66%',
    },
    {
      alma: 'Vikekananda Mission School, Daudnagar',
      board: 'Central Board of Secondary Examination',
      duration: '2014 - 2016',
      std: 'Class IX - X (PCM)',
      score: '93.1%',
    },
  ],
  skills: [
    {
      category: 'Programming Languages',
      topics: ['JavaScript', 'Typescript', 'Python', 'C++', 'Java'],
    },
    {
      category: 'Frameworks / Libraries',
      topics: ['ReactJS', 'NodeJS', 'Redux', 'Bootstrap', 'NumPy', 'OpenCV'],
    },
    {
      category: 'Databases',
      topics: ['FireStore', 'MySQL'],
    },
    {
      category: 'Extras',
      topics: ['HTML', 'CSS', 'FireBase'],
    },
    {
      category: 'Git',
      topics: ['GitHub', 'Azure DevOps'],
    },
  ],
  projects: [
    {
      title: 'Personal Portfolio',
      duration: 'Oct 2021',
      link: 'https://github.com/SamNickGammer/samnickgammer.github.io',
      website: 'https://samnickgammer.github.io',
      desc: `This is JavaScript Based Web Application to share my self to others in simple way `,
    },
    {
      title: 'e-Patra : Email Services',
      duration: '15<sup>th</sup> May 2022 - Current',
      // link: 'https://github.com/SamNickGammer/samnickgammer.github.io',
      website: 'https://e-patra.com/',
      desc: `This is a ReactJS(Typescript) and NodeJS based Web Application to send emails to users.</br>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;">
        <div>
          <strong>Application Include:</strong> <br>
          <ul>
            <li>Authentication</li>
            <li>Create and Send Mail</li>
            <li>Use Drive For Storage</li>
            <li>Use Album for Uploading images</li>
            <li>Use Drive For Storage</li>
            <li> Use Social Application Name GUPSHUP for socializing.</li>
            <li>Use Notes to take notes on the Go.</li>
            <li> You can use the Contacts application for saving your important contacts.</li>
          </ul>
        </div>
      <div>
        <strong>Application Feature:</strong> <br>
        <ul>
          <li>Secure mail</li>
          <li>Upload up to 1TB (1024GB) in single go</li>
          <li>Modern PGP Encryption for extra sensitive data/emails.</li>
          <li>Album for uploading images</li>
          <li>Notes for taking notes on the go</li>
          <li>Contacts for saving your important contacts</li>
          <li>Drive for storing your data</li>
          <li>Chat Application for socializing</li>
        </ul>
        </div>
      </div>
      `,
      internship: {
        title: 'Internship',
        company: 'Aniworks',
        link: 'https://aniworks.in/',
      },
    },
    {
      title: 'StackDevFlow - A StackOverflow Clone',
      duration: '29<sup>th</sup> August 2022',
      link: 'https://github.com/SamNickGammer/devStackClient',
      website: 'https://samnickgammer.github.io/devStackClient/',
      desc: `This is a MERN based Web Application to share knowledge and help others. Just like StackOverflow you can ask questions and answer them. For database I am using MongoDB and for authentication I am using Firebase. Hosting of the website is done on GitHub Pages, and the backend is hosted on Heroku.</br> <strong><a href="https://devstackflow.herokuapp.com/" target="_blank">Backend Link</a></strong> | <strong><a href="https://github.com/SamNickGammer/devStackServer" target="_blank">Backend Code</a></strong>`,
      internship: {
        title: 'Internship',
        company: 'Prograd',
        link: 'http://prograd.org/',
      },
    },
    {
      title: '15 Days 15 Projects Challenge',
      duration: '16<sup>th</sup> Jan 2022 - 1<sup>st</sup> Feb 2022',
      link: 'https://github.com/SamNickGammer/15Day15ProjectChallange_JS',
      website: 'https://samnickgammer.github.io/15Day15ProjectChallange_JS/',
      desc: `This is small but Intresting project Challenge to be completed in 15 days, each day I have to choose one poject from anywhere and code it and complete it in approx 4-5 hrs. `,
    },
    {
      title: 'Netflix Clone - React',
      duration: '17<sup>th</sup> Sep 2021',
      link: 'https://github.com/SamNickGammer/NetflixCloneReactJS',
      website: 'https://samnickgammer-netflixclone.netlify.app/',
      desc: `ReactJS project Netflix Clone includes Netflix API, YoutubeAPI, Redux, Axios. This the the UI design of Netflix. This is Part of my Clone Series.`,
    },
    {
      title: 'Google Search Clone - React',
      duration: '19<sup>th</sup> Dec 2021',
      link: 'https://github.com/SamNickGammer/GoogleAPIWebpageReact',
      website: 'https://samnickgammer-googleclone.netlify.app/',
      desc: `ReactJS project Google Search Clone includes Google API, Redux, Axios. This is fully working search engine. This is Part of my Clone Series`,
    },
    {
      title: 'Doogo Notes App',
      duration: '22<sup>nd</sup> Dec 2021',
      link: 'https://github.com/SamNickGammer/Doggo_App',
      website: 'https://appetize.io/embed/aldlt6sjzkmmy6oglzmtouxjme?device=pixel4&osVersion=11.0&scale=75',
      desc: `This is the fully customized Notes taking APP for Student, Teacher, Workers and Everyone... 
      In this notes App, users can access their pieces of information or the data using Firebase as well as Local Storage.`,
    },
    {
      title: 'Powerfull GitHub API',
      duration: '27<sup>th</sup> Sep 2021',
      link: 'https://github.com/SamNickGammer/GitHubAPI',
      website: 'https://samnickgammer.github.io/GitHubAPI/',
      desc: `In this project my aim was to create a powerful webpage to show all the information present on any GitHub Page. Like Name, Bio, Followers, Following, Repository, Image, Some Website links etc. This web app can also build your personal Contribution Graph and show all the repository in one page...`,
    },
  ],
  experiences: [
    {
      organization: 'Aniworks Innovation Company',
      title: `Frontend Developer`,
      date: 'May 2022 - Current',
      details: [
        `Working on <strong>Email Extension Client or Email Service</strong> which include: 
        <ul>
          <li><strong>PGP Encryption</strong> That's allow to send encrypted mails.</li>
          <li><strong>Drive Service</strong> That's Store mail's data like attachments and Images in cloud storage.</li>
          <li><strong>Contacts</strong> Auto/Manual Add contacts when ever you send mail to someone, so that you can use it in future.</li>
        </ul> `,
        `Completed <strong>Mini Photo Album</strong> which include: 
        <ul>
          <li><strong>Creating Albums</strong> That's allow to create album in three different cloud area.</li>
          <li><strong>Uploading Images</strong> It store all the image in respective album in its own given cloud storage.</li>
          <li><strong>Edit Image</strong> If you want to instant edit image you can do it and save it back to Cloud.</li>
        </ul> `,
      ],
    },
    {
      organization: 'Prograd',
      title: `Trainee Internship - Full Stack Developer`,
      date: 'June 2022 - August 2022',
      details: [
        `Bootcamp + Internship for Full stack web development using ReactJS, NodeJS, MongoDB, Express, JavaScript, CSS: 
        <ul>
          <li>Projects on HTML, CSS, JS</li>
          <li>Project of React JS, MongoDB, Express</li>
          <li>Learn About Git & Pushed Projects </li>
          <li>Deployment of website on Heroku and Github Page</li>
        </ul> `,
      ],
    },
    {
      organization: 'Institute Of ABC',
      title: `Computer Lab Incharge`,
      date: 'April 2017 - March 2019',
      details: [
        `Working on <strong>Advance Diploma in Computer Application (ADCA)</strong> which include: 
        <ul>
          <li><strong>Microsoft Office</strong> (Word, Excel, Access, Powerpoint)</li>
          <li><strong>Accounting</strong> (Tally ERP9 , Tally 7.0)</li>
          <li><strong>Designing/Illustrations</strong> (Photoshop, Ilustrator, CoralDraw)</li>
        </ul> `,
      ],
    },
  ],
  certifications: [
    {
      desc: `<strong>Full Stack Web Devlopment</strong> by <strong>Swifsys Technologies</strong>.
      (<a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1Xb56uzln5lzlhuLRhjKiHiq3ATmfTkKv/view?usp=sharing'>Click Here</a>)`,
      date: 'July 2019 - Dec 2019',
    },
    {
      desc: `<strong>Responsive Web Design</strong> by <strong>FreeCodeCamp</strong>.
      (<a target='_blank' rel='noreferrer' href='https://www.freecodecamp.org/certification/samnickgammer/responsive-web-design'>Click Here</a>)`,
      date: '25<sup>th</sup> April 2022',
    },
    {
      desc: `<strong>Problem Solving</strong> by <strong>HackerRank</strong>.
      (<a target='_blank' rel='noreferrer' href='https://www.hackerrank.com/certificates/54412e24cb5b'>Click Here</a>)`,
      date: '28<sup>th</sup> March 2021',
    },
    {
      desc: `<strong>Python (Basic)</strong> by <strong>HackerRank</strong>.
      (<a target='_blank' rel='noreferrer' href='https://www.hackerrank.com/certificates/fdafb1cf47b6'>Click Here</a>)`,
      date: '5<sup>th</sup> October 2021',
    },
    {
      desc: `<strong>CSS Certification</strong> by <strong>HackerRank</strong>.
      (<a target='_blank' rel='noreferrer' href='https://www.hackerrank.com/certificates/1861f2fd130a'>Click Here</a>)`,
      date: '5<sup>th</sup> October 2021',
    },
    {
      desc: `<strong>Cloud Computing</strong> by <strong>Udemy</strong>.
      (<a target='_blank' rel='noreferrer' href='https://www.udemy.com/certificate/UC-c9071c51-691c-49b7-b3e1-6c3b1465727a/'>Click Here</a>)`,
      date: '6<sup>th</sup> February 2020',
    },
  ],
  events: [],
};
