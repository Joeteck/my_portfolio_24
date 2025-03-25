import { Check } from "lucide-react";
import Card from "@/components/globals/ui/Card";
import Button from "@/components/globals/ui/Button";
import { Grid } from "@/components/globals/layout/GridSystem";
import { Container } from "@/components/globals/layout/Container";

type PricingPlan = {
    title: string;
    description: string;
    price: string;
    features: string[];
    premium?: boolean;
};

export default function PricingTable() {
    const plans: PricingPlan[] = [
        {
            title: "Free",
            description: "For freelancers",
            price: "$0",
            features: ["1 user", "10 downloads per month", "Raster files"]
        },
        {
            title: "Pro",
            description: "For agencies",
            price: "$40",
            features: ["3 users", "Unlimited downloads", "Fully-editable files", "Custom packs", "200+ custom icons"],
            premium: true
        }
    ];

    return (
        <Container>
            <Grid gap={6}>
                {plans.map((plan, index) => (
                    <Card
                        key={index}
                        variant="pricing"
                        description={plan.description}
                        title={plan.title}
                        price={plan.price}
                        className={``}
                    >
                        <ul className="pricing-features">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="pricing-feature">
                                    <Check size={16} /> {feature}
                                </li>
                            ))}
                        </ul>
                        <Button
                            variant={plan.premium ? "primary" : "outline"}
                            className="mt-6"
                        >
                            Subscribe
                        </Button>
                    </Card>
                ))}
            </Grid>
        </Container>
    );
}
