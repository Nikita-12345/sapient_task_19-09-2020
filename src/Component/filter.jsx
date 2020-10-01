import React from 'react';
import { connect } from 'react-redux';
import { filteredItemList, filteredItemListByLaunch, filteredListByLaing } from '../Redux/Actions/index';
import { Link } from 'react-router-dom';


function Filter(props) {
    const yearArray = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    return (
        <div className="mx-5 textCenter">
            <p> {'Launch Year'}</p>
            <div className="borderline"></div>
            <div className="row">
                {yearArray.map((years, index) => (
                    <nav className="col-6 mb-4 mt-2" key={index}>
                        <Link to={`/sapient_task_19-09-2020/year=${years}`}>
                            <button className="button buttonYeaars" onClick={() => props.filteredItemList(years)}>{years}</button>
                        </Link>

                    </nav>
                ))}
            </div>

            <p> {'Successful Launch'}</p>
            <div className="borderline"></div>
            <div className="row">
                <div className="col-6 mb-4 mt-2">
                    <Link to={`/sapient_task_19-09-2020/Launch_success=true`}>
                        <button className="button buttonYeaars" onClick={() => props.filteredItemListByLaunch('true')}>{'True'}</button>
                    </Link>
                </div>
                <div className="col-6 mb-4 mt-2">
                    <Link to={`/sapient_task_19-09-2020/Launch_success=false`}>
                        <button className="button buttonYeaars" onClick={() => props.filteredItemListByLaunch('false')}>{'False'}</button>
                    </Link>
                </div>
            </div>

            <p> {'Successful Laing'}</p>
            <div className="borderline"></div>
            <div className="row">
                <div className="col-6 mb-4 mt-2">
                    <Link to={`/sapient_task_19-09-2020/Land_success=true`}>
                        <button className="button buttonYeaars" onClick={() => props.filteredListByLaing('true')}>{'True'}</button>
                    </Link>
                </div>
                <div className="col-6 mb-4 mt-2">
                    <Link to={`/sapient_task_19-09-2020/Land_success=false`}>
                        <button className="button buttonYeaars" onClick={() => props.filteredListByLaing('false')}>{'False'}</button>
                    </Link>
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
const mapStateToProps = state => {
    return {
        state
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
