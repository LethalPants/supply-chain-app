import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import React, { useState, useEffect , useRef} from 'react';
import './Home.css';
import { Loader } from "@googlemaps/js-api-loader"
import dummyvalues from '../constant/constant'




declare var google :any;


const Home: React.FC = () => {
  
  const loader = new Loader({
    apiKey: "AIzaSyBJHD1uZL-OTzOSsWpWv0crd6wOthT0m8E",
    version: "weekly",
  });

  function createInfoWindow ( supply:any, demand:any ) {
    let contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h3 id="firstHeading" class="firstHeading ion-text-center">Status</h3>' +
    '<div id="bodyContent">' +
    '<p class="ion-text-center"><b>Demand: </b>' + demand +
    "</p>" +
    '<p class="ion-text-center"><b>Supply: </b>' + supply +
    "</p>" +
    "</div>" +
    "</div>"; 

    return contentString;
  };
  const markers:any = [];
  const paths:any = [];
  const infowindows:any = [];
  const red_marker = 'https://storage.googleapis.com/support-kms-prod/SNP_2752125_en_v0';
  const yellow_marker = 'https://storage.googleapis.com/support-kms-prod/SNP_2752063_en_v0';
  const green_marker = 'https://storage.googleapis.com/support-kms-prod/SNP_2752129_en_v0';

  function setAllStates( values:any ){
    var i=0;
    for(var value of values){
      let demand = value.demand;
      let supply = value.supply;
      infowindows[i].setContent(createInfoWindow(supply, demand));
      
      if(Math.abs(demand - supply) > 0.4*demand){
        markers[i].setIcon(red_marker);
        if(i){
          paths[i-1].setOptions({strokeColor: '#c62828'});
          
        }
      }
      else if(Math.abs(demand - supply) > 0.2*demand){
        markers[i].setIcon(yellow_marker);
        if(i){
          paths[i-1].setOptions({strokeColor: '#FDD835'});

        }
      }
      else{
        markers[i].setIcon(green_marker);
        if(i){
          paths[i-1].setOptions({strokeColor: '#4CAF50'});
        }
      }
      i++;
    }


  }

  
  const [map2, setState] = useState<any>();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: {lat: 18.967501304211517, lng: 72.82285520799007 },
        zoom: 8,
      })
      
      // 25 coordinates for demo
      const Coordinates = [
        { lat: 18.967501304211517, lng: 72.82285520799007 },
        { lat: 18.661922200504446, lng: 73.79589621502677 },
        { lat: 18.665669017820665, lng: 73.72263763266517 },
        { lat: 18.73689528712007, lng: 73.76707833881527 },
        { lat:18.584308082112138,lng: 73.77376484555803 },
        { lat: 18.46165310610469,lng: 73.64046858956324 },
        { lat: 18.446339106952053, lng:73.79506410473607 },
        { lat: 18.517489354526173, lng: 73.80317621802917 },
        { lat: 18.59885829922412, lng:73.7374674731191 },
        { lat: 19.025920044497074, lng:73.13715852987966 },
        { lat: 19.047157062060023, lng:73.09172940227994 },
        { lat: 18.940947327350845, lng:72.8323153505519 },
        { lat: 18.958841431573013, lng:72.83737072849938 },
        { lat:18.975498929290623, lng:72.82187624474506 },
        { lat: 19.041645950062673, lng:72.8556331965456 },
        { lat: 19.06353489554429, lng:72.9189145957767},
        { lat: 19.06615523414696, lng:72.85726817529385 },
        { lat: 19.893761905913987, lng:75.3203240689704 },
        { lat: 19.87107008667832, lng:75.40423634287377},
        { lat: 19.860264822661257,lng: 75.30629728592415},
        { lat: 19.892186066881262, lng:75.30367154245222 },
        { lat:19.849316723068732, lng:75.21702086846837 },
        { lat:21.14793564723612, lng:79.05906236602453 },
        { lat: 21.129677592987086,lng: 79.09630963414588},
        { lat: 19.11259986097475, lng:77.29105570018343 },

        { lat: 20.933661810896794, lng:77.76129668239608 },
        { lat: 20.396696642591206,lng: 78.13093064972341 },
        { lat:17.666443256317418,lng: 75.90956997480282 },
        { lat: 20.863985443528637,lng: 74.76232751487042},
        { lat:19.99822632400579,lng: 73.77818652791763 },
        { lat:16.98943706346608, lng:73.29922070347057 },
        { lat: 16.11675982676807,lng: 73.68988395013028 },
        { lat: 17.691707226470072,lng: 74.00963711300155 },
        { lat: 21.0085667165286, lng:75.56821213258478 },

        { lat: 18.396715565512903,lng: 76.57808376650578 },
        { lat: 16.67339479124724, lng:74.23443910691822 },
        { lat:18.98759099554971, lng:75.75322509976733 },
        { lat: 20.703191837204972, lng:77.00049012468943 },
        { lat:19.95712264179092, lng:79.29589698377994 },
        { lat:20.170890699006982, lng:79.98304476205936 },

        //Main GMSDs
        { lat:23.19526048006328,lng: 88.48525829992855 },
        { lat:28.908843710747192,lng: 77.14659849577416 },
        { lat:30.189066261425953, lng:77.03067052647188 },
        { lat:26.513170026323,lng: 91.75874573106402},
        { lat:13.82613349921524,lng: 80.10263979435612}

      ];
      //individual paths for each node
      const PathCoordinates = [
        [Coordinates[0], Coordinates[1]],
        [Coordinates[0], Coordinates[2]],[Coordinates[2], Coordinates[3]],
        [Coordinates[1], Coordinates[4]],[Coordinates[2], Coordinates[5]],
        [Coordinates[7], Coordinates[6]],[Coordinates[1], Coordinates[7]],
        [Coordinates[1], Coordinates[8]],[Coordinates[0], Coordinates[9]],
        [Coordinates[9], Coordinates[10]],[Coordinates[0], Coordinates[11]],
        [Coordinates[0], Coordinates[12]],[Coordinates[0], Coordinates[13]],
        [Coordinates[0], Coordinates[14]],[Coordinates[0], Coordinates[15]],
        [Coordinates[14], Coordinates[16]],[Coordinates[0], Coordinates[17]],
        [Coordinates[17], Coordinates[18]],[Coordinates[17], Coordinates[19]],
        [Coordinates[17], Coordinates[20]],[Coordinates[19], Coordinates[21]],
        [Coordinates[17], Coordinates[22]],[Coordinates[22], Coordinates[23]],
        [Coordinates[36], Coordinates[24]],[Coordinates[22], Coordinates[25]],
        [Coordinates[22], Coordinates[26]],[Coordinates[36], Coordinates[27]],
        [Coordinates[29], Coordinates[28]],[Coordinates[0], Coordinates[29]],
        [Coordinates[32], Coordinates[30]],[Coordinates[35], Coordinates[31]],
        [Coordinates[1], Coordinates[32]],[Coordinates[28], Coordinates[33]],
        [Coordinates[36], Coordinates[34]],[Coordinates[32], Coordinates[35]],
        [Coordinates[18], Coordinates[36]],[Coordinates[25], Coordinates[37]],
        [Coordinates[22], Coordinates[38]],[Coordinates[22], Coordinates[39]]

      ]

      //infowindows
      for(let i=0;i<40;i++){
        infowindows.push(new google.maps.InfoWindow({
          content: createInfoWindow("20", "50")
        }));
      };

      //new markers based on coordinates
      for(let i=0;i<45;i++){
        markers.push(new google.maps.Marker({
          position: Coordinates[i],
          icon: yellow_marker,
          map: map
        }))
      };

      
      //set info windows for each marker
      for(let i=0;i<40;i++){
        markers[i].addListener("click", () => {
          infowindows[i].open(map, markers[i]);
          
        });
      }

      //Paths to join vertexes
      for(let i=0;i<39;i++){
        paths.push(new google.maps.Polyline({
          path: PathCoordinates[i],
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        }));
      }

      //setting paths on map
      for (var path of paths) {
        path.setMap(map);
      }

      setState(map);

      setAllStates(dummyvalues);
      

    });
    

  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id="map" style={{ height:"100%", width:"100%" }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
