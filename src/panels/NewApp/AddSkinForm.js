import React, { useEffect } from "react";
import firebase from 'firebase';
import {app} from 'C:/Users/Павел/Desktop/vkapp/nebuskins/src/firebase.js';
import { Button, Div, Input, Select, File, FormLayout, PanelHeaderBack, PanelHeader, Panel } from '@vkontakte/vkui';

import Icon24Camera from '@vkontakte/icons/dist/24/camera';


const db = app.firestore();

function AddSkinForm({id, go, onGoHome}) {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [nickname, setNickname] = React.useState([])
  const [playerID, setPlayerID] = React.useState()
  const [category, setCategory] = React.useState()
  const [readyToSendFormData, setReadyToSendFormData] = React.useState(false)

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(playerID);
    await fileRef.put(file).then(() => setReadyToSendFormData(true))
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nickname = e.target.value;
    if (!nickname || !fileUrl) {
      return;
    }
  };

  const onCreate = async () => {
        const db = firebase.firestore()
        await db.collection('request').doc(playerID).set({nickname: nickname, player_id: playerID,
        category: category, image: fileUrl});
        };
    
  // const onButtonStatus = () => {
  //   if(fileUrl) {
  //     setButton(button === 'enabled')
  //   }
  // }

  return (
    <Panel id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={go} data-to="add_skin"/>}>Предложить</PanelHeader>
      <Div>
          <FormLayout>
             <Input maxLength="16" top="Введите ваш никнейм" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Dit"/>
             <Input  maxLength="8" top="Введите ваш игровой ID" value={playerID} onChange={(e) => setPlayerID(e.target.value)} type="tel" placeholder="675"/>
             <Select  top="Категория" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Выберите категорию скина">
               <option value="Обычные скины">Обычные скины</option>
               <option value="Питомцы">Питомцы</option>
               <option value="Частицы">Частицы</option>
             </Select>
             <File type='file' top="Загрузите ваше фото" onChange={onFileChange} before={<Icon24Camera />} controlSize="l">
          Открыть галерею
        </File>
              <Button mode="commerce" size="xl" disabled={!readyToSendFormData} onClick={(e) => {onSubmit(e); onCreate(); onGoHome(e);}} data-to="home" >Отправить</Button>
              </FormLayout>
  </Div>
    </Panel>
  );
}

export default AddSkinForm;