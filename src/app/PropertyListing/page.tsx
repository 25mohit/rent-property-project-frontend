import BottomBar from "../components/BottomBar/BottomBar"
import HomeLayout from "../components/HOC/HomeLayout/HomeLayout"

const PropertyListing = () => {
  return (
    <HomeLayout>
        <h1>Property Listing</h1>
        <p>This Page comes after successfull Login</p>
        <BottomBar />
    </HomeLayout>
  )
}

export default PropertyListing