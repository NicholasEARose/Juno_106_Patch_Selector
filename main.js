function sortPatches() {
  let input = document.getElementById("search_input");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("patchTable");
  let row = table.getElementsByTagName("tr");

  for (i = 0; i < row.length; i++) {
    dataName = row[i].getElementsByTagName("td")[1];
    dataDescription = row[i].getElementsByTagName("td")[2];
    if (dataName) {
      txtValueName = dataName.textContent || dataName.innerText;
      if (txtValueName.toUpperCase().indexOf(filter) > -1) {
        row[i].style.display = "";
      } else if (dataDescription) {
        txtValueDescription = dataDescription.textContent || dataDescription.innerText;
        if (txtValueDescription.toUpperCase().indexOf(filter) > -1) {
          row[i].style.display = "";
        } else {
          row[i].style.display = "none";
        }
      }
    }
  }
}
