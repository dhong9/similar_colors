export const fetchCsv = (fileName, success) =>
    fetch(fileName)
        .then(response => response.text())
        .then(success);