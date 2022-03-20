import blogposts from "./blogposts.js";

const blogsContainer = document.querySelector(".blogs-container");

const cardMarkup = function (
  firstImg,
  href,
  postHeading,
  postDescription,
  blogDescription
) {
  return `
    <div class="card">
        <div class="blog-img-container">
            <img
                src=${firstImg}
                alt="Blog"
                class="blog-img"
            />
        </div>
        <div class="blog">
            <a href=${href} class="blog-title">
                ${postHeading}
            </a>
            <p class="blog-date">${postDescription}</p>
            <p class="blog-description">
                ${blogDescription}
            </p>
        </div>
    </div>
    `;
};

blogposts.forEach((blog) => {
  const { postHeading, href, postDescription, firstImg, blogDescription } =
    blog;
  blogsContainer.insertAdjacentHTML(
    "beforeend",
    cardMarkup(firstImg, href, postHeading, postDescription, blogDescription)
  );
});
