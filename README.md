# Google Sheets Search Bar Web App

This Google Apps Script project allows you to create a search bar functionality that can be used both within Google Sheets and as a standalone search bar in Google Sites.

## Features

- Open a custom menu in Google Sheets to access the search bar.
- Enter a value and search for it in Column A.
- Display the corresponding value from Column B below the search bar.

## Getting Started

### Prerequisites

- A Google account
- A Google Sheets document
- A google sites 

### Installation

1. Open your Google Sheets document.
2. Click on "Extensions" > "Apps Script."
3. Paste the provided Google Apps Script code into the script editor (Page.html and Code.gs).
4. Save the project.
![Alt Text]([Image URL](https://github.com/itsmmrd/Google-Sites-Search-Bar/blob/main/screen.jpg))

### Usage in Google Sheets

1. Refresh your Google Sheets document.
2. You will see a new "Custom Menu" option. Click on it.
3. Click on "Open Search Bar" to open the search bar.
4. Enter a value and click "Search."
5. The result will be displayed below the search bar.

### Deploying as a Web App (for Google Sites)

1. Click on the deploy button (rocket icon) in the toolbar of the Apps Script editor.
2. Choose a new version if prompted and set the access to "Anyone, even anonymous."
3. Click "Deploy."
4. Copy the provided web app URL.

### Using in Google Sites

1. Open your Google Site.
2. Edit the page where you want to add the search bar.
3. Insert a new "Apps Script" gadget.
4. Paste the copied web app URL into the gadget settings.
5. Save the changes.
6. The search bar is now embedded in your Google Site.
7. Enter a value, click "Search," and view the result on the page.

## Customization

- You can customize the appearance by modifying the HTML and CSS in the `Page.html` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
