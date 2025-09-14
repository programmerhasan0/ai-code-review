/**
 *
 * Project Name : code-review (frontend)
 * Developer : Md Habibul Hasan
 * Developer Email : programmerhasan0@gmail.com
 * File name : App.jsx
 * File description: This will represent the homepage of the application
 * Date : 13/09/2025
 *
 */

import "./App.css";
import axios from "axios";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
import reHypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import { useState } from "react";
import { BarLoader } from "react-spinners";

function App() {
    const [code, setCode] = useState(`const add = () => a + b;`);
    const [review, setReview] = useState("");
    const [reviewLoading, setReviewLoading] = useState(false);

    const reviewCode = async () => {
        try {
            setReviewLoading(true);
            setReview("");
            const response = await axios.post(
                `http://localhost:3000/ai/get-review`,
                { code }
            );
            setReview(response.data);
            setReviewLoading(false);
        } catch (err) {
            if (err && err.status === 503) {
                setReviewLoading(false);
                setReview(
                    "Gemini is overloaded right now. Please try again later."
                );
            }
        }
    };

    return (
        <>
            <main>
                <div className="left">
                    <div className="code">
                        <Editor
                            value={code}
                            onValueChange={(code) => setCode(code)}
                            padding={10}
                            highlight={(code) =>
                                Prism.highlight(
                                    code,
                                    Prism.languages.javascript,
                                    "javascript"
                                )
                            }
                            style={{
                                fontFamily:
                                    '"Fira code", "Fira Mono", monospace',
                                fontSize: 16,
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                                height: "100%",
                                width: "100%",
                                color: "#f8f8f2",
                            }}
                        />
                    </div>
                    <div className="review" onClick={reviewCode}>
                        Review
                    </div>
                </div>
                <div className="right">
                    {reviewLoading && (
                        <div className="loading">
                            <BarLoader color="#fff" />
                        </div>
                    )}
                    <Markdown rehypePlugins={[reHypeHighlight]}>
                        {review}
                    </Markdown>
                </div>
            </main>
        </>
    );
}

export default App;
