import React from 'react';
import firebase from 'firebase';
import { Button, Div, List, Input } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function TestFeed() {
    const [skins, setSkins] = React.useState([])
    const [newSkinNickname, setNewSkinNickname] = React.useState()

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("skins").get()
            setSkins(data.docs.map(doc => doc.data()))
        }
        fetchData()
    }, [])

    const onCreate = () => {
        const db = firebase.firestore()
        db.collection('skins').add({nickname: newSkinNickname})
    }

    return (
        <Div>
            <Input value={newSkinNickname} disabled onChange={(e) => setNewSkinNickname(e.target.value) }/>
            <Button disabled onClick={onCreate}>Создать</Button>
        {skins.map(skin => (
    <h1 key={skin.nickname}>{skin.nickname}</h1>
        ))}
        {skins.map(skin => (
    <h3 key={skin.player_id}>{skin.player_id}</h3>
        ))}
</Div>
    );
}

export default TestFeed;