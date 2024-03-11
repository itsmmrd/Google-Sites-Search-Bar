function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
      .addItem('Open Search Bar', 'openSearchBar')
      .addToUi();
}

function openSearchBar() {
  var htmlOutput = HtmlService.createTemplateFromFile('Page').evaluate();
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Search Bar');
}

function searchValue(value) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getRange('A:B').getValues();
  
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] == value) {
      return data[i][1];
    }
  }
  
  return 'Value not found';
}

function doGet() {
  return HtmlService.createTemplateFromFile('Page').evaluate();
}
