import React from 'react';
// import LandingPageComponent from "../Components/LandingPage/LandingPage.jsx";
import LandingPageHeader from "../Components/LandingPage/LandingPageHeader/LandingPageHeader.jsx"
import LandingPageSearch from "../Components/LandingPage/LandingPageSearch/LandingPageSearch.jsx"
import LandingPageCard from "../Components/LandingPage/LandingPageCard/LandingPageCard.jsx"
import LandingPageDestination from "../Components/LandingPage/LandingPageDestination/LandingPageDestination.jsx"
import LandingPageSubscribe from "../Components/LandingPage/LandingPageSubscribe/LandingPageSubscribe.jsx"
import LandingPageFooter from "../Components/LandingPage/LandingPageFooter/LandingPageFooter.jsx"
function LandingPage() {
  return (
    
    <div>
      <LandingPageHeader />
      <LandingPageSearch />
      {/* <div className="bodyy">
      <Card icon="fa-search" image="src/Components/LandingPage/images/Featured icon.png" title="Search" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Card icon="fa-check" image="src/Components/LandingPage/images/Featured icon-3.png" title="Select" description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." />
      <Card icon="fa-plane" image="src/Components/LandingPage/images/Featured icon-2.png" title="Book" description="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui." />
    </div> */}
      <LandingPageCard />
      <LandingPageDestination /> 
       <LandingPageSubscribe />
      <LandingPageFooter/>  
    
      
      
      </div>
      
  )
}

export default LandingPage;