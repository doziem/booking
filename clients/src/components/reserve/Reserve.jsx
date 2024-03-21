import React, { useContext, useState } from 'react'
import "./reserve.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRoom, setSelectedRoom] = useState([]);
const navigate = useNavigate()
  const {dates }= useContext(SearchContext)

  const { data } = useFetch("/hotels/rooms/" + hotelId);


  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRoom(
      checked
        ? [...selectedRoom, value]
        : selectedRoom.filter((item) => item !== value)
    );
  };


const getDatesInRange=(startDate,endDate)=>{
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime())

    const dates = [];
 
    while(date <= end){
        dates.push(new Date(date).getTime()) 
        date.setDate(date.getDate()+1)
    }

    return dates
}

const dateRange = getDatesInRange(dates[0].startDate ,dates[0].endDate);

const isAvailable = (roomNumber)=>{
  const isFound = roomNumber.unavailableDates.some(date=>{
    dateRange.includes(new Date(date).getTime())
  })
  return !isFound
}

const handleReserve = async () => {
  try {
    await Promise.all(
      selectedRoom.map((roomId) => {
        const res = axios.put(`/rooms/available/${roomId}`, {
          dates: dateRange,
        });
        setOpen(false)
        navigate("/");
        return res.data;
      })
    );
  } catch (error) {}
};


  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item?.title}</div>
              <div className="rDesc">{item?.desc}</div>
              <div className="rMax">Max people: {item?.maxPeople} </div>
            </div>
            <div className="rPrice">₦{item?.price}</div>
            <div className="rSelectRoom">
            {item.roomNumbers.map((roomNum) => (
              <div className="room" key={roomNum?._id}>
                <label style={{fontWeight:'bolder',fontSize:'15px'}}>{roomNum.number} </label>
                <input
                  type="checkbox"
                  value={roomNum?._id}
                  onChange={handleSelect}
                  disabled={!isAvailable(roomNum)}
                />
              </div>
            ))}
            </div>
          </div>
        ))}
        <button onClick={handleReserve} className="rButton">Reserve Now !</button>
      </div>
    </div>
  );
};

export default Reserve