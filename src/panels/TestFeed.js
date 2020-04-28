import React from 'react';
import firebase from 'firebase';
import { Button, Div, Input, Card, CardGrid, Text, Separator } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function TestFeed() {
    const [skins, setSkins] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("skins").get()
            setSkins(data.docs.map(doc => doc.data()))
        }
        fetchData()
    }, [])

    return (
     //   <Div> 
            <Card>     
            {skins.map(skin => (
    <Text style={{ fontSize: 25, textAlign: 'left' }} key={skin.category} key={skin.player_id} key={skin.nickname}>Предложил: {skin.nickname} <br/>
    ID игрока: {skin.player_id} <br/>Категория: {skin.category} </Text>
        ))}
        </Card> 
    );
}

export default TestFeed;