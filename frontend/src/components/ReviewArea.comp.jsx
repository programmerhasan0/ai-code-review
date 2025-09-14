/**
 *
 * Project Name : code-review (frontend)
 * Developer : Md Habibul Hasan
 * Developer Email : programmerhasan0@gmail.com
 * File name : ReviewArea.comp.jsx
 * File description: This component represents the review area.
 * Date : 14/09/2025
 *
 */

import reHypeHighlight from "rehype-highlight";
import { BarLoader } from "react-spinners";
import Markdown from "react-markdown";

const ReviewArea = ({ review, reviewLoading }) => {
    return (
        <>
            {reviewLoading && (
                <div className="loading">
                    <BarLoader color="#fff" />
                </div>
            )}
            <Markdown rehypePlugins={[reHypeHighlight]}>{review}</Markdown>
        </>
    );
};

export default ReviewArea;
