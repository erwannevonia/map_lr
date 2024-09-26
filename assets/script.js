var map = L.map('map').setView([46.166043, -1.149854], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker(
    [
        46.166043, // latitude
        -1.149854 // longitude
    ]
).addTo(map);

dataparking.forEach(
    elementEnCours => {
        // console.log("Lieu");
        // console.info(elementEnCours.fields.adresse, "  " + elementEnCours.fields.obs);
        // console.log("Coordonnées :");
        // console.log("Latitude: " + elementEnCours.geometry.coordinates[0]);
        // console.log("Longitude: " + elementEnCours.geometry.coordinates[1]);
        // console.log("");


        // Ajout du marker sur la carte
        // doc: https://leafletjs.com/examples/custom-icons/

        // let info = "rien";

        // if (elementEnCours.fields.obs = "") {
        //     info = elementEnCours.fields.adresse;
        // } else {
        //     info = elementEnCours.fields.obs;
        // };

        L.marker(
                [
                    elementEnCours.fields.ylat, // latitude
                    elementEnCours.fields.xlong // longitude
                ]
            ).addTo(map)
            .bindPopup(elementEnCours.fields.nom);

    }
);

let test = 0;

databanc.forEach(
    elementEnCours => {
        L.marker(
                [
                    elementEnCours.geometry.coordinates[1], // latitude
                    elementEnCours.geometry.coordinates[0] // longitude
                ]
            ).addTo(map)
            .bindPopup("banc n°" + test);
        test = test + 1;
    }
);