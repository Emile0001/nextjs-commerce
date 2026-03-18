import { cn } from "@/lib/utils";

const ProductPrice = ({
    value,
    className,
}: {
    value: number;
    className?: string;
}) => {
    //Ensures two decimal places
    const stringValue = value.toFixed(2);
    //Split into integer(part1: R26) and decimal(part2: .99) of the price
    const [intValue, floatValue] = stringValue.split(".");

    return (
        <p className={cn("text-2xl", className)}>
            <span className="text-xs align-super">$</span>
            {intValue}
            <span className="text-xs align-super">.{floatValue}</span>
        </p>
    );
};

export default ProductPrice;
