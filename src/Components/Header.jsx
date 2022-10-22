import React, { useState } from 'react';
import Homedisplay from './Homedisplay';
// import RestaurantData from './RestaurantData';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';


function Header() {
  const [home,showBasic] = useState(true);
 
  const [ setdata] = useState(false)
  
  function restaurantDatahandler() {
    // setdata(true)
    showBasic(false)
    
  }        
  function homepagehandler() {
    showBasic(true)
    setdata(false)
  }
  return (
    <>
      
      <header>
        <div className="MDBnnavbar">
      <MDBNavbar expand='lg' light bgColor='black'  fixed>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
              <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                  <MDBNavbarLink onClick={homepagehandler} aria-current='page' href='#'>
                  <div className="navbarButtons">  
                        <span>H</span>ome
                        </div>
                  
                  </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
                  <MDBNavbarLink onClick={restaurantDatahandler} href='#'>
                   <div className="navbarButtons">Restaurants Data</div></MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
                  <MDBNavbarLink  href='#'>
                   <div className="navbarButtons">Contact</div></MDBNavbarLink>
              </MDBNavbarItem>
              
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
          </MDBNavbar>
          </div>
        </header>
        
   
      
      {home && <Homedisplay />}
      </>
  );
}

export default Header;