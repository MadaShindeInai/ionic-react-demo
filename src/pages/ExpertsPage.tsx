import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { store } from "../store/store";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  isPlatform,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToast,
  IonImg,
  IonList,
  IonListHeader,
  IonItemSliding,
  IonItemOptions,
  IonItem,
  IonAvatar,
  IonLabel,
  IonItemOption,
} from "@ionic/react";

import {
  call,
  chatbubbleEllipses,
  starOutline,
  add,
  starSharp,
} from "ionicons/icons";
import AddExpertModal from "../components/AddExpertModal";

const longArray: number[] = [];

for (let index = 0; index < 10; index++) {
  longArray.push(index);
}

const ExpertsPage: React.FC = observer(() => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const openAddExpert = () => {
    setShowModal(true);
  };

  const toggleExpert = (expert: any) => {
    expert.isFavorite = !expert.isFavorite;
  };

  const handleModalClose = (expert: any) => {
    if (expert.name) {
      store.experts.push(expert);
      setShowToast(true);
    }
    setShowModal(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>יועצים</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonListHeader>יועצים זמינים</IonListHeader>

          {store.experts.map((expert) => (
            <IonItemSliding style={{ direction: "ltr" }} key={expert.id}>
              <IonItemOptions side="start">
                <a
                  className="expert-item"
                  href={"tel:${expert.tel}"}
                  target={isPlatform("desktop") ? "_blank" : ""}>
                  <IonIcon size="large" icon={call} />
                </a>

                <a
                  className="expert-item whatsapp-icon"
                  href={`https://api.whatsapp.com/send?phone=${expert.tel}`}>
                  <IonIcon size="large" icon={chatbubbleEllipses} />
                </a>
              </IonItemOptions>

              <IonItem style={{ direction: "rtl" }}>
                <IonAvatar slot="start">
                  <IonImg src={expert.avatar} />
                </IonAvatar>
                <IonLabel color={expert.isFavorite ? "primary" : ""}>
                  <h2>{expert.name}</h2>
                  <h3>{expert.level}</h3>
                  {expert.skills?.map((skill) => (
                    <span>{skill}, </span>
                  ))}
                </IonLabel>
              </IonItem>

              <IonItemOptions side="end">
                <IonItemOption
                  color="light"
                  onClick={() => toggleExpert(expert)}>
                  <IonIcon
                    size="large"
                    icon={expert.isFavorite ? starSharp : starOutline}
                  />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>

        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton onClick={openAddExpert}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <AddExpertModal
          isOpen={showModal}
          onCloseModal={handleModalClose}></AddExpertModal>
      </IonContent>
      <IonToast
        isOpen={showToast}
        message="יועץ התווסף בהצלחה"
        duration={4000}
        onDidDismiss={() => setShowToast(false)}
      />
    </IonPage>
  );
});

export default ExpertsPage;
