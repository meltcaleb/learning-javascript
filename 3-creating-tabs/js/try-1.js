(function() {

  var
    tab1,
    tab2,
    tab3,
    tabContent1,
    tabContent2,
    tabContent3;

  function setPageVariables() {
    tab1 = document.getElementById("tab1");
    tab2 = document.getElementById("tab2");
    tab3 = document.getElementById("tab3");
    tabContent1 = document.getElementById("tabContent1");
    tabContent2 = document.getElementById("tabContent2");
    tabContent3 = document.getElementById("tabContent3");
  }

  function tab1Click() {
    tabContent2.style.display = "none";
    tabContent3.style.display = "none";
    tab2.className = "";
    tab3.className = "";
    tab1.className = "active";
    tabContent1.style.display = "block";
  }

  function tab2Click() {
    tabContent1.style.display = "none";
    tabContent3.style.display = "none";
    tab1.className = "";
    tab3.className = "";
    tab2.className = "active";
    tabContent2.style.display = "block";
  }

  function tab3Click() {
    tabContent1.style.display = "none";
    tabContent2.style.display = "none";
    tab1.className = "";
    tab2.className = "";
    tab3.className = "active";
    tabContent3.style.display = "block";
  }

  function setPageEvents() {
    tab1.addEventListener("click", tab1Click);
    tab2.addEventListener("click", tab2Click);
    tab3.addEventListener("click", tab3Click);
  }

  function runPageFunctions() {
    setPageVariables();
    setPageEvents();
  }

  window.addEventListener("load", runPageFunctions);

})();