// app/page.tsx (this is now your Playground page)
import { Container } from "@/components/globals/layout/Container";
import { Heading } from "@/components/globals/typography/Heading";
import { Paragraph } from "@/components/globals/typography/Paragraph";
import Button from "@/components/globals/ui/Button";
import ThemeSwitch from "@/components/globals/ui/ThemeSwitch";
import { ThemeProvider } from "@/context/ThemeContext"; // Wrap it in ThemeProvider if not already done

const Playground = () => {
    return (
        <ThemeProvider>
            <Container className="playground-container">
                <Heading>Welcome to the Playground</Heading>
                <Paragraph>Play around with components here!</Paragraph>
                <ThemeSwitch /> {/* Include the full ThemeSwitch here */}

                <Button className="mt-3">
                  Click
                </Button>
            </Container>
        </ThemeProvider>
    );
};

export default Playground;
