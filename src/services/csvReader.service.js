export const fetchCsv = fileName =>
    fetch(fileName)
        .then(response =>
            response.body.getReader().read()
                .then(result =>
                    new TextDecoder('utf-8').decode(result.value)
                )    
        );