const startButton = () => {
  const content1 = document.querySelectorAll('#content-1')
  const startContent = document.querySelectorAll('.start-content')

  startContent.forEach((nodelist) => {
    nodelist.classList.toggle('transition-out')
  })

  content1.forEach((nodelist) => {
    nodelist.classList.toggle('transition-in')
  })

  setTimeout(() => {
    startContent.forEach((nodelist) => {
      nodelist.classList.toggle('hide');
      nodelist.classList.toggle('transition-out');
    });

    content1.forEach((nodelist) => {
      nodelist.classList.toggle('hide');
      nodelist.classList.toggle('transition-in');
    });
  }, 1500)
}

const nextButton = () => {
  const content1 = document.querySelectorAll('#content-1')
  const content2 = document.querySelectorAll('#content-2')

  content1.forEach((nodelist) => {
    nodelist.classList.toggle('transition-out')
  })

  content2.forEach((nodelist) => {
    nodelist.classList.toggle('transition-in')
  })

  setTimeout(() => {
    content1.forEach((nodelist) => {
      nodelist.classList.toggle('hide');
      nodelist.classList.toggle('transition-out');
    });

    content2.forEach((nodelist) => {
      nodelist.classList.toggle('hide');
      nodelist.classList.toggle('transition-in');
    });
  }, 1500)
}