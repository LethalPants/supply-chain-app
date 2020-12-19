import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bulbOutline, barChartOutline } from 'ionicons/icons';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Statistics from '../../pages/Statistics'


const Layout: React.FC = () => (
  
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home/live" component={Home} exact={true} />
          <Route path="/home/statistics" component={Statistics} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home/live">
            <IonIcon icon={bulbOutline} />
            <IonLabel>Live Tracking</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/home/statistics">
            <IonIcon icon={barChartOutline} />
            <IonLabel>Statistics</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
   </IonReactRouter>
  
);

export default Layout;