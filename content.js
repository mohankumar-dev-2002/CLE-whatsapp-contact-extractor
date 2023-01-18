(function () {
    var arr;
    //download function
    function downloadCSV(csv, fileName) {
        // Create a CSV file
        let csvFile = new Blob([csv], {
            type: 'text/csv'
        });

        // Use the download attribute to set the file name
        let downloadLink = document.createElement('a');
        downloadLink.download = fileName;

        // Set the href to the URL of the CSV file
        downloadLink.href = URL.createObjectURL(csvFile);

        // Trigger the download
        var a = downloadLink.click();
        if (a) {
            document.removeChild('folder');
        }
    }
    //interval fuction to wait and download
    let myInterval = setInterval(waitToDownload, 3000)

    function waitToDownload() {
        var a = document.getElementsByClassName('_2YPr_ i0jNr')[0];
        // console.log(a.innerHTML);
        let csv = a.innerText;
        arr = csv.split(',');

        function limitCsvValues(csv, limit) {
            // Split the CSV string into an array of lines
            let lines = csv.split("\n");

            // Loop through the lines and add a newline after the specified number of values
            for (let i = 0; i < lines.length; i++) {
                let line = lines[i];
                let values = line.split(",");
                for (let j = 0; j < values.length; j++) {
                    if (j > 0 && j % limit == 0) {
                        values[j] = "\n" + values[j];
                    }
                }
                lines[i] = values.join(",");
            }

            // Join the lines back into a single CSV string
            let result = lines.join("\n");
            return result;
        }
        var rowCsv = limitCsvValues(csv, 4)

        downloadCSV(rowCsv, "Contact.csv");
        clearInterval(myInterval);
        // let phoneNumber = 9524159977;
        // let message = "hi";
        let msgInterval = setInterval(sendMsg,15000)

        function sendMsg() {
            arr.forEach(element => {
                    console.log(element);
                    let message = 'Hello, how are you?';

                    var url = 'https://api.whatsapp.com/send?phone=' + element + '&text=' + message;

                    // Create an a element
                    let a = document.createElement('a');

                    // Set the target to _blank
                    window.open(url, '_blank');
                });
            };
    }
``````````````````````````````````````````````````````````````````````````````````````````````````````})();