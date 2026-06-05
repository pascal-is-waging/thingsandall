let data;
const SPREADSHEET_ID = "1ss8B5h4rJbP9pAfxvN5aq0GRdIh13jTkCSUelQXcvoU";
const SHEET_TITLE = "Amir - Web";

// 2. Construct the special Visualization API URL
const URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}`;

async function logSheetData() {
  try {
    const response = await fetch(URL);
    const text = await response.text();

    // Extract the pure JSON string out of Google's security wrapper
    const jsonString = text.substring(
      text.indexOf("{"),
      text.lastIndexOf("}") + 1,
    );
    const json = JSON.parse(jsonString);

    const rows = json.table.rows;

    // Map the rows into clean objects based on column order (A, B, C...)
    data = rows.map((row) => {
      return {
        a: row.c[0] ? row.c[0].v : null,
        b: row.c[1] ? row.c[1].v : null,
        c: row.c[2] ? row.c[2].v : null,
        d: row.c[3] ? row.c[3].v : null,
        e: row.c[4] ? row.c[4].v : null,
        f: row.c[5] ? row.c[5].v : null,
        // Add columnD: row.c[3] ? row.c[3].v : null, etc., if you have more columns
      };
    });

    // Output the final array to the console
    console.log("🚀 Google Sheet Data:", data);
  } catch (error) {
    console.error("❌ Error fetching sheet:", error);
  }
}

logSheetData();
