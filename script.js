const filterButtons = document.querySelectorAll(".filter-btn");
const publications = document.querySelectorAll(".publication");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    publications.forEach((publication) => {
      const match = filter === "all" || publication.dataset.category === filter;
      publication.classList.toggle("hidden", !match);
    });
  });
});

document.querySelectorAll("video[autoplay]").forEach((video) => {
  video.play().catch(() => {
    video.controls = true;
  });
});
