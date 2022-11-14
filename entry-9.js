let highlightClass = 'highlight'; 
let highlightBlocks = document.querySelectorAll('section'); 


highlightBlocks.forEach((block) => {
	let sectionObserver = new IntersectionObserver(entries => {
		let [entry] = entries;

		
		entry.isIntersecting ? block.classList.add(highlightClass) : block.classList.remove(highlightClass); 
	}, {
		root: document, 
		rootMargin: '-33% 0% -33% 0%', 
	});

	sectionObserver.observe(block); 
});