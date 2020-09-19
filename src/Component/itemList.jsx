// import { addItemList } from '../Redux/Actions/index';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './itemList.css';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

function ItemList(props) {
    const [list, setlist] = useState([])
    const [loading, setloader] = useState(false)
    const [dataNotFound, setdataNotFound] = useState(false)
    useEffect(() => {
        setloader(true)
        axios.get('https://api.spacexdata.com/v3/launches?limit=100')
            .then(res => {
                setloader(false);
                setlist(res.data);
            })
            console.log('props in item list', props.state, props.state.length);
    }, [])
    useEffect(() => {
        setlist(props.state);
            if(props.state.length === 0){
                setdataNotFound(true);
            } else {
                setdataNotFound(false);
            }
            console.log('dataNotFound', dataNotFound);
    }, [props])
    return (
        <div className='itemlist'>
            {loading ? <LoadingSpinner /> : 
            <div className="row">
                {list && list.map(listItem => (                   
                         <div className="col-lg-3 mb-3 col-12 white-bg p-3" key={listItem.flight_number}>
                            <img className="bg-light" src={listItem?.links?.mission_patch} alt="icons" style={{ width: "100%" }}></img>
                            <div className = "mission_name_heading" >{listItem?.mission_name}</div>
                            <div className = "mission_name_heading">{listItem?.flight_number}</div>
                            <div ><span className = "mission_id">{'Mission Ids:'}</span> {listItem?.mission_id.map((mission_id, index) => (
                                    <ul key={index}>
                                        <li className = "mission_id_list" >{mission_id}</li>
                                    </ul>
                            ))}</div>                            
                            <div><span className = "mission_id">{'Launch Year:'}</span> <span className = "mission_id_list">{listItem?.launch_year}</span></div>
                            <div><span className = "mission_id">{'Successful Launch:'}</span> <span className = "mission_id_list">{listItem?.launch_success}</span></div>
                            <div><span className = "mission_id">{'Successful Landing:'}</span> <span className = "mission_id_list">{listItem?.launch_landing}</span></div>
                        </div>                 
                ))}
            </div>}
            {dataNotFound && <div className="dataNotFound">{'Data Not Found'}</div>}
            <div className="textCenter developerName"><span className="mission_id">{'Developed By:'}</span><span>{'Nikita Singh'}</span></div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state
    };
}

export default connect(mapStateToProps, null)(ItemList);
