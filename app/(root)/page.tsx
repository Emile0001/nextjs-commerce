import { resolve } from "path";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
    await delay(2000);
    return <div>Colourful Nails</div>;
};

export default Homepage;
