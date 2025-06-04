<script>
  document.querySelector('.nfc-button').addEventListener('click', async () => {
    if ('NDEFWriter' in window) {
      try {
        const writer = new NDEFWriter();
        await writer.write("https://yourwebsite.com/card");
        alert("NFC tag written successfully!");
      } catch (error) {
        alert("Error writing NFC: " + error);
      }
    } else {
      alert("NFC not supported on this device.");
    }
  });
</script>
