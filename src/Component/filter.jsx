import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { filteredItemList, filteredItemListByLaunch, filteredListByLaing } from '../Redux/Actions/index';


function Filter(props) {
    const yearArray = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    const clickYear = years => {
        console.log(years);
    }
    useEffect(() => {
        // console.log('props.state', props.state)
    }, [props])
    
    return (
        <div className="mx-5 textCenter">

            <p> {'Launch Year'}</p>
            <div className="borderline"></div>
            <div className="row">
                {yearArray.map((years, index) => (
                        <div className="col-6 mb-4 mt-2" key={index}>
                            <button className="button buttonYeaars" onClick={()=>{props.filteredItemList(years);clickYear(years)}}>{years}</button>
                        </div>
                ))}
            </div>

            <p> {'Successful Launch'}</p>
            <div className="borderline"></div>
            <div className="row">
                        <div className="col-6 mb-4 mt-2">
                            <button className="button buttonYeaars" onClick={()=>{props.filteredItemListByLaunch('true')}}>{'True'}</button>
                        </div>
                        <div className="col-6 mb-4 mt-2">
                            <button className="button buttonYeaars" onClick={()=>{props.filteredItemListByLaunch('false')}}>{'False'}</button>
                        </div>
            </div>

            <p> {'Successful Laing'}</p>
            <div className="borderline"></div>
            <div className="row">
                        <div className="col-6 mb-4 mt-2">
                            <button className="button buttonYeaars" onClick={()=>{props.filteredListByLaing('true')}}>{'True'}</button>
                        </div>
                        <div className="col-6 mb-4 mt-2">
                            <button className="button buttonYeaars" onClick={()=>{props.filteredListByLaing('true')}}>{'False'}</button>
                        </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    filteredItemList,
    filteredItemListByLaunch,
    filteredListByLaing

}
// const mapDispatchToProps = dispatch => {
//     return {
//         filteredItemList : year => dispatchEvent(filteredItemList(year))
//     }
// }
const mapStateToProps = state => {
    return {
        state
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
