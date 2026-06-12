import { ScrollToOnLoad, Home, Work, Experience, Education, Tools, Contact } from "@/components/sections";

const Page = () => (
    <ScrollToOnLoad>
        <Home />
        <Work />
        <Experience />
        <Education />
        <Tools />
        <Contact />
    </ScrollToOnLoad>
)

export default Page;