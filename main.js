// Intersection Observer for reveal animations

// Select all elements with the class "reveal"
const revealItems = document.querySelectorAll(".reveal");

// Create a new IntersectionObserver instance, which will observe when elements intersect 
// with the viewport
const revealObserver = new IntersectionObserver(
    // Callback function that runs when an observed element intersects with the viewport
  (entries, observer) => {
    // Loop through each entry (observed element)
    entries.forEach((entry) => {
        // If the element is not intersecting, do nothing and return
      if (!entry.isIntersecting) return;
      // If the element is intersecting, add the "is-visible" class to it
      entry.target.classList.add("is-visible");
          console.log(entry.target)
     
      // Stop observing the element after it has become visible
      observer.unobserve(entry.target);

   
    });
  },
  
  { threshold: 0.12 }
);
// Observe each reveal item with the IntersectionObserver 
revealItems.forEach((item) => revealObserver.observe(item));