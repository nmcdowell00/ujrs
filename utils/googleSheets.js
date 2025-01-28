import { google } from "googleapis";

const SHEET_ID = "your-google-sheet-id";
const RANGE = "Sheet1!A1:D"; // Adjust to your sheet range

export async function fetchSheetData() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./path/to/your-service-account-key.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: RANGE,
  });

  const rows = response.data.values;
  if (!rows) return [];

  const headers = rows[0];
  return rows.slice(1).map((row) =>
    headers.reduce((acc, header, i) => {
      acc[header] = row[i] || "";
      return acc;
    }, {})
  );
}
