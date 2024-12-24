import Text from '@/app/about/Text';
import ServiceBannerSection from '@/app/components/ServiceBanner';
import React from 'react'
import ServicesFeatures from '../ServicesFeatures';
import BlogList from '@/app/components/blogs/Blogs';
import ProductsCarouselServicePage from '@/app/components/sliders/service-page-slider/Carousel';
import Container from '@/app/components/Container';
function Cleanroom() {

    const features = [
        { description: "CLEAN ROOM DESIGN (PHARMACEUTICALS, HOSPITAL, FOOD INDUSTRY, AND SEMI CONDUCOTOR INDUSTRY)" },
        { description: "CLEANROOM EQUIPMENT SUPPLY AND INSTALLATION" },
        { description: "CLEANROOM SANDWICH PANEL" },
        { description: "CLEANROOM DOOR & WINDOW" },
        { description: "CLEANROOM VALIDATION" },
        { description: "ALL KINDS OF CLEANROOM EQUIMPENTS" },
        { description: "VALIDATION OF CLEANROOM SYSTEM" },
    ];
    return (
        <div className='flex flex-col container items-center'>
            <Container><ServiceBannerSection heading="CLEANROOM" /></Container>

            <Container>
                <Text
                    text="You count on your HVAC system to always keep your home comfortable, so you want to ensure it continues to work at its best. With heating, ventilation and air conditioning (HVAC) service, you can keep everything running smoothly and efficiently. If you're wondering what HVAC service includes, our guide will help you understand the care your system gets and when you need it."
                />
                <Text
                    header="WHAT IS HVAC SERVICE?"
                    text="HVAC service involves installing, maintaining or repairing an HVAC system. Getting an HVAC service is like having a checkup-a professional looks at your system to see if there are any issues. They'll perform a thorough inspection, and if they find anything wrong, they'll repair it or schedule a follow-up appointment to address the issue. Different companies have different service offerings, so talk to your HVAC company to find out precisely what their HVAC service includes."
                />
                <Text
                    header="WHAT HAPPENS DURING AN HVAC SERVICE VISIT?"
                    text="HVAC service includes a range of inspections. Your HVAC professional will take time to ensure your whole system works effectively, as one part being broken or worn reduces the entire system's efficiency. Investing in regular HVAC service will help you spot and correct weak points, saving you money in the long term and boosting your HVAC efficiency. An HVAC service will typically involve the technician checking your air conditioner, heating equipment and ductwork."
                />
                <ServicesFeatures title="OUR CLEANROOM SERVICES" features={features} />
            </Container>

            <Container><ProductsCarouselServicePage name="cleanroom"  /></Container>
            <Container><BlogList /></Container>
        </div>
    )
}

export default Cleanroom;