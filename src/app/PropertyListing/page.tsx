import HomeLayout from "../components/HOC/HomeLayout/HomeLayout"
import PropertyCard from "../components/Utils/PropertyCard/PropertyCard"

const PropertyListing = () => {
  return (
    <HomeLayout>
        <h1>Property Listing</h1>
        <p>This Page comes after successfull Login</p>
        <PropertyCard label="Card Title" image="https://sample" description="This is Sample Description" />
        <PropertyCard label="Card Title" image="https://sample" description="This is Sample Description" />
        <PropertyCard label="Card Title" image="https://sample" description="This is Sample Description" />
        <PropertyCard label="Card Title" image="https://sample" description="This is Sample Description" />
        <PropertyCard label="Card Title" image="https://sample" description="This is Sample Description" />
    </HomeLayout>
  )
}

export default PropertyListing