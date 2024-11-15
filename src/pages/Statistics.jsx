import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Helmet } from 'react-helmet-async';
const Statistics = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/gadgets.json')
            .then(response => response.json())
            .then(data => {
                const topRatedProducts = data
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 10);
                setProducts(topRatedProducts);
            });
    }, []);

    return (
        <div className="flex flex-col items-center  min-h-screen">
            <Helmet>
                <title>Statistics ||  Gadget Heaven</title> 
            </Helmet>
            <div className="w-full  bg-white overflow-hidden">
             
                <div className="text-center bg-purple-600 text-white py-8">
                    <h1 className="text-4xl font-bold">Statistics</h1>
                    <p className="mt-5 max-w-3xl mx-auto text-center">
                        The Statistics page displays the top 10 highest-rated gadgets, using a bar chart to compare each product&apos;s Price, Total Sales, and Rating. This clear, interactive chart helps users quickly spot popular, high-quality items.
                    </p>
                </div>

             
                <div className="container mx-auto p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Statistics</h2>
                    <div className="w-full h-[400px] md:h-[500px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={products}
                                margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
                                barCategoryGap="20%"
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                                <XAxis
                                    dataKey="name"
                                    tick={{ fontSize: 12 }}
                                    interval={0}
                                    angle={-30}
                                    textAnchor="end"
                                    height={80}
                                />
                                <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
                                <Tooltip />
                                <Legend verticalAlign="bottom" align="center" height={40} iconType="circle" />

                                <Bar dataKey="price" fill="#8884d8" name="Price" />
                                <Bar dataKey="total" fill="#8b65d6" name="Total" />
                                <Bar dataKey="rating" fill="#ff7300" name="Rating" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
