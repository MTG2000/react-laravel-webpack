import React, { useState, useEffect } from "react";
import "./styles/product.scss";
import Loading from "./Loading";

const tempProduct = {
    id: 4,
    title: "Leather Tanning",
    img: "https://drive.google.com/uc?id=1xma7V3yoEd6g8BU4EwUIsQqwV8ywtyIc",
    text:
        "Our leather and textiles business provides specialty chemicals for beamhouse and tanning, retaining, dyestuffs, textiles and finishing.\n\n We not only supply these specialty chemicals to our customers but also strive, whenever possible, to be the partners who provide the best solutions or processes for their needs.\n\n  We have more than 25 years of experience in the leather chemical business and represent a number of world-class suppliers throughout the region. Our leather technicians develop an economical process in our application laboratory, run trials at the customers’ site and provide a total package to meet their needs.\n\nOur reputable suppliers constantly visit clients to get updates on the latest fashion trends and technical know-how.\n\n This enables close cooperation and ensures the ability to respond quickly to market changes.\n\nThe goods, which are manufactured by our customers, include shoe upper leather, upholstery, handbags, car upholstery as well as many other products.",
    properties: {
        "Sodium Sulphide": "Na2S – Yellow flakes with low Fe content.",
        "Sodium Hydrosulphide": "NaSH – Biege flakes",
        "Liming auxiliaries":
            "Products used for better de-hairing and reduction of Na2S usage.",
        "Formic acid 85% (Substitution)":
            "Green acidic combination product which substitutes Formic acid usage in pickling, dyeing and tanning processes."
    }
};

const ProductPage = ({ match }) => {
    // console.log(match.params.id);
    const [product, setProduct] = useState(null);
    document.title = (product && product.title) || "Products";

    useEffect(() => {
        (async () => {
            // const result = await fetch(`/products/${match.params.id}`)
            console.log(
                await fetch("http://jsonplaceholder.typicode.com/posts/1")
            );
            const result = tempProduct;
            setProduct(result);
        })();
    });

    if (!product) return <Loading />;
    return (
        <div className={`productPage container py-5`}>
            <div className={`imageWrapper mx-auto rounded mt-5`}>
                <img src={product.img} alt={product.title} />
            </div>
            <h2
                className="text-primary mb-5 mt-6 text-center h1"
                data-aos="flip-up"
                data-aos-duration="1100"
            >
                {product.title}
            </h2>
            <p
                style={{ whiteSpace: "pre-line" }}
                className="mb-5"
                data-aos="fade-right"
            >
                {product.text}
            </p>
            <div data-aos="fade-up">
                {Object.keys(product.properties).map((key, index) => {
                    return (
                        <div className="d-flex" key={index}>
                            <div
                                className="bg-primary text-white border-bottom text-break  px-4 py-3"
                                style={{ width: "30%", minWidth: "150px" }}
                            >
                                {key}
                            </div>
                            <div className=" w-100 border-bottom border-primary px-4 py-3">
                                {product.properties[key]}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="my-5" />
        </div>
    );
};

export default ProductPage;
