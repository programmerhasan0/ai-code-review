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
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";

import "prismjs/components/prism-jsx";
import { useEffect, useState } from "react";

function App() {
    const [code, setCode] = useState(`function sum() {
    return a + b;
}
`);

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <main>
                <div className="left">
                    <div className="code">
                        <Editor
                            value={code}
                            onValueChange={(code) => setCode(code)}
                            highlight={(code) =>
                                Prism.highlight(
                                    code,
                                    Prism.languages.javascript,
                                    "javascript"
                                )
                            }
                            padding={10}
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
                    <div className="review">Review</div>
                </div>
                <div className="right"></div>
            </main>
        </>
    );
}

export default App;
