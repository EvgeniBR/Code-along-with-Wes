const tabs = document.querySelector(`.tabs`);
const tabButtons = tabs.querySelectorAll(`[role = "tab"]`);
const tabPanels = tabs.querySelectorAll(`[role = "tabpanel"]`);

function handleTabClick(event) {
  //hide\
  tabPanels.forEach((panel) => {panel.hidden = true; });
  //mark\
  tabButtons.forEach(tab =>{
    // tab.ariaSelected = false;
    tab.setAttribute(`aria-selected` , false);
  });
  //mark clicked\
  event.currentTarget.setAttribute(`aria-selected` , true);
  //find and show
  const {id} = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby = "${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener(`click`, handleTabClick)
);
