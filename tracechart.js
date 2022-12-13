function toggleDonate() {
  if (hideDonate) return;
  var donateButtonWrapper = $(".donate-wrapper");
  if (!donateButtonWrapper.length) {
    donateButtonWrapper =
      '<span class="donate-wrapper">' + donateButton + "</span>";
    $(".board-header-btns.mod-left:first").append(donateButtonWrapper);
    $(".js-hide-donate").click(onHideDonate);
  } else {
    if (donateButtonWrapper.is(":visible")) {
      donateButtonWrapper.css("display", "none");
    } else {
      donateButtonWrapper.css("display", "inline-block");
    }
  }
}

function updateTrace() {
  var TraceChart = $(".Trace-icon");
  if (!TraceChart.length) {
    TraceChart = $("<span>", {
      class: "board-header-btn TraceChart",
      click: toggleDonate,
    });
    $(".board-header-btns.mod-left:first").append(TraceChart);
  }
  TraceChart.text("TraceChart");
}

updateTrace();

let body = document.querySelector("body");
let addElement = document.createElement("h1");
addElement.textContent = "HELLO WORLD";
body.prepend(addElement);

/* function updateTraceChart() {
  // Add the link for Burndown Charts
  //$('.s4tLink').remove();
  if ($(".s4tLink").length === 0) {
    var buttons = "";
    // Link for Burndown Charts
    var linkSetting = S4T_SETTINGS[SETTING_NAME_LINK_STYLE];
    if (linkSetting !== "none") {
      buttons +=
        "<a id='TraceChart' class='s4tLink quiet ed board-header-btn dark-hover' href='#'>";
      buttons +=
        "<span class='icon-sm board-header-btn-icon'><img src='" +
        flameUrl +
        "' width='12' height='12'/></span>";
      if (linkSetting !== "icon") {
        buttons +=
          "<span class='text board-header-btn-text'>Burndown Chart</span>";
      }
      buttons += "</a>";
    }
    // Link for settings
    buttons +=
      "<a id='scrumSettingsLink' class='s4tLink quiet ed board-header-btn dark-hover' href='#'>";
    buttons +=
      "<span class='icon-sm board-header-btn-icon'><img src='" +
      scrumLogoUrl +
      "' width='12' height='12' title='Settings: Scrum for Trello'/></span>";
    //buttons += "<span class='text board-header-btn-text'>Settings</span>"; // too big :-/ icon only for now
    buttons += "</a>";
    var showOnLeft = true;
    if (showOnLeft) {
      $(".board-header-btns.mod-left").last().after(buttons);
    } else {
      $(".board-header-btns.mod-right,#board-header a").last().after(buttons);
    }
    $("#TraceChart").click(showTraceChart);
    $("#scrumSettingsLink").click(showSettings);
  }
} */
