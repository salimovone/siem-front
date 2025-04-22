import React from 'react'
import { devicesList } from '../../service/devicesListService'
import { useState } from 'react'

const Devices = () => {
    const [data, setData] = useState([])
    const fetchData = () => {
        devicesList().then((res) => {
            console.log(res)
            setData(res)
        }
        ).catch((err) => {
            console.log(err)
        })
    }
  return (
    <div>
        <ul>
            {
                data.map((item, index) => {
                    return (
                        <li key={index}>
                            <p>{item.name}</p>
                            <p>{item.ip}</p>
                            <p>{item.status}</p>
                        </li>
                    )
                })
            }
        </ul>
        <button onClick={fetchData}>fetch</button>
    </div>
  )
}

export default Devices