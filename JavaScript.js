// For Web NFC (Chrome Android only)
async function shareViaNFC() {
  if ('NDEFReader' in window) {
    try {
      const ndef = new NDEFReader();
      await ndef.write({
        records: [{ recordType: "url", data: "https://yourprofile.com" }]
      });
      alert("Tap an NFC tag to write!");
    } catch (error) {
      alert("NFC not supported or error: " + error);
    }
  } else {
    alert("Web NFC only works on Chrome for Android.");
  }
}

// Fallback: Open a share link (for iPhones)
function shareViaLink() {
  window.open("https://yourprofile.com");
}