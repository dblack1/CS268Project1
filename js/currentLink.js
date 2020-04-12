currentLinks = document.querySelectorAll(
  'a[href="' + window.location.pathname.split("/").pop() + '"]'
);
console.log(currentLinks);
currentLinks.forEach(function (link) {
  link.className += " current-link";
});
