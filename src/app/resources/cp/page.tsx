import React from "react";

const page = () => {
    return (
        <div className="mt-[100px] mb-[10px] flex flex-wrap mx-2 ">
            <div className="flex items-center w-full lg:w-1/2">
                <div className="max-w-2xl mb-8">
                    <h1 className="text-3xl font-bold leading-snug tracking-tight text-blue-800 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight ">
                        Competitive <span className="text-black font-normal">Programming</span>
                    </h1>
                    <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-xl ">
                        Competitive programming is like a game; it challenges your problem-solving
                        skills, algorithmic thinking, and coding abilities in a fun and competitive
                        environment. To succeed, you need to understand the problem, plan your
                        solution using the right data structures and algorithms, implement and test
                        your code thoroughly, and continuously optimize and practice. Engage with
                        the community, participate in regular contests, and study advanced topics to
                        keep improving. Platforms: Codeforces, LeetCode, CodeChef, HackerRank,
                        AtCoder, TopCoder, and more.
                    </p>

                    <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                        <a
                            href="/resources/cp/generator"
                            className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                            Practice Now
                        </a>
                        <a
                            href="https://discord.gg/5kBVPWAu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-500 ">
                            <svg
                                role="img"
                                width="24"
                                height="24"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>Discord</title>
                                <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2763-3.68-.2763-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561 19.9117 19.9117 0 0 0 4.9952 2.5229.076.076 0 0 0 .0842-.0276c.3844-.5234.7308-1.0797 1.0258-1.6578a.076.076 0 0 0-.0416-.1057 13.1071 13.1071 0 0 1-1.872-0.9214.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.9204.0766.0766 0 0 0-.0407.1067c.311.5794.657.1344 1.0258 1.6578a.076.076 0 0 0 .0842.0276 19.9414 19.9414 0 0 0 5.0022-2.5229.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.157 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                            </svg>

                            <span> Join Our CP Community </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <div className="">
                    <iframe
                        src={"https://www.youtube.com/embed/N_AwKjw_7S8?autoplay=1&start=823&mute=0"}
                        width={"500"}
                        height={"300"}
                        className="md:w-[500px] md:h-[300px] w-[300px] h-[180px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
