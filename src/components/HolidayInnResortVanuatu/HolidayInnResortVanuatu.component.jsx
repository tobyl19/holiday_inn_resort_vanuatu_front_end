import React,  { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';


/** component */
import PageLayout from './../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../Sidebar/Sidebar.component';
import { SiteAPI } from './../../utils/siteInit';

/** style */
import './HolidayInnResortVanuatu.styles.scss';


const HolidayInnResortVanuatu =  ({  location }) => { 

    /** Init Data */
    const [holidayInnResortVanuatus, setHolidayInnResortVanuatus] = useState([{
        slug: '',
        title: '',
        image:''

    }]);

    const [sideBarLabel, setSidebarLabel] = useState('');


    useEffect(() => { 
        if (location.pathname === "/holiday_inn_resort_vanuatu") {
            //TEMP PUT HARCODE NEED TO GET DATA FROM API
            axios.get(`${SiteAPI.rootURI}api/navs`).then(res => {
                setSidebarLabel(res.data[0].title);
            })
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {

        if (location.pathname === "/holiday_inn_resort_vanuatu" ) {
            axios.get(`${SiteAPI.rootURI}api/holidayinnresortvanauatucate`)
                 .then(res => { 
                    setHolidayInnResortVanuatus(res.data);
                 })
        }

        // eslint-disable-next-line
    });


    return (
        <PageLayout>
            <div className="page_layout_sidebar">
                <Sidebar sideBarLabel={sideBarLabel} style={HolidayInnResortVanuatu_Style} />
            </div>
            <div>            
               {/* {location.pathname} */}

               { holidayInnResortVanuatus.map((res) => {
                    return (
                        <div className="main_card_list">
                            <div className="main_card_image">
                                <img src={`${SiteAPI.imgStroge}${res.image}`} alt="restaurants bars images" />
                            </div>
                           
                                <div className="main_card_title">
                                    {res.title} 
            
                                </div>
                        </div>
                    )
                 })

               }
           </div>

            
        </PageLayout>
    )
};


/** export to sider bar nav */
const HolidayInnResortVanuatu_Style = {
    position: 'absolute',
    right: '300px',
    top:'-30px',
    width: '1000px',
  
    
}

export default  withRouter(HolidayInnResortVanuatu);