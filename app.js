const loadImage = async () => {
    // GET JSON from REST-API
    const response = await fetch('https://aws.random.cat/meow');
    const myJson = await response.json();
    
    // Extract path of file
    let pathOfCatFile = myJson.file;

    // Create <img> element
    const image = document.createElement('img');
    image.src = pathOfCatFile;

    // Add  <img> to picture-<section>
    const pictureSektion = document.getElementById('picture');    
    pictureSektion.appendChild(image);
  }

  loadImage();
