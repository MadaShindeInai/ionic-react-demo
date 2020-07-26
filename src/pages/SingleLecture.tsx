import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonIcon,
  IonLabel,
  IonItemDivider,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { observer } from "mobx-react-lite";
import { store } from "../store/store";
import {
  compassOutline,
  calendarOutline,
  arrowBackCircle,
  business,
  home,
  informationCircleOutline,
  share,
  camera,
} from "ionicons/icons";
import { RouteComponentProps } from "react-router-dom";
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera, Share } = Plugins;

interface SingleLecture
  extends RouteComponentProps<{
    id: string;
  }> {}

const SingleLecture: React.FC<SingleLecture> = observer(({ match }) => {
  const lecture = store.lectures.find(
    (lecture) => lecture.id === parseInt(match.params.id)
  );
  if (!lecture) return <IonLabel>הרצאה לא נמצאה</IonLabel>;

  const handleSelectExpert = ({ detail: { value } }: CustomEvent) => {
    console.log(value);
    lecture.expert = value;
  };

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    lecture.imageUrl = image.webPath || "";
  };

  const sharePage = async () => {
    await Share.share({
      text: "מקום מגניב, כדאי לך להרצות כאן!",
      url: window.location.href,
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="single-lecture-title">
            <span>הרצאה ב-{lecture?.company}</span>
            <IonButton fill="clear" routerLink="/lectures">
              <IonIcon
                slot="icon-only"
                size="large"
                icon={arrowBackCircle}
                style={{ alignSelf: "left" }}
              />
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonImg className="single-lecture-image" src={lecture.cover} />
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
          <IonCardContent>
            <IonLabel style={{ display: "flex" }}>
              {" "}
              <IonIcon icon={informationCircleOutline} />
              {lecture.overview}
            </IonLabel>{" "}
            <IonItemDivider />
            <IonGrid style={{ padding: 0 }}>
              <IonRow>
                <IonCol className="single-lecture-label" size="3">
                  איש קשר
                </IonCol>
                <IonCol size="4" className="single-lecture-info">
                  {lecture.contactPerson}
                </IonCol>
                <IonCol className="single-lecture-label" size="3">
                  משתתפים
                </IonCol>
                <IonCol className="single-lecture-info">
                  {lecture.participants}
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol className="single-lecture-label" size="3">
                  טלפון
                </IonCol>
                <IonCol size="4" className="single-lecture-info">
                  <a href={`tel:${lecture.phone}`}>{lecture.phone}</a>
                </IonCol>
                <IonCol className="single-lecture-label" size="3">
                  מיקום
                </IonCol>
                <IonCol className="single-lecture-info">
                  {lecture.onSite ? (
                    <IonIcon icon={business} />
                  ) : (
                    <IonIcon icon={home} />
                  )}
                </IonCol>
              </IonRow>

              <IonRow className="ion-align-items-center">
                <IonItemDivider />
                <IonCol>מומחה</IonCol>
                <IonCol>
                  {" "}
                  <IonSelect
                    interface="action-sheet"
                    okText="אישור"
                    cancelText="ביטול"
                    value={lecture.expert}
                    placeholder="מרצה"
                    onIonChange={handleSelectExpert}>
                    {store.experts.map((expert) => (
                      <IonSelectOption value={expert.id}>
                        {expert.name}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonItemDivider />

              <IonRow>
                {
                  // @ts-ignore
                  lecture?.imageUrl?.length > 0 && (
                    <IonImg src={lecture.imageUrl} />
                  )
                }
                <IonButton onClick={takePicture}>
                  <IonIcon icon={camera} />
                </IonButton>
                <IonButton color="secondary" onClick={sharePage}>
                  <IonIcon icon={share} />
                </IonButton>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
});

export default SingleLecture;
