import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
     IonItem, IonIcon,IonCol, IonLabel,IonText
    , IonButton,IonRow, IonGrid} from '@ionic/react';
import React, { useState, useEffect , useRef} from 'react';
import { wifi, wine, warning, walk, pin } from 'ionicons/icons';
import Chart from "react-google-charts";


const Statistics: React.FC = () => {
    return (
        <IonPage>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Blank</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle class="ion-text-center" color="danger" style={{ fontWeight: 'bold'}}>Registered Vaccine</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonText class="ion-text-center" color="danger" style={{ fontWeight: 'bold'}}>
                                    <h1 >500</h1>
                                </IonText>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle class="ion-text-center" color="success" style={{ fontWeight: 'bold'}}>Administered Vaccine</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonText class="ion-text-center" color="success" style={{ fontWeight: 'bold'}}>
                                    <h1 >500</h1>
                                </IonText>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
                    <IonCard>
                            <IonCardHeader>
                                <IonCardTitle class="ion-text-center" color="secondary" style={{ fontWeight: 'bold'}}>Vaccination Rate</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <Chart
                                    width={"100vw"}
                                    height={"40vh"}
                                    chartType="ColumnChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                    ['Date', 'Vaccines Administered in India'],
                                    ['19-12-2020', 1000],
                                    ['20-12-2020', 1400],
                                    ['21-12-2020', 2000],
                                    ['22-12-2020', 3000],
                                    ['23-12-2020', 4000]
                                
                                    ]}
                                    options={{
                                    
                                    chartArea: { width: '70%' },
                                    hAxis: {
                                        title: 'Date',
                                        
                                    },
                                    vAxis: {
                                        title: 'Total vaccines Administered',
                                    },
                                    colors: ['#3880ff'],
                                
                                    }}
                                    legendToggle
                                />
                            </IonCardContent>
                    </IonCard>
                <IonRow>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle class="ion-text-center" color="tertiary" style={{ fontWeight: 'bold'}}>Administered Demographic</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                        <Chart
                            width={"100vw"}
                            height={"40"}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Demogrpahic', 'Vaccines Administered'],
                                ['Healthcare Professionals', 2500],
                                ['Above 60', 2000],
                                ['Pre-existing diseases', 500],
                                ['General Population', 100]
                                
                            ]}
                            options={{
                                // Just add this option
                                chartArea: { width: '70%' },
                                is3D: true
                            }}
                            rootProps={{ 'data-testid': '2' }}
                            />
                        </IonCardContent>
                    </IonCard>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle class="ion-text-center" color="danger" style={{ fontWeight: 'bold'}}>Today's Demand</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonText class="ion-text-center" color="danger" style={{ fontWeight: 'bold'}}>
                                    <h1 >489</h1>
                                </IonText>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle class="ion-text-center" color="success" style={{ fontWeight: 'bold'}}>Today's Supply</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonText class="ion-text-center" color="success" style={{ fontWeight: 'bold'}}>
                                    <h1 >470</h1>
                                </IonText>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle class="ion-text-center" color="tertiary" style={{ fontWeight: 'bold'}}>Immunization Statistics</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                        <Chart
                            width={"100vw"}
                            height={"40"}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Cases', 'Vaccines Administered'],
                                ['Registered', 2500],
                                ['1 Vaccine', 500],
                                ['2 Vaccines', 40],
                                ['Unregistered', 10000]
                                
                            ]}
                            options={{
                                // Just add this option
                                chartArea: { width: '70%' },
                                is3D: false
                            }}
                            rootProps={{ 'data-testid': '3' }}
                            />
                        </IonCardContent>
                    </IonCard>
                </IonRow>
            </IonGrid>
            
            
        

        
          </IonContent>
        </IonPage>
      );
    };
    
export default Statistics;