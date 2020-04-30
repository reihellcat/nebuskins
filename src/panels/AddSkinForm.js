import React, {useCallback} from 'react';
import firebase from 'firebase';
import {storage} from '../firebase';
import { Button, Div, Input, Select, File, Checkbox, Link, FormLayout } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Icon24Camera from '@vkontakte/icons/dist/24/camera';


function AddSkinForm() {
    const [skins, setSkins] = React.useState([])
    const [newSkinNickname, setNewSkinNickname] = React.useState()
    const [newPlayerID, setNewPlayerID] = React.useState()
    const [newCategory, setNewCategory] = React.useState()
    

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("skins").get()
            setSkins(data.docs.map(doc => doc.data()))

        }
        fetchData()
    }, [])

    const onCreate = (event) => {
        event.preventDefault();

        const db = firebase.firestore()
        db.collection('skins').add({nickname: newSkinNickname, player_id: newPlayerID, category: newCategory})
    }
    const onSubmitFile = useCallback(async (event) => {
        event.preventDefault();
    
        const file = event.currentTarget.file.files[0];
    
        await storage.ref().child("some").child("path").put(file);
    
        console.log('yay!')
    });

    
   
    return (
        <Div>
        <FormLayout>
            <Input maxLength="16" top="Введите ваш никнейм" placeholder="Введите никнейм" value={newSkinNickname} onChange={(e) => setNewSkinNickname(e.target.value)}/>
            <Input maxLength="8" top="Введите ваш игровой ID" type="tel" placeholder="Введите ID" value={newPlayerID} onChange={(e) => setNewPlayerID(e.target.value)}/>
            <Select top="Категория" placeholder="Выберите категорию скина" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} >
              <option value="Обычные скины">Обычные скины</option>
              <option value="Питомцы">Питомцы</option>
              <option value="Частицы">Частицы</option>
            </Select>
            <File type='image' top="Загрузите фото скина" before={<Icon24Camera />} size="l">Открыть галерею</File>
            <Checkbox>Я согласен со всем, что вы <Link>там</Link> понаписали</Checkbox>
            <Button size="xl" onSubmit={onSubmitFile} onClick={onCreate}  >Отправить</Button>
            </FormLayout>
</Div>
    );
}

export default AddSkinForm;