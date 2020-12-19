import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import React, { useState, useEffect , useRef} from 'react';
import './Home.css';
import { Loader } from "@googlemaps/js-api-loader"
import { ellipse } from 'ionicons/icons';



declare var google :any;


const Home: React.FC = () => {
  
  const loader = new Loader({
    apiKey: "AIzaSyBJHD1uZL-OTzOSsWpWv0crd6wOthT0m8E",
    version: "weekly",
  });

  
  const [map2, setState] = useState<any>();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: {lat: 18.967501304211517, lng: 72.82285520799007 },
        zoom: 8,
      })
      
      const red_marker = 'https://storage.googleapis.com/support-kms-prod/SNP_2752125_en_v0';
      const yellow_marker = 'https://storage.googleapis.com/support-kms-prod/SNP_2752063_en_v0';
      const green_marker = 'https://storage.googleapis.com/support-kms-prod/SNP_2752129_en_v0';
      

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

      
      
      const marker1 = new google.maps.Marker({
        position: Coordinates[0],
        icon: yellow_marker,
        map: map
      });
      const marker2 = new google.maps.Marker({
        position: Coordinates[1],
        icon: red_marker,
        map: map
      });
      const marker3 = new google.maps.Marker({
        position: Coordinates[2],
        icon: green_marker,
        map: map
      });
      const marker4 = new google.maps.Marker({
        position: Coordinates[3],
        icon: green_marker,
        map: map
      });
      const marker5 = new google.maps.Marker({
        position: Coordinates[4],
        icon: green_marker,
        map: map
      });
      const marker6 = new google.maps.Marker({
        position: Coordinates[5],
        icon: green_marker,
        map: map
      });
      const marker7 = new google.maps.Marker({
        position: Coordinates[6],
        icon: green_marker,
        map: map
      });
      const marker8 = new google.maps.Marker({
        position: Coordinates[7],
        icon: green_marker,
        map: map
      });
      const marker9 = new google.maps.Marker({
        position: Coordinates[8],
        icon: green_marker,
        map: map
      });
      const marker10 = new google.maps.Marker({
        position: Coordinates[9],
        icon: green_marker,
        map: map
      });
      const marker11 = new google.maps.Marker({
        position: Coordinates[10],
        icon: green_marker,
        map: map
      });
      const marker12 = new google.maps.Marker({
        position: Coordinates[11],
        icon: green_marker,
        map: map
      });
      const marker13 = new google.maps.Marker({
        position: Coordinates[12],
        icon: green_marker,
        map: map
      });
      const marker14 = new google.maps.Marker({
        position: Coordinates[13],
        icon: green_marker,
        map: map
      });
      const marker15 = new google.maps.Marker({
        position: Coordinates[14],
        icon: green_marker,
        map: map
      });
      const marker16 = new google.maps.Marker({
        position: Coordinates[15],
        icon: green_marker,
        map: map
      });
      const marker17 = new google.maps.Marker({
        position: Coordinates[16],
        icon: green_marker,
        map: map
      });
      const marker18 = new google.maps.Marker({
        position: Coordinates[17],
        icon: green_marker,
        map: map
      });
      const marker19 = new google.maps.Marker({
        position: Coordinates[18],
        icon: green_marker,
        map: map
      });
      const marker20 = new google.maps.Marker({
        position: Coordinates[19],
        icon: green_marker,
        map: map
      });
      const marker21 = new google.maps.Marker({
        position: Coordinates[20],
        icon: green_marker,
        map: map
      });
      const marker22 = new google.maps.Marker({
        position: Coordinates[21],
        icon: green_marker,
        map: map
      });
      const marker23 = new google.maps.Marker({
        position: Coordinates[22],
        icon: green_marker,
        map: map
      });
      const marker24 = new google.maps.Marker({
        position: Coordinates[23],
        icon: green_marker,
        map: map
      });
      const marker25 = new google.maps.Marker({
        position: Coordinates[24],
        icon: green_marker,
        map: map
      });

      const marker26 = new google.maps.Marker({
        position: Coordinates[25],
        icon: green_marker,
        map: map
      });
      const marker27 = new google.maps.Marker({
        position: Coordinates[26],
        icon: green_marker,
        map: map
      });
      const marker28 = new google.maps.Marker({
        position: Coordinates[27],
        icon: green_marker,
        map: map
      });
      const marker29 = new google.maps.Marker({
        position: Coordinates[28],
        icon: green_marker,
        map: map
      });
      const marker30 = new google.maps.Marker({
        position: Coordinates[29],
        icon: green_marker,
        map: map
      });
      const marker31 = new google.maps.Marker({
        position: Coordinates[30],
        icon: green_marker,
        map: map
      });
      const marker32 = new google.maps.Marker({
        position: Coordinates[31],
        icon: green_marker,
        map: map
      });
      const marker33 = new google.maps.Marker({
        position: Coordinates[32],
        icon: green_marker,
        map: map
      });
      const marker34 = new google.maps.Marker({
        position: Coordinates[33],
        icon: green_marker,
        map: map
      });
      const marker35 = new google.maps.Marker({
        position: Coordinates[34],
        icon: green_marker,
        map: map
      });
      const marker36 = new google.maps.Marker({
        position: Coordinates[35],
        icon: green_marker,
        map: map
      });
      const marker37 = new google.maps.Marker({
        position: Coordinates[36],
        icon: green_marker,
        map: map
      });
      const marker38 = new google.maps.Marker({
        position: Coordinates[37],
        icon: green_marker,
        map: map
      });
      const marker39 = new google.maps.Marker({
        position: Coordinates[38],
        icon: green_marker,
        map: map
      });
      const marker40 = new google.maps.Marker({
        position: Coordinates[39],
        icon: green_marker,
        map: map
      });
      //extra gmsds
      const marker41 = new google.maps.Marker({
        position: Coordinates[40],
        icon: green_marker,
        map: map
      });
      const marker42 = new google.maps.Marker({
        position: Coordinates[41],
        icon: green_marker,
        map: map
      });
      const marker43 = new google.maps.Marker({
        position: Coordinates[42],
        icon: green_marker,
        map: map
      });
      const marker44 = new google.maps.Marker({
        position: Coordinates[43],
        icon: green_marker,
        map: map
      });
      const marker45 = new google.maps.Marker({
        position: Coordinates[44],
        icon: green_marker,
        map: map
      });


      //Paths to join vertexes

      const path1 = new google.maps.Polyline({
        path: [Coordinates[0], Coordinates[1]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path2 = new google.maps.Polyline({
        path: [Coordinates[0], Coordinates[2]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path3 = new google.maps.Polyline({
        path: [Coordinates[2], Coordinates[3]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path4 = new google.maps.Polyline({
        path: [Coordinates[1], Coordinates[4]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path5 = new google.maps.Polyline({
        path: [Coordinates[2], Coordinates[5]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path6 = new google.maps.Polyline({
        path: [Coordinates[7], Coordinates[6]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path7 = new google.maps.Polyline({
        path: [Coordinates[1], Coordinates[7]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path8 = new google.maps.Polyline({
        path: [Coordinates[1], Coordinates[8]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path9 = new google.maps.Polyline({
        path: [Coordinates[0], Coordinates[9]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path10 = new google.maps.Polyline({
        path: [Coordinates[9], Coordinates[10]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path11 = new google.maps.Polyline({
        path: [Coordinates[0], Coordinates[11]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path12 = new google.maps.Polyline({
        path: [Coordinates[0], Coordinates[12]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path13 = new google.maps.Polyline({
        path: [Coordinates[0], Coordinates[13]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path14 = new google.maps.Polyline({
        path: [Coordinates[0], Coordinates[14]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path15 = new google.maps.Polyline({
        path: [Coordinates[0], Coordinates[15]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path16 = new google.maps.Polyline({
        path: [Coordinates[14], Coordinates[16]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Aurangabad

      const path17 = new google.maps.Polyline({
        path: [Coordinates[0], Coordinates[17]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path18 = new google.maps.Polyline({
        path: [Coordinates[17], Coordinates[18]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path19 = new google.maps.Polyline({
        path: [Coordinates[17], Coordinates[19]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path20 = new google.maps.Polyline({
        path: [Coordinates[17], Coordinates[20]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path21 = new google.maps.Polyline({
        path: [Coordinates[19], Coordinates[21]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Nagpur

      const path22 = new google.maps.Polyline({
        path: [Coordinates[17], Coordinates[22]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path23 = new google.maps.Polyline({
        path: [Coordinates[22], Coordinates[23]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Nanded
      const path24 = new google.maps.Polyline({
        path: [Coordinates[36], Coordinates[24]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Amravati
      const path25 = new google.maps.Polyline({
        path: [Coordinates[22], Coordinates[25]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Yavatmal
      const path26 = new google.maps.Polyline({
        path: [Coordinates[22], Coordinates[26]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Solapur

      const path27 = new google.maps.Polyline({
        path: [Coordinates[36], Coordinates[27]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Dhule
      const path28 = new google.maps.Polyline({
        path: [Coordinates[29], Coordinates[28]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //NAshik

      const path29 = new google.maps.Polyline({
        path: [Coordinates[0], Coordinates[29]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Ratnagiri

      const path30 = new google.maps.Polyline({
        path: [Coordinates[32], Coordinates[30]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Sindhudurg
      const path31 = new google.maps.Polyline({
        path: [Coordinates[35], Coordinates[31]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Satara

      const path32 = new google.maps.Polyline({
        path: [Coordinates[1], Coordinates[32]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Jalgoan
      const path33 = new google.maps.Polyline({
        path: [Coordinates[28], Coordinates[33]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Latur
      const path34 = new google.maps.Polyline({
        path: [Coordinates[36], Coordinates[34]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Kolhapur
      const path35 = new google.maps.Polyline({
        path: [Coordinates[32], Coordinates[35]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      // Beed
      const path36 = new google.maps.Polyline({
        path: [Coordinates[18], Coordinates[36]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Akola
      const path37 = new google.maps.Polyline({
        path: [Coordinates[25], Coordinates[37]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Chandrapur
      const path38 = new google.maps.Polyline({
        path: [Coordinates[22], Coordinates[38]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //Gadchiroli
      const path39 = new google.maps.Polyline({
        path: [Coordinates[22], Coordinates[39]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      const path40 = new google.maps.Polyline({
        path: [Coordinates[0], Coordinates[1]],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });


    
      path1.setMap(map);
      path2.setMap(map);
      path3.setMap(map);
      path4.setMap(map);
      path5.setMap(map);
      path6.setMap(map);
      path7.setMap(map);
      path8.setMap(map);
      path9.setMap(map);
      path10.setMap(map);
      path11.setMap(map);
      path12.setMap(map);
      path13.setMap(map);
      path14.setMap(map);
      path15.setMap(map);
      path16.setMap(map);
      path17.setMap(map);
      path18.setMap(map);
      path19.setMap(map);
      path20.setMap(map);
      path21.setMap(map);
      path22.setMap(map);
      path23.setMap(map);
      path24.setMap(map);
      path25.setMap(map);
      path26.setMap(map);
      path27.setMap(map);
      path28.setMap(map);
      path29.setMap(map);
      path30.setMap(map);
      path31.setMap(map);
      path32.setMap(map);
      path33.setMap(map);
      path34.setMap(map);
      path35.setMap(map);
      path36.setMap(map);
      path37.setMap(map);
      path38.setMap(map);
      path39.setMap(map);
      path40.setMap(map);
      setState(map);
      

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
