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

import "highlight.js/styles/github-dark.css";

import { useState } from "react";

import EditorArea from "./components/EditorArea.comp";
import ReviewArea from "./components/ReviewArea.comp";

function App() {
    const [code, setCode] = useState(`const add = () => a + b;`);
    const [review, setReview] = useState("");
    const [reviewLoading, setReviewLoading] = useState(false);

    const reviewCode = async () => {
        try {
            setReviewLoading(true);
            setReview("");
            const response = await axios.post(
                `https://ai-code-review-8bqm.onrender.com/ai/get-review`,
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
                    <EditorArea code={code} setCode={setCode} />
                    <div className="review" onClick={reviewCode}>
                        Review
                    </div>
                </div>
                <div className="right">
                    <ReviewArea review={review} reviewLoading={reviewLoading} />
                </div>
            </main>
        </>
    );
}

export default App;
