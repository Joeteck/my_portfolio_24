import { Check } from "lucide-react";
import Card from "@/components/globals/ui/Cards";
import Button from "@/components/globals/ui/Button";
import { Grid } from "@/components/globals/layout/Grid System";

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
        <Grid gap={6}>
            {plans.map((plan, index) => (
                <Card
                    key={index}
                    variant="pricing"
                    className={`w-full max-w-sm p-8 rounded-xl shadow-lg text-center transition-transform 
                                duration-300 hover:scale-[1.03] hover:shadow-2xl 
                                ${plan.premium ? "bg-gray-900 text-white" : "bg-white dark:bg-gray-900"}`}
                >
                    <h3 className="pricing-title text-lg font-semibold">{plan.title}</h3>
                    <p className="pricing-subtitle text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
                    <p className="pricing-price text-4xl font-bold my-4">{plan.price}</p>
                    <ul className="pricing-features space-y-3 mt-6">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                                <Check size={16} /> {feature}
                            </li>
                        ))}
                    </ul>
                    <Button
                        variant={plan.premium ? "primary" : "secondary"}
                        className="mt-6 py-3 px-6 rounded-lg font-medium text-white bg-gray-900 dark:bg-white
                                dark:text-gray-900 hover:bg-opacity-80 transition-all duration-300"
                    >
                        Subscribe
                    </Button>
                </Card>
            ))}
        </Grid>
    );
}
