// components/FormComponent.js
"use client";
import axios from "axios";
import { useState } from "react";

const FormComponent = () => {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showProblems, setShowProblems] = useState(false);
    const [formData, setFormData] = useState({
        codeforcesHandle: "",
        minRating: 0,
        maxRating: 0,
        prevContests: 10,
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        const valid = await axios.get(
            `http://localhost:3000/api/cf-handle?handle=${formData.codeforcesHandle}`
        );
        if (!valid) {
            alert("Invalid Codeforces Handle");
            return;
        }
        const rating = valid.data.data.rating;
        if (formData.minRating === 0) {
            formData.minRating = rating - 100;
        }
        if (formData.maxRating === 0) {
            formData.maxRating = rating + 300;
        }
        await axios
            .get(
                `http://localhost:3000/api/cf-problem-sheet?handle=${formData.codeforcesHandle}&maxProblemRating=${formData.maxRating}&minProblemRating=${formData.minRating}&numberOfPreviousContests=${formData.prevContests}`
            )
            .then((res) => {
                console.log(res.data);
                setProblems(res.data.problems);
                setShowProblems(true);
                console.log(problems);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                alert("Error generating problem sheet");
            });
        setLoading(false);
    };
    return (
        <div className="mt-[100px] mb-[10px]">
            <p className="font-mono m-1 text-sx text-gray-400 text-wrap">
                The Competitive Programming Problem Generator helps users create tailored problem
                sheets based on their Codeforces handle, allowing for customization of problem
                ratings and consideration of past contests. This tool aims to optimize practice
                sessions by generating problem sets that align with the user&apos;s skill level and
                recent performance.
            </p>
            <form onSubmit={handleSubmit} className={`${showProblems ? "hidden" : "block"}`}>
                <div className="mt-2">
                    <div className="flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4">
                        <div className="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">
                            Codeforces Handle <span className="text-red-500">*</span>
                        </div>
                        <div className="flex-1 flex flex-col md:flex-row">
                            <div className="w-full flex-1 mx-2">
                                <div className="my-2 p-1 bg-white flex w-max border border-gray-200 rounded">
                                    <input
                                        required
                                        name="codeforcesHandle"
                                        placeholder="Codeforces Handle"
                                        value={formData.codeforcesHandle}
                                        onChange={handleChange}
                                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row pb-4 mb-4">
                        <div className="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">
                            Filters
                            <div className="text-xs font-normal leading-none text-gray-500 mb-2">
                                (Optional)
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full flex-1 mx-2">
                                    <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                        <input
                                            name="minRating"
                                            type="number"
                                            placeholder="Minimum Rating (Recommended: Your rating - 100)"
                                            onChange={handleChange}
                                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex-1 mx-2">
                                    <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                        <input
                                            name="maxRating"
                                            placeholder="Maximum Rating (Recommended: Your rating + 300)"
                                            type="number"
                                            onChange={handleChange}
                                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="m-2">
                                <div className="w-full flex-1">
                                    <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                        <input
                                            name="prevContests"
                                            placeholder="Number of previous contests to consider for more problems"
                                            onChange={handleChange}
                                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-64 mx-2 font-bold h-6 mt-3 text-gray-800"></div>
                        <div className="flex-1 flex flex-col md:flex-row">
                            <button
                                type="submit"
                                disabled={loading}
                                className="generateBTN text-sm mx-2 w-32 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-blue-700 hover:text-blue-100 bg-blue-100 text-blue-700 border duration-200 ease-in-out border-blue-600 transition">
                                {loading ? <div className="spinner"></div> : "Generate"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <div className={`${showProblems ? "block w-full overflow-x-auto" : "hidden"} `}>
                <table border={1} className="items-center bg-transparent w-full border ">
                    <thead>
                        <tr>
                            <th className="px-6 bg-blue-100 text-black align-middle border-2 border-solid border-gray-400 py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">
                                Problem Name
                            </th>
                            <th className="px-6 bg-blue-100 text-black align-middle border-2 border-solid border-gray-400 py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">
                                URL
                            </th>
                            <th className="px-6 bg-blue-100 text-black align-middle border-2 border-solid border-gray-400 py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">
                                Rating
                            </th>
                            <th className="px-6 bg-blue-100 text-black align-middle border-2 border-solid border-gray-400 py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">
                                Tags
                            </th>
                            <th className="px-6 bg-blue-100 text-black align-middle border-2 border-solid border-gray-400 py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">
                                Done
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {problems.map((problem: any) => (
                            <tr key={problem.name}>
                                <td className="border bg-blue-50 text-xs whitespace-nowrap p-4 text-left">
                                    {problem.name}
                                </td>
                                <td className="border text-xs whitespace-nowrap p-4 text-left underline">
                                    <a href={problem.URL} target="_blank" rel="noreferrer noopener">
                                        {problem.URL}
                                    </a>
                                </td>
                                <td className="border px-6 align-middle text-xs whitespace-nowrap p-4 text-left">
                                    {problem.rating}
                                </td>
                                <td className="border opacity-0 hover:opacity-100 px-6 align-middle text-xs whitespace-nowrap bg-green-200 p-4 text-left">
                                    {problem.tags.join(", ")}
                                </td>
                                <td className="border px-6 align-middle text-xs whitespace-nowrap p-4 text-left">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FormComponent;
