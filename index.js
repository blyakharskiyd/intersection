let counter = 0;

const options = {
  root: document.getElementById('ulWrapper'),
  rootMargin: '0px',
  threshold: 1.0
};

const targets = document.querySelectorAll('.wrapperData');
const targetMessage = document.querySelector('#targetMessage');
const observer = new IntersectionObserver(entries => {
  entries.some(entry => {
    if (entry.isIntersecting) {
      counter++;
    }
  });
  targetMessage.innerHTML = counter;
}, options);

targets.forEach(target => {
  if (target.innerHTML === 'target') {
    observer.observe(target);
  }
});
