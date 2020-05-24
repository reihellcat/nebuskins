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
  const [request, setRequest] = React.useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nickname = e.target.value;
    if (!nickname) {
      return;
    }
  };

  const onCreate = async () => {
        const db = firebase.firestore()
        await db.collection('request').doc(playerID).set({nickname: nickname, player_id: playerID,
        category: category, image: fileUrl});
        };
    

  useEffect(() => {
    const fetchRequest = async () => {
      const requestCollection = await db.collection("request").get();
      setRequest(
        requestCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchRequest();
  }, []);

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
              <Button mode="commerce" size="xl" onClick={(e) => {onSubmit(e); onCreate(); onGoHome(e);}} data-to="home" >Отправить</Button>
              </FormLayout>
              <ul>
        {request.map((playerID) => {
          return (
            <li key={playerID.nickname}>
              <img width="100" height="100" src={playerID.image} alt={playerID.nickname} />
              <p>{playerID.nickname}</p>
            </li>
          );
        })}
      </ul>
  </Div>
    </Panel>
  );
}

export default AddSkinForm;