import React from "react";

export function App() {
    return (
        <div className="text-3xl text-center relative flex justify-center min-h-screen items-center pt-0 bg-gray-700">
            <div>
                <div className="text-violet-500 mb-3">
                    <h1 className="font-bold">Hello world!</h1>
                    <h2>This template was created with</h2>
                </div>
                <div className="border border-violet-500 animate-pulse p-3">
                    <div>
                        <a
                            className="text-sky-400"
                            target={"_blank"}
                            href="https://tailwindcss.com/docs/installation"
                            rel="noreferrer"
                        >
                            Tailwind css
                        </a>
                    </div>
                    <div>
                        <a
                            className="text-green-300"
                            target={"_blank"}
                            href="https://chakra-ui.com/"
                            rel="noreferrer"
                        >
                            Chakra UI
                        </a>
                    </div>
                    <div>
                        <a
                            className="text-purple-500"
                            target={"_blank"}
                            href="https://heroicons.com/"
                            rel="noreferrer"
                        >
                            Heroicons
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
