import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialsData } from "@/data/testimonial";
import { ITestimonial } from "@/types";
import Marquee from "react-fast-marquee";

export default function TestimonialSection() {
    return (
        <div id="testimonials" className="w-full overflow-hidden py-10">
            <div className="px-4 md:px-16 lg:px-24 xl:px-32">
                <SectionTitle text1="Testimonials" text2="Don't just take our words" text3="Hear what our clients say about our e-commerce engineering, headless speed, and custom integrations." />
            </div>

            <Marquee className="w-full mt-12" gradient={true} speed={25} gradientColor="#111827">
                <div className="flex items-center justify-center py-5 overflow-hidden">
                    {[...testimonialsData, ...testimonialsData].map((testimonial: ITestimonial, index: number) => (
                        <TestimonialCard key={index} index={index} testimonial={testimonial} />
                    ))}
                </div>
            </Marquee>
            <Marquee className="w-full mt-4" gradient={true} speed={25} direction="right" gradientColor="#111827">
                <div className="flex items-center justify-center py-5 overflow-hidden">
                    {[...testimonialsData, ...testimonialsData].map((testimonial: ITestimonial, index: number) => (
                        <TestimonialCard key={index} index={index} testimonial={testimonial} />
                    ))}
                </div>
            </Marquee>
        </div>
    );
}