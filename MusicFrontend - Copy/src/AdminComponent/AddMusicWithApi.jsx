import React from 'react'
import axios from 'axios';

const AddMusicWithApi = () => {

    const [apiValues, setApiValues] = React.useState()

    const [trigger,setTrigger]=React.useState(false)

    const [options, setOptions] = React.useState({
        method: 'GET',
        url: 'https://shazam-core.p.rapidapi.com/v1/search/multi',
        params: {
            query: 'metallica',
            search_type: 'SONGS'
          },
          headers: {
            'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
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
                {/* <input type="text" onChange={saveQ} /> */}
                <button onClick={serachApi}>Search</button>
            </div>
            {apiValues && <div>
                {apiValues.map(elements=>{
                    return(
                        <div>{elements.artist.name}</div>
                    )
                })}
            </div>}
        </div>
    )
}

export default AddMusicWithApi