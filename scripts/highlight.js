document.addEventListener('DOMContentLoaded', () => {
  const SCROLL_OFFSET = 50;

  let highlightProjects = document.querySelectorAll('.project-highlight');
  let highlightProjectBackgrounds = document.querySelectorAll('.background-container');
  let activeChildIndex = 0;

  function setActiveProject(index) {
    highlightProjects[activeChildIndex].classList.remove('highlight-project-active');
    highlightProjectBackgrounds[activeChildIndex].classList.remove('highlight-background-active');
    activeChildIndex = index;
    highlightProjects[index].classList.add('highlight-project-active');
    highlightProjectBackgrounds[index].classList.add('highlight-background-active');
  }

  document.getElementById('prev-project-button').addEventListener('click', () => {
    setActiveProject(activeChildIndex - 1 == -1 
      ? highlightProjects.length - 1
      : activeChildIndex - 1);
  });

  document.getElementById('next-project-button').addEventListener('click', () => {
    setActiveProject((activeChildIndex + 1) % highlightProjects.length);
  });

  document.querySelector('.view-more-arrow').addEventListener('click', () => {
    window.scrollTo(0, window.innerHeight - SCROLL_OFFSET);
  });
});
