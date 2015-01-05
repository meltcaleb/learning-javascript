(function() {
  
  var config = [
    {
      id: "#tab1",
      isActive: true,
      content: "#tabContent1"
    },
    {
      id: "#tab2",
      isActive: false,
      content: "#tabContent2"
    }
  ]

  function DomActivator(id, isActive) {
     this.removeActive = function() {
       this.isActive = false;
       this.elem.classList.remove("active");
     }
     this.setActive = function() {
       this.isActive = true;
       console.log(this.elem);
       this.elem.classList.add("active");
     }
     this.isActive = isActive;
     this.elem = document.querySelector(id);
     console.log(this.elem);
     this.id = id;
  }

  function TabManager(optionsObj) {
    this.init = function() {
      var i,
          tempTab,
          tempContent;
      for (i = 0; i < config.length; i++) {
        tempTab = new Tab(config[i].id, config[i].isActive);
        tempContent = new Content(config[i].content, config[i].isActive);
        if (tempTab.isActive) {
          this.currentTab = tempTab;
        };
      }
      this.tabClickListener();
    }  
    this.options = optionsObj;
    this.init();
  }

  TabManager.prototype = {
    setCurrentTab: function(newCurrentTab) {
      if (this.currentTab) {
        this.currentTab.removeActive();
      }
      console.log(newCurrentTab);
      this.currentTab = newCurrentTab;
    },
    tabClickListener: function() {
      document.addEventListener("tabClick", function(e) {
        this.setCurrentTab(e.detail);
      }.bind(this))
    }
  }

  function Tab(id, isActive) {
    DomActivator.call(this, id, isActive);
    this.init = function() {
      this.isClicked();
      if (this.isActive) {
        this.setActive();
      }
    }
    this.init();
  }

  // Defining Tab as a class.
  Tab.prototype = {
    isClicked: function() {
      var tabClick = new CustomEvent("tabClick", {"detail": this, bubbles: true});
      this.elem.addEventListener("click", function(){
        this.elem.dispatchEvent(tabClick);

        // Toggle Active Class on Tabs
        this.elem.classList.toggle("active");

      }.bind(this));
    }}

  function Content(id, isActive) {
    DomActivator.call(this, id, isActive);
    this.init = function() {
      if (this.isActive) {
        this.setActive();
      }
    }
    this.init();
  }

  var tM = new TabManager(config);

})();