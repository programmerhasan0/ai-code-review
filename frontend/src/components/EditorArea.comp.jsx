/**
 *
 * Project Name : code-review (frontend)
 * Developer : Md Habibul Hasan
 * Developer Email : programmerhasan0@gmail.com
 * File name : EditorArea.comp.jsx
 * File description: This component represents the code editor area.
 * Date : 14/09/2025
 *
 */

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import Editor from "react-simple-code-editor";

const EditorArea = ({ code, setCode }) => {
    return (
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
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    height: "100%",
                    width: "100%",
                    color: "#f8f8f2",
                }}
            />
        </div>
    );
};

export default EditorArea;
