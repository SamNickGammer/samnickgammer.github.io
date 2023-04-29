/* --------------------- Function for Burger Menu Open Close Changing --------------------- */
const burgurMenu = document.querySelector('.burgurMenu');
const sideNavBar = document.querySelector('.sideNavBar');
const textSideBar = document.querySelectorAll('.textSideBar');
burgurMenu.addEventListener('click', () => {
  sideNavBar.classList.toggle('show');
  // pause code execution for 0.5 seconds
  textSideBar.forEach(async (textSideBar) => {
    if (sideNavBar.classList.contains('show')) {
      await sleep(280).then(() => {
        textSideBar.classList.toggle('show');
      });
    } else {
      textSideBar.classList.toggle('show');
    }
  });
});

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/* --------------------- Function for Page Changing --------------------- */
const menuClickBtn = document.querySelectorAll('.menuClickBtn');
const sideSelector = document.querySelectorAll('.sideSelector');

function selectPage(element) {
  menuClickBtn.forEach((ele) => {
    ele.classList.remove('active');
    ele.children[2].classList.remove('active');
  });
  element.classList.add('active');
  element.children[2].classList.add('active');
}
const pageSlider = document.querySelectorAll('.pageSlider');
const clickSection = document.querySelectorAll('[data-click-section-active]');

clickSection.forEach((section) => {
  section.addEventListener('click', () => {
    const sectionID = document.querySelector(
      section.dataset.clickSectionActive
    );
    pageSlider.forEach((page) => {
      page.classList.remove('activePage');
    });
    sectionID.classList.add('activePage');
  });
});

