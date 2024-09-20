function checkScreenResolution () {
    const leftSidebar = document.querySelector('.sidebar-container');
    const bottomBar = document.querySelector('.bottom-bar-container');
    const socialBar = document.querySelector('.bottom-social-bar-container');
    if (window.innerWidth < 992) {
        leftSidebar.classList.add('hidden');
        bottomBar.classList.remove('hidden');
    } else {
        socialBar.classList.add('hidden');
        bottomBar.classList.add('hidden');
        leftSidebar.classList.remove('hidden');        
    }
}

function socialClick () {
    const socialBar = document.querySelector('.bottom-social-bar-container');
    if (socialBar.classList.contains('hidden')) {
        socialBar.classList.remove('hidden');
    } else {
        socialBar.classList.add('hidden');
    }
}

function callCollapsed () {
    const mainContainer = document.querySelector('.main-container');
    const leftSidebar = document.querySelector('.sidebar-container');

    leftSidebar.classList.remove('expanded');
    leftSidebar.classList.add('collapsed');
    const mainContainerWidth = window.innerWidth - 60;
    console.log(mainContainerWidth);
    mainContainer.style.width = mainContainer.style.maxWidth = mainContainerWidth + 'px';
}

function callExpanded () {
    const mainContainer = document.querySelector('.main-container');
    const leftSidebar = document.querySelector('.sidebar-container');
    
    leftSidebar.classList.remove('collapsed');
    leftSidebar.classList.add('expanded');
    const mainContainerWidth = window.innerWidth - 200;
    console.log(mainContainerWidth);
    mainContainer.style.width = mainContainer.style.maxWidth =  mainContainerWidth + 'px';
}

window.addEventListener('load', () => {
    const socialButton = document.querySelector('.social-links');
    socialButton.addEventListener('click', socialClick);
        
    const socialBar = document.querySelector('.bottom-social-bar-container');
    const offsetFromBottom = 60;

    socialBar.style.bottom = `${offsetFromBottom}px`;

    const collapseButton = document.querySelector('.collapsed-button');
    const expandButton = document.querySelector('.expanded-button');

    collapseButton.addEventListener('click', callCollapsed);
    expandButton.addEventListener('click', callExpanded);

    checkScreenResolution();
    window.addEventListener('resize', checkScreenResolution);
});

// Chart
const dataLine = {
    type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(105, 0, 132, .2)',
            ],
            fill: true,
            borderColor: [
              'rgba(255, 99, 132, 0.8)',
            ],
            borderWidth: 2,
            tension: 0.4
          },
          {
            label: "My Second dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: [
              'rgba(0, 137, 132, .2)',
            ],
            fill: true,
            borderColor: [
              'rgba(50, 150, 255, 1)',
            ],
            borderWidth: 2,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true
      }
  };
  
  new Chart(document.getElementById('line-chart'), dataLine);