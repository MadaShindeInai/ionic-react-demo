import React, { MouseEventHandler, useState, useEffect } from "react";
import {
  IonModal,
  IonInput,
  IonButton,
  IonLabel,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonFooter,
} from "@ionic/react";

interface ModalProps {
  isOpen: boolean;
  onCloseModal: MouseEventHandler;
}

const AddExpertModal: React.FC<ModalProps> = ({ isOpen, onCloseModal }) => {
  const [expert, setExpert] = useState(Object);

  const handleChange = (field: string, e: any) => {
    setExpert({ ...expert, [field]: e.detail.value });
  };

  useEffect(() => {
    if (isOpen) setExpert({});
  }, [isOpen]);

  return (
    <IonModal swipeToClose={true} isOpen={isOpen}>
      <form>
        <IonList>
          <IonItem>
            <IonLabel className="rtl-label" position="stacked">
              שם
            </IonLabel>
            <IonInput
              value={expert.name}
              onIonChange={(e) => handleChange("name", e)}
            />
          </IonItem>

          <IonItem>
            <IonLabel className="rtl-label" position="stacked">
              טלפון
            </IonLabel>
            <IonInput
              value={expert.tel}
              type="tel"
              onIonChange={(e) => handleChange("tel", e)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>רמה</IonLabel>
            <IonSelect
              interface="popover"
              value={expert.level}
              placeholder="רמה מקצועית"
              onIonChange={(e) => handleChange("level", e)}>
              <IonSelectOption value="Junior">Junior</IonSelectOption>
              <IonSelectOption value="Medium">Medium</IonSelectOption>
              <IonSelectOption value="Senior">Senior</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>תחומים</IonLabel>
            <IonSelect
              okText="אישור"
              cancelText="ביטול"
              multiple
              value={expert.skills}
              placeholder="תחומי עיסוק"
              onIonChange={(e) => handleChange("skills", e)}>
              <IonSelectOption value="React">React</IonSelectOption>
              <IonSelectOption value="node.js">node.js</IonSelectOption>
              <IonSelectOption value="Vue">Vue</IonSelectOption>
              <IonSelectOption value="Angular">Angular</IonSelectOption>
              <IonSelectOption value="Java">Java</IonSelectOption>
              <IonSelectOption value="Agile">Agile</IonSelectOption>
              <IonSelectOption value="Cross Platform">
                Cross Platform
              </IonSelectOption>
              <IonSelectOption value="HTML">HTML</IonSelectOption>
              <IonSelectOption value="CSS">CSS</IonSelectOption>
              <IonSelectOption value="Javascript">Javascript</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </form>
      <IonFooter>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row-reverse",
            padding: 10,
          }}>
          <IonButton type="submit" onClick={() => onCloseModal(expert)}>
            הוספה
          </IonButton>
          <IonButton color="light" onClick={onCloseModal}>
            ביטול
          </IonButton>
        </div>
      </IonFooter>
    </IonModal>
  );
};

export default AddExpertModal;
