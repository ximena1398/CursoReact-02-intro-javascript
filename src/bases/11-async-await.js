const getImagen = async () => {

    try {
        const apiKey = 'gejbnDAMk6Fw2l79AghX5TyOSrqRUK6m';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); //(await: esperar que la promesa se cumpla y después si ejecitar lo demàs)
        const { data } = await resp.json(); //(json: regresa una promesa)
        console.log(data);

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error);
    }


}

getImagen();