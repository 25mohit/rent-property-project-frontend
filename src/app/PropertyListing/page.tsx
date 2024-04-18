import MultiContentLayout from "../components/HOC/Layout/MultiContentLayout"
import CalculateFontSize from "../components/HOC/Layout/CalculateFontSize"

const PropertyListing = () => {
  return (
    <MultiContentLayout>
    {/* <CalculateFontSize> */}
      <h1 style={{fontSize: 'var(--fontSize33)'}}>Hello</h1>
    {/* </CalculateFontSize> */}
    </MultiContentLayout>
  )
}

export default PropertyListing