import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function App() 
{
  const [friends, setFriends] = useState([])
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')

  useEffect(() => 
  {
    axios.get(`/api/friends`)
    .then(res => 
    {
      setFriends(res.data)
    })
  }, [])
  

  const addFriend = () =>
  {
    const newFriends = [...friends]
    newFriends.push({ picture: picture, name: name })
    setFriends(newFriends);

    setPicture('')
    setName('')
  }

  const friendInfo = friends.map((friend) => 
  {
    return (
      <div key={`${friend.name}`}>
        <img width="200px" src={friend.picture} alt={friend.name}/>
        <span>{friend.name}</span>
      </div>
    )
  })

  return (
    <div>
      <label htmlFor="picture">Picture:</label>
      <input onChange={(e) => setPicture(e.target.value)} value={picture} id="picture"/>

      <label htmlFor="name">Name:</label>
      <input onChange={(e) => setName(e.target.value)} value={name} id="name"/>

      <button type="button" onClick={addFriend}>
        Add Friend
      </button>

      {friendInfo}
    </div>
  );



}

