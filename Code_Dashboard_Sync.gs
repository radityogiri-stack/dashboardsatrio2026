/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT - TUNAS TOYOTA DASHBOARD AUTO-SYNC ENGINE
 * ==============================================================================
 * Petunjuk Pemasangan:
 * 1. Buka Google Sheets Anda (yang berisi data RS AFI, Dashboard KPI, Trade In, AR).
 * 2. Klik menu: Extensions (Ekstensi) -> Apps Script.
 * 3. Hapus kode yang ada, lalu paste seluruh script ini.
 * 4. Klik tombol "Save" (ikon disket).
 * 5. Klik tombol "Deploy" (di pojok kanan atas) -> "New deployment".
 * 6. Pilih type: "Web app".
 *    - Description: "Tunas Toyota Dashboard API"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (Siapa saja, agar web dashboard bisa membaca data)
 * 7. Klik "Deploy", lalu salin Web App URL (contoh: https://script.google.com/macros/s/.../exec).
 * 8. Masukkan Web App URL tersebut ke menu "Pengaturan Sync" di Web Dashboard!
 * ==============================================================================
 */

function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const action = (e && e.parameter && e.parameter.action) ? e.parameter.action : 'getData';

    // Ping check
    if (action === 'ping') {
      return createJsonResponse({ status: 'success', message: 'Tunas Toyota Sync Engine Active', timestamp: new Date() });
    }

    // Update eNCOmpare selection directly in spreadsheet (Two-Way Sync)
    if (action === 'update_encompare') {
      const encSheet = ss.getSheetByName('eNCOmpare') || ss.getSheetByName('encompare');
      if (encSheet) {
        if (e.parameter.usage) encSheet.getRange('C1').setValue(Number(e.parameter.usage));
        if (e.parameter.mileage) encSheet.getRange('C2').setValue(Number(e.parameter.mileage));
        if (e.parameter.toyota) encSheet.getRange('C3').setValue(e.parameter.toyota);
        if (e.parameter.non_toyota) encSheet.getRange('D3').setValue(e.parameter.non_toyota);
        return createJsonResponse({ status: 'success', message: 'eNCOmpare updated in spreadsheet successfully' });
      }
    }

    // Ambil data dari seluruh sheet terkait
    const payload = {
      status: 'success',
      timestamp: new Date().toISOString(),
      sheetsFound: [],
      data: {}
    };

    const allSheets = ss.getSheets();
    allSheets.forEach(sheet => {
      const name = sheet.getName();
      payload.sheetsFound.push(name);
      
      // Ambil sheet RS AFI / Sheet1
      if (name.toLowerCase().includes('rs afi') || name.toLowerCase() === 'sheet1') {
        payload.data.rs_afi = parseTableSheet(sheet);
      }
      
      // Ambil sheet Dashboard / SATRIO
      if (name.toLowerCase().includes('satrio') || name.toLowerCase().includes('dashboard')) {
        payload.data.dashboard_kpi = parseKpiSheet(sheet);
      }

      // Ambil sheet Trade In / Prospect Monitoring
      if (name.toLowerCase().includes('prospect') || name.toLowerCase().includes('trade in')) {
        payload.data.trade_in = parseTableSheet(sheet);
      }

      // Ambil AR
      if (name.toLowerCase().includes('ar') || ['januari','februari','maret','april','mei','juni','juli','agustus','september','oktober'].includes(name.toLowerCase())) {
        if (!payload.data.ar) payload.data.ar = [];
        const arRows = parseTableSheet(sheet);
        arRows.forEach(r => { r._sheetMonth = name; });
        payload.data.ar = payload.data.ar.concat(arRows);
      }
    });

    return createJsonResponse(payload);

  } catch (err) {
    return createJsonResponse({ status: 'error', message: err.toString() });
  }
}

/**
 * Helper mengubah range tabular menjadi array of objects JSON
 */
function parseTableSheet(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];

  // Cari baris header sebenarnya (biasanya baris 0, 1, atau 2)
  let headerRowIdx = 0;
  for (let i = 0; i < Math.min(data.length, 5); i++) {
    const rowStr = data[i].join(' ').toLowerCase();
    if (rowStr.includes('spk') || rowStr.includes('model') || rowStr.includes('sales') || rowStr.includes('invoice') || rowStr.includes('merek')) {
      headerRowIdx = i;
      break;
    }
  }

  const headers = data[headerRowIdx];
  const results = [];

  for (let i = headerRowIdx + 1; i < data.length; i++) {
    const row = data[i];
    const item = {};
    let hasVal = false;
    for (let j = 0; j < headers.length; j++) {
      const key = String(headers[j]).trim();
      if (key) {
        let val = row[j];
        if (val instanceof Date) {
          val = Utilities.formatDate(val, Session.getScriptTimeZone(), 'yyyy-MM-dd');
        }
        item[key] = val;
        if (val !== '' && val !== null) hasVal = true;
      }
    }
    if (hasVal) {
      results.push(item);
    }
  }

  return results;
}

/**
 * Helper membaca tabel KPI (matrix row x month)
 */
function parseKpiSheet(sheet) {
  const data = sheet.getDataRange().getValues();
  return {
    rawGrid: data
  };
}

function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
