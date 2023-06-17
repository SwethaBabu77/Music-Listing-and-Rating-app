import React from 'react'
import axios from 'axios';

const AddMusicWithApi = () => {

    const [apiValues, setApiValues] = React.useState()

    const [trigger,setTrigger]=React.useState(false)

    const [options, setOptions] = React.useState({
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: { q: 'tailer Swift' },
        headers: {
            'X-RapidAPI-Key': '01de432035mshf62458e3076317dp1231f7jsn0bec5b4e1401',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    })

    const saveQ = (event) => {
        setOptions((prev=>{
            return{
                ...prev,
                params:{
                    q:event.target.value
                }
            }
        }))
    }

    const serachApi = () => {
        setTrigger(prev=>!prev)
    }


    React.useEffect(() => {
        axios.request(options).then(response => {
            if (response.status===200) {
                setApiValues(response.data.data)
                console.log(response.data)
            }
            else {
                console.log("No record")
            }
        }).catch(error => {
            console.error(error)
        })

    }, [trigger])

    return (
        <div>
            <div>
                <input type="text" onChange={saveQ} />
                <button onClick={serachApi}>Search</button>
            </div>
            {apiValues && <div>
                {apiValues.map(elements=>{
                    return(
                        <div><img src={elements.artist.picture} /></div>
                    )
                })}
            </div>}
        </div>
    )
}

export default AddMusicWithApi