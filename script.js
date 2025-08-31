console.log("Script Loaded");

// Hidden Nav Menu

const openMenuBtn = document.getElementById("menuBtn");
const hiddenNav = document.getElementById("hiddenNav");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// Feature Section of Nav Menu

const featureSection = document.getElementById("featureSection");
const featuresContainer = document.getElementById("featuresCollapse");
const featureArrow = document.getElementById("featureArrow");

// Company Section of Nav Menu

const companySection = document.getElementById("companySection");
const companyContainer = document.getElementById("companyCollapse");
const companyArror = document.getElementById("companyArrow");

// Opens Nav Menu

openMenuBtn.addEventListener("click", () => {
  hiddenNav.classList.add("unhide-nav");
  overlay.classList.add("show-overlay");
});

// Closes Nav Menu

closeBtn.addEventListener("click", () => {
  hiddenNav.classList.remove("unhide-nav");
  overlay.classList.remove("show-overlay");
});

// Collapse or Expand Feature Menu

featureArrow.addEventListener("click", () => {
  const isCollapsed = featuresContainer.classList.contains("feature-collapse");

  if (isCollapsed) {
    featureSection.classList.remove("collapse-features");
    featuresContainer.classList.remove("feature-collapse");
    featureArrow.classList.remove("arrow-rotate");
  } else {
    featureSection.classList.add("collapse-features");
    featuresContainer.classList.add("feature-collapse");
    featureArrow.classList.add("arrow-rotate");
  }
});

// Collapse or Expand Company Menu

companyArror.addEventListener("click", () => {
  const isCollapsed = companyContainer.classList.contains("company-collapse");

  if (isCollapsed) {
    companySection.classList.remove("collapse-company");
    companyContainer.classList.remove("company-collapse");
    companyArror.classList.remove("arrow-rotate");
  } else {
    companySection.classList.add("collapse-company");
    companyContainer.classList.add("company-collapse");
    companyArror.classList.add("arrow-rotate");
  }
});

// Desktop Menu Drop downs

const featuresDropDown = document.getElementById("featuresNav");
const featuresHeader = document.getElementById("featuresHeader");

const companyDropDown = document.getElementById("companyNav");
const companyHeader = document.getElementById("companyHeader");

// Unhide Drop downs

featuresHeader.addEventListener("click", () => {
  const isCollapsed = featuresDropDown.classList.contains(
    "features-nav-container-unhide"
  );

  if (isCollapsed) {
    featuresDropDown.classList.remove("features-nav-container-unhide");
  } else {
    featuresDropDown.classList.add("features-nav-container-unhide");
    companyDropDown.classList.remove("company-nav-container-unhide");
  }
});

companyHeader.addEventListener("click", () => {
  const isCollapsed = companyDropDown.classList.contains(
    "company-nav-container-unhide"
  );

  if (isCollapsed) {
    companyDropDown.classList.remove("company-nav-container-unhide");
  } else {
    companyDropDown.classList.add("company-nav-container-unhide");
    featuresDropDown.classList.remove("features-nav-container-unhide");
  }
});
