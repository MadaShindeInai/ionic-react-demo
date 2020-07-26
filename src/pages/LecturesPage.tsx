import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonIcon,
} from "@ionic/react";
import { observer } from "mobx-react-lite";
import { store } from "../store/store";
import { compassOutline, calendarOutline } from "ionicons/icons";

const LecturesPage: React.FC = observer(() => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>הרצאות</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">הרצאות</IonTitle>
          </IonToolbar>
        </IonHeader>

        {store.lectures.map((lecture) => (
          <IonCard routerLink={`/lectures/${lecture.id}`}>
            <IonImg className="lecture-image" src={lecture.cover} />
            <IonCardHeader>
              <IonCardTitle>{lecture.company}</IonCardTitle>
              <IonCardSubtitle className="lecture-subtitle">
                <span>
                  <IonIcon size="small" icon={compassOutline} />
                  {lecture.area}
                </span>
                <span>
                  <IonIcon size="small" icon={calendarOutline} /> {lecture.date}
                </span>
              </IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>{lecture.overview}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
});

export default LecturesPage;
