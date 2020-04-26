import React from 'react';
import firebase from 'firebase';
import { Button, Div } from '@vkontakte/vkui';

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
        <ul>
        {skins.map(skin => (
            <Button mode="secondary" size="x1" key={skin.nickname} key={skin.player_id}>{skin.nickname} {skin.player_id} </Button>
        ))}

        </ul>
    );
}

export default TestFeed;