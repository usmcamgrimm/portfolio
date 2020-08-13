const accordion = document.querySelector('.work-accordion');
const jobs = document.querySelectorAll('li');
const details = accordion.querySelectorAll('.job');

function toggleAccordion() {
    const thisItem = this.parentNode;
    jobs.forEach(item => {
        if(thisItem == item) {
            thisItem.classList.toggle('open');
            return;
        }
        item.classList.remove('open');
    })
}

details.forEach(job => job.addEventListener('click', toggleAccordion));