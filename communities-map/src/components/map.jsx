import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';
import iconAirport from '../assets/Airport.png';
import iconFire from '../assets/Fire.png';
import iconGrocery from '../assets/Grocery.png';
import iconHospital from '../assets/Hospital.png';
import iconHotel from '../assets/Hotel.png';
import iconLibrary from '../assets/Library.png';
import iconPlayground from '../assets/Playground.png';
import iconPolice from '../assets/Police.png';
import iconRestaurant from '../assets/Restaurant.png';
import iconSchool from '../assets/School.png';
import iconVeterinary from '../assets/Veterinary.png';
import iconCorbett from '../assets/Corbett Prep.png';


// Grabs every image inside all subdirectories of the assets folder
const allAssetsImages = import.meta.glob('../assets/**/**/*.{png,jpg,jpeg,webp,avif,ini}', { 
  eager: true, 
  import: 'default' 
});

const getImages = (cityName, locationFolder) => {
  return Object.keys(allAssetsImages)
    .filter(filePath => filePath.includes(`/${cityName}/${locationFolder}/`))
    .map(filePath => allAssetsImages[filePath]);
};


// Define your 6 countries, their target zoom/center, and markers
const COUNTRIES = [
  {
    id: 'cp',
    name: '',
    city: 'Corbett Prep',
    flag: 'https://media.licdn.com/dms/image/v2/C4E0BAQFtV1Aa9krJ-g/company-logo_200_200/company-logo_200_200/0/1631041681563/corbettprep_logo?e=2147483647&v=beta&t=4OtGggUjJWSAfl3P3NHXd8YXJxSlGYndff10Sb7NBmg',
    center: [-82.50026334798702, 28.05691306397115],
    zoom: 9,
    markers: [
      { lng: -82.50026334798702,  
        lat: 28.05691306397115, 
        title: 'Corbett Preparatory School of IDS',
        icon: iconCorbett,
        iconSize: [50, 50],
        images: getImages('Corbett Prep', 'School')
      }
    ]
  },
  {
    id: 'us',
    name: 'United States',
    city: 'Juneau, Alaska',
    flag: 'https://flagcdn.com/w160/us.png',
    center: [-134.56280738772622, 58.35009324485277],
    zoom: 11.2,
    markers: [
      { lng: -134.42566974970657, 
        lat: 58.30303539346669, 
        title: 'Harborview Elementary School',
        icon: iconSchool,
        iconSize: [50, 50],
        images: getImages('Juneau', 'School')
      },
      { lng: -134.57741584546935, 
        lat: 58.356876050261235,
        title: 'Juneau International Airport ',
        icon: iconAirport,
        iconSize: [50, 50],
        images: getImages('Juneau', 'Airport')
      },
      { lng: -134.4651708496435, 
        lat: 58.328801838147626,
        title: 'Bartlett Regional Hospital',
        icon: iconHospital,
        iconSize: [50, 50],
        images: getImages('Juneau', 'Hospital') 
      },
      { lng: -134.61606073827966, 
        lat: 58.37207030180668,
        title: 'Togass Veterinary Clinic',
        icon: iconVeterinary,
        iconSize: [50, 50],
        images:  getImages('Juneau', 'Veterinary')
      },
      { lng: -134.42170930978878, 
        lat: 58.3010240855579,
        title: 'Juneau Fire Station',
        icon: iconFire,
        iconSize: [50, 50],
        images: getImages('Juneau', 'Fire Station') 
      },
      { lng: -134.40987350831782, 
        lat: 58.29983302856109, 
        title: 'Four Points by Sheraton Juneau',
        icon: iconHotel,
        iconSize: [50, 50],
        images: getImages('Juneau', 'Hotel') 
      },
      { lng: -134.40535255011469, 
        lat: 58.300906062654256, 
        title: 'Deckhand Daves Wild Alaskan Fish Tacos',
        icon: iconRestaurant,
        iconSize: [50, 50],
        images: getImages('Juneau', 'Restaurant')
      },
      { lng: -134.40398257792162, 
        lat: 58.298433798628544, 
        title: 'Juneau Public Library',
        icon: iconLibrary,
        iconSize: [50, 50],
        images: getImages('Juneau', 'Library')
      },
      { lng: -134.5080277617657, 
        lat: 58.35597001061887,
        title: 'Juneau Police Department',
        icon: iconPolice,
        iconSize: [50, 50],
        images: getImages('Juneau', 'Police Station')
      },
      { lng: -134.58768938984676,
        lat: 58.371709505773026, 
        title: 'Bear Supermarket',
        icon: iconGrocery,
        iconSize: [50, 50],
        images: getImages('Juneau', 'Grocery Store')
      },
      { lng: -134.47382933328205,
        lat: 58.33332856095204, 
        title: 'Twin Lakes Playground',
        icon: iconPlayground,
        iconSize: [50, 50],
        images: getImages('Juneau', 'Playground')
      },
    ]
  },
  {
    id: 'jp',
    name: 'Japan',
    city: 'Tokyo',
    flag: 'https://flagcdn.com/w160/jp.png',
    center: [139.68971912881838, 35.6867268441367],
    zoom: 10.5,
    markers: [
      { lng: 139.74968096064828, 
        lat: 35.66157366812839, 
        title: 'Onarimon Elementary School',
        icon: iconSchool,
        iconSize: [50, 50],
        images: getImages('Tokyo', 'School')
      },
      { lng: 139.77790940928995,
        lat: 35.54895939648519, 
        title: 'Haneda Airport',
        icon: iconAirport,
        iconSize: [50, 50],
        images: getImages('Tokyo', 'Airport')
      },
      { lng: 139.50642944737262, 
        lat: 35.76811384612822, 
        title: 'Tokyo National Hospital',
        icon: iconHospital,
        iconSize: [50, 50],
        images: getImages('Tokyo', 'Hospital') 
      },
      { lng: 139.7228202493822, 
        lat: 35.63871319383131, 
        title: 'Daktari Animal Hospital',
        icon: iconVeterinary,
        iconSize: [50, 50],
        images:  getImages('Tokyo', 'Veterinary')
      },
      { lng: 139.76159307325466, 
        lat: 35.68890582495003,
        title: 'Tokyo Fire Department',
        icon: iconFire,
        iconSize: [50, 50],
        images: getImages('Tokyo', 'Fire Station') 
      },
      { lng: 139.7071000047829, 
        lat: 35.728746996450205, 
        title: 'Ikebukuro Police Station',
        icon: iconPolice,
        iconSize: [50, 50],
        images: getImages('Tokyo', 'Police Station')
      },
      { lng: 139.79432724707152, 
        lat: 35.69758287969278,  
        title: 'APA Hotel & Resort Ryogoku Ekimae Tower',
        icon: iconHotel,
        iconSize: [50, 50],
        images: getImages('Tokyo', 'Hotel') 
      },
      { lng: 139.7010400688645, 
        lat: 35.66127860573011,  
        title: 'Ichiran Shibuya',
        icon: iconRestaurant,
        iconSize: [50, 50],
        images: getImages('Tokyo', 'Restaurant')
      },
      { lng: 139.7263989022982, 
        lat: 35.65227715192099,  
        title: 'Tokyo Metropolitan Central Library',
        icon: iconLibrary,
        iconSize: [50, 50],
        images: getImages('Tokyo', 'Library')
      },
      { lng: 139.72107457877058,
        lat: 35.65965931086902,  
        title: 'Seijo Ishii',
        icon: iconGrocery,
        iconSize: [50, 50],
        images: getImages('Tokyo', 'Grocery Store')
      },
      { lng: 139.6895903892851,
        lat: 35.68694470106185,  
        title: 'Shinjuku Central Park Playground',
        icon: iconPlayground,
        iconSize: [50, 50],
        images: getImages('Tokyo', 'Playground')
      },
    ]
  },
  {
    id: 'do',
    name: 'Dominican Republic',
    city: 'Santo Domingo',
    flag: 'https://flagcdn.com/w160/do.png',
    center: [-69.94447639100584, 18.48033130485736],
    zoom: 11,
    markers: [
      { lng: -69.96670125587515, 
        lat: 18.47484672848598,
        title: 'Colegio Jaime Molina Mota',
        icon: iconSchool,
        iconSize: [50, 50],
        images: getImages('Santo Domingo', 'School')
      },
      { lng: -69.67106875557613,
        lat: 18.42932202360991, 
        title: 'Las Américas International Airport',
        icon: iconAirport,
        iconSize: [50, 50],
        images: getImages('Santo Domingo', 'Airport')
      },
      { lng: -69.92193655572149, 
        lat: 18.48894299185046,
        title: 'General Health Plaza Hospital',
        icon: iconHospital,
        iconSize: [50, 50],
        images: getImages('Santo Domingo', 'Hospital') 
      },
      { lng: -69.93532934059158, 
        lat: 18.487195098330037,
        title: 'Veterinaria Arroyo Hondo',
        icon: iconVeterinary,
        iconSize: [50, 50],
        images:  getImages('Santo Domingo', 'Veterinary')
      },
      { lng: -69.89185701589942, 
        lat: 18.473362141014217, 
        title: 'Cuartel General de Bomberos del D.N.',
        icon: iconFire,
        iconSize: [50, 50],
        images: getImages('Santo Domingo', 'Fire Station') 
      },
      { lng: -69.89492400014616, 
        lat: 18.477509490400884,  
        title: 'Destacamento de la Policia Nacional San Carlos',
        icon: iconPolice,
        iconSize: [50, 50],
        images: getImages('Santo Domingo', 'Police Station')
      },
      { lng: -69.93342013920265, 
        lat: 18.455051484186548,   
        title: 'El Embajador, a Royal Hideaway Hotel',
        icon: iconHotel,
        iconSize: [50, 50],
        images: getImages('Santo Domingo', 'Hotel') 
      },
      { lng: -69.90339875382863, 
        lat: 18.460508917775392,   
        title: 'Adrian Tropical',
        icon: iconRestaurant,
        iconSize: [50, 50],
        images: getImages('Santo Domingo', 'Restaurant')
      },
      { lng: -69.89966434048853, 
        lat: 18.477429325902936,   
        title: 'Childrens Library of the Dominican Republic',
        icon: iconLibrary,
        iconSize: [50, 50],
        images: getImages('Santo Domingo', 'Library')
      },
      { lng: -69.92916305855061,
        lat: 18.465695481106,  
        title: 'Supermercados Nacional',
        icon: iconGrocery,
        iconSize: [50, 50],
        images: getImages('Santo Domingo', 'Grocery Store')
      },
      { lng: -69.91900884028928,
        lat: 18.46732023418202,   
        title: 'Parque Iberoamérica Playground',
        icon: iconPlayground,
        iconSize: [50, 50],
        images: getImages('Santo Domingo', 'Playground')
      },
    ]
  },
  {
    id: 'eg',
    name: 'Egypt',
    city: 'Cairo',
    flag: 'https://flagcdn.com/w160/eg.png',
    center: [31.251632565384387, 30.06824439988652],
    zoom: 12,
    markers: [
      { lng: 31.24893396037522, 
        lat: 30.061082451647394, 
        title: 'Sahara International School',
        icon: iconSchool,
        iconSize: [50, 50],
        images: getImages('Cairo', 'School')
      },
      { lng: 31.416577460325335,
        lat: 30.11755703306764,  
        title: 'Cairo International Airport',
        icon: iconAirport,
        iconSize: [50, 50],
        images: getImages('Cairo', 'Airport')
      },
      { lng: 31.223462633285287, 
        lat: 30.013714963287065, 
        title: 'Zohairy General Hospital',
        icon: iconHospital,
        iconSize: [50, 50],
        images: getImages('Cairo', 'Hospital') 
      },
      { lng: 31.277548076867756, 
        lat: 30.0708616786776, 
        title: 'Vet Me Clinic',
        icon: iconVeterinary,
        iconSize: [50, 50],
        images:  getImages('Cairo', 'Veterinary')
      },
      { lng: 31.255925270568255, 
        lat: 30.07894010311657,  
        title: 'EGYPT FIRE ASSOCIATION - STATION #1',
        icon: iconFire,
        iconSize: [50, 50],
        images: getImages('Cairo', 'Fire Station') 
      },
      { lng: 31.23137726931147, 
        lat: 30.0351919749585,  
        title: 'Qasr El Nil Police Station',
        icon: iconPolice,
        iconSize: [50, 50],
        images: getImages('Cairo', 'Police Station')
      },
      { lng: 31.235291190114154, 
        lat: 30.04686775542643,    
        title: 'Steigenberger Hotel El Tahrir Cairo',
        icon: iconHotel,
        iconSize: [50, 50],
        images: getImages('Cairo', 'Hotel') 
      },
      { lng: 31.223597549966914, 
        lat: 30.064812882057875,   
        title: 'Abou El Sid',
        icon: iconRestaurant,
        iconSize: [50, 50],
        images: getImages('Cairo', 'Restaurant')
      },
      { lng: 31.22268655965187, 
        lat: 30.066551885119157,    
        title: 'Greater Cairo Public Library',
        icon: iconLibrary,
        iconSize: [50, 50],
        images: getImages('Cairo', 'Library')
      },
      { lng: 31.216434190785478,
        lat: 30.066515999010406,  
        title: 'Metro Markets',
        icon: iconGrocery,
        iconSize: [50, 50],
        images: getImages('Cairo', 'Grocery Store')
      },
      { lng: 31.26553818806617,
        lat: 30.04157435189667,   
        title: 'Al Azhar Park Playground',
        icon: iconPlayground,
        iconSize: [50, 50],
        images: getImages('Cairo', 'Playground')
      },
    ]
  },
  {
    id: 'ch',
    name: 'Switzerland',
    city: 'Lausanne',
    flag: 'https://flagcdn.com/w160/ch.png',
    center: [6.629693383826794, 46.527978688781914],
    zoom: 12,
    markers: [
      { lng: 6.637463618777237, 
        lat: 46.543942511839305,
        title: 'International School of Lausanne',
        icon: iconSchool,
        iconSize: [50, 50],
        images: getImages('Lausanne', 'School')
      },
      { lng: 6.617619164807884,
        lat: 46.54161714665241, 
        title: 'Lausanne Airport (La Blécherette)',
        icon: iconAirport,
        iconSize: [50, 50],
        images: getImages('Lausanne', 'Airport')
      },
      { lng: 6.642429295493819, 
        lat:  46.52507238991536,
        title: 'Centre Hospitalier Universitaire Vaudois (CHUV)',
        icon: iconHospital,
        iconSize: [50, 50],
        images: getImages('Lausanne', 'Hospital') 
      },
      { lng: 6.620560375657258, 
        lat: 46.527033125612114,
        title: 'CityVet Cabinet Vétérinaire',
        icon: iconVeterinary,
        iconSize: [50, 50],
        images:  getImages('Lausanne', 'Veterinary')
      },
      { lng: 6.624651656225429, 
        lat: 46.52241355474197, 
        title: 'Caserne des sapeurs-pompiers professionnels de Lausanne',
        icon: iconFire,
        iconSize: [50, 50],
        images: getImages('Lausanne', 'Fire Station') 
      },
      { lng: 6.636911937822025, 
        lat: 46.525328043720464,  
        title: 'Hôtel de Police de Lausanne',
        icon: iconPolice,
        iconSize: [50, 50],
        images: getImages('Lausanne', 'Police Station')
      },
      { lng: 6.630141766656636, 
        lat: 46.50819376977185,  
        title: 'Beau-Rivage Palace',
        icon: iconHotel,
        iconSize: [50, 50],
        images: getImages('Lausanne', 'Hotel') 
      },
      { lng: 6.628664739672609,
        lat: 46.51541066797523,  
        title: 'Café de Grancy',
        icon: iconRestaurant,
        iconSize: [50, 50],
        images: getImages('Lausanne', 'Restaurant')
      },
      { lng: 6.621763999467335, 
        lat: 46.525809452986586,   
        title: 'Bibliothèque Jeunesse',
        icon: iconLibrary,
        iconSize: [50, 50],
        images: getImages('Lausanne', 'Library')
      },
      { lng: 6.627500099512993,
        lat: 46.523523596472344,  
        title: 'Migros Supermarché (Métropole)',
        icon: iconGrocery,
        iconSize: [50, 50],
        images: getImages('Lausanne', 'Grocery Store')
      },
      { lng: 6.621669408985366,
        lat: 46.51487878603644,   
        title: 'Parc de Milan Playground',
        icon: iconPlayground,
        iconSize: [50, 50],
        images: getImages('Lausanne', 'Playground')
      },
    ]
  },
  {
    id: 'pg',
    name: 'Papua New Guinea',
    city: 'Port Moresby',
    flag: 'https://flagcdn.com/w160/pg.png',
    center: [147.18435670000883, -9.44405088764587],
    zoom: 11,
    markers: [
      { lng: 147.16473333987454, 
        lat: -9.392558585904126,
        title: 'Kopkop College',
        icon: iconSchool,
        iconSize: [50, 50],
        images: getImages('Port Moresby', 'School')
      },
      { lng: 147.2113937803524,
        lat: -9.438816454831098, 
        title: 'Jacksons International Airport',
        icon: iconAirport,
        iconSize: [50, 50],
        images: getImages('Port Moresby', 'Airport')
      },
      { lng: 147.19519304966596, 
        lat: -9.476040124368224,
        title: 'Port Moresby General Hospital',
        icon: iconHospital,
        iconSize: [50, 50],
        images: getImages('Port Moresby', 'Hospital') 
      },
      { lng: 147.1864108361732, 
        lat: -9.451433809997168,
        title: 'RSPCA Papua New Guinea',
        icon: iconVeterinary,
        iconSize: [50, 50],
        images:  getImages('Port Moresby', 'Veterinary')
      },
      { lng: 147.1513563391951, 
        lat: -9.476104493144073, 
        title: 'Port Moresby Fire and Rescue',
        icon: iconFire,
        iconSize: [50, 50],
        images: getImages('Port Moresby', 'Fire Station') 
      },
      { lng: 147.17943774966486, 
        lat: -9.424308301962139,  
        title: 'Waigani Police Station',
        icon: iconPolice,
        iconSize: [50, 50],
        images: getImages('Port Moresby', 'Police Station')
      },
      { lng: 147.18319756686014, 
        lat: -9.437592034704693,   
        title: 'Sheraton Port Moresby Stanley Hotel & Suites',
        icon: iconHotel,
        iconSize: [50, 50],
        images: getImages('Port Moresby', 'Hotel') 
      },
      { lng: 147.1520798515174, 
        lat: -9.476489665314745,   
        title: 'Port Terrace Restaurant & Bar',
        icon: iconRestaurant,
        iconSize: [50, 50],
        images: getImages('Port Moresby', 'Restaurant')
      },
      { lng: 147.17042037241345, 
        lat: -9.408288346846547,   
        title: 'Michael Somare Library',
        icon: iconLibrary,
        iconSize: [50, 50],
        images: getImages('Port Moresby', 'Library')
      },
      { lng: 147.1529195361736,
        lat: -9.467659219469292,  
        title: 'Waterfront Foodworld',
        icon: iconGrocery,
        iconSize: [50, 50],
        images: getImages('Port Moresby', 'Grocery Store')
      },
      { lng: 147.27588846500785,
        lat: -9.39403221640759,   
        title: 'Adventure Park PNG',
        icon: iconPlayground,
        iconSize: [50, 50],
        images: getImages('Port Moresby', 'Playground')
      },
    ]
  }
];

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  // Only track the selected marker, remove currentImageIndex
  const [selectedMarker, setSelectedMarker] = useState(null);

  maptilersdk.config.apiKey = 'BDqrexTcpJ2ujjv2cPYF'; 

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.SATELLITE_V4,
      center: [0, 20],
      projection: "globe",
      zoom: 2.1
    });

    const markersToUpdate = [];

    COUNTRIES.forEach(country => {
      country.markers.forEach(markerLoc => {
        const el = document.createElement('div');
        el.className = 'custom-marker';
        
        el.style.backgroundImage = `url(${markerLoc.icon})`;
        el.style.backgroundSize = '100%';

        el.addEventListener('click', () => {
          setSelectedMarker(markerLoc);
          
          if (map.current) {
            map.current.flyTo({
              center: country.center,
              zoom: country.zoom,
              essential: true,
              speed: 1.2,
              curve: 1.42
            });
          }
        });

        // MapTiler natively handles hiding the marker behind the globe here
        new maptilersdk.Marker({ 
          element: el, 
          anchor: 'bottom',
          opacityWhenCovered: 0 
        })
          .setLngLat([markerLoc.lng, markerLoc.lat])
          .addTo(map.current);

        // Save the element to animate its size during zoom
        markersToUpdate.push({
          el: el,
          maxWidth: markerLoc.iconSize[0],
          maxHeight: markerLoc.iconSize[1]
        });
      });
    });

    // Handle scaling animation when zooming
    const updateMarkerSizes = () => {
      if (!map.current) return;
      
      const currentZoom = map.current.getZoom();
      const startZoom = -2; 
      const endZoom = 9.0;   

      let scale = (currentZoom - startZoom) / (endZoom - startZoom);
      scale = Math.max(0, Math.min(1, scale)); 

      markersToUpdate.forEach(marker => {
        marker.el.style.width = `${marker.maxWidth * scale}px`;
        marker.el.style.height = `${marker.maxHeight * scale}px`;
      });
    };

    map.current.on('zoom', updateMarkerSizes);
    updateMarkerSizes();

  }, []);

  const handleCountryClick = (country) => {
    if (!map.current) return;
    map.current.flyTo({
      center: country.center,
      zoom: country.zoom,
      essential: true,
      speed: 1.2,
      curve: 1.42
    });
  };

  return (
    <div className="app-container">
      {/* LEFT: Flag Sidebar */}
      <aside className="country-grid">
        {COUNTRIES.map((country) => (
          <div key={country.id} className="country-group">
            {/* Text Container aligned to the left */}
            <div className="text-container">
              <span className="city-label">{country.city}</span>
              <span className="country-label">{country.name}</span>
            </div>
            
            {/* Flag Button on the right */}
            <button
              className="flag-circle"
              onClick={() => handleCountryClick(country)}
              title={`Zoom to ${country.name}`}
            >
              <img 
                src={country.flag} 
                alt={`${country.name} flag`} 
                className="flag-image" 
              />
            </button>
          </div>
        ))}
      </aside>

      {/* MIDDLE: Map Area */}
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>

      {/* RIGHT: Scrollable Image Sidebar */}
      {selectedMarker && (
        <aside className="details-sidebar">
          <div className="sidebar-header">
            <h2>{selectedMarker.title}</h2>
            <button className="close-btn" onClick={() => setSelectedMarker(null)}>✖</button>
          </div>
          
          {selectedMarker.images && selectedMarker.images.length > 0 ? (
            <div className="sidebar-image-list">
              {/* Map through all images and render them stacked */}
              {selectedMarker.images.map((imgUrl, index) => (
                <img 
                  key={index}
                  src={imgUrl} 
                  alt={`${selectedMarker.title} view ${index + 1}`} 
                  className="sidebar-image" 
                />
              ))}
            </div>
          ) : (
            <p className="no-images-text">No images available for this location.</p>
          )}
        </aside>
      )}
    </div>
  );
}
