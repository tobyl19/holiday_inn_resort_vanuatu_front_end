import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

/**component */
import PageLayout from './../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../Sidebar/Sidebar.component';
import {SiteAPI} from './../../utils/siteInit';

/** styles */
import './AroundVanuatu.styles.scss';



 const AroundVanuatu = ({location}) => {
    
    const [aroundVanuatu,setAroundVanuatu] = useState([{
        id: null,
        slug: '',
        title: '',
        image: '',
    }]);

    const [sideBarLabel, setSidebarLabel] = useState('');


    /**HTTP */

    useEffect(() => { 
        if(location.pathname === '/around_vanuatu') {
            //temp put harcore here 
            axios.get(`${SiteAPI.rootURI}api/navs`).then(res => {
                setSidebarLabel(res.data[1].title);
            })
          
        }
       // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if(location.pathname === '/around_vanuatu') {
            axios.get(`${SiteAPI.rootURI}api/around_vanuatu`).then(res => { 
                setAroundVanuatu(res.data);
            })
        }
     // eslint-disable-next-line
    }, []); 

    return (
        <PageLayout>
            <div className="page_layout_sidebar">
                <Sidebar sideBarLabel={sideBarLabel} style={AroundVanuatu_Sidebar_Style} />
            </div>
            <div className="scroll_view_wraper">
                { aroundVanuatu.map((res, index) => {
                    return (
                        index < 4 && 
                        <div className="main_card_list" key={res.id}>
                            <div className="main_card_image">
                            <img src={`${SiteAPI.imgStroge}${res.image}`} alt="around vanuatu images" />
                            </div>
                            <Link to={`/around_vanuatu/${res.id}`} >
                                <div className="main_card_title">
                                        {res.title} 
                                </div>
                            </Link>

                        </div>
                    )
                  })

                }
                
            </div>
            

        </PageLayout>
    )
};

/** export to sider bar nav */
const AroundVanuatu_Sidebar_Style = {
    position: 'absolute',
    right: '70px',
    top:'-40px',
    width: '1000px',
    
}

export default  withRouter(AroundVanuatu);