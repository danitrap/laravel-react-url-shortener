import React, { useState } from "react";
import ReactDOM from "react-dom";
import TheForm from "./TheForm";
import TheShortenedUrl from "./TheShortenedUrl";

function App() {
    const [shortenedUrl, setShortenedUrl] = useState(null);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            Laravel + React URL Shortener
                        </div>

                        <div className="card-body">
                            {!shortenedUrl && (
                                <TheForm
                                    onUrlCreated={url => setShortenedUrl(url)}
                                />
                            )}
                            {shortenedUrl && (
                                <TheShortenedUrl
                                    url={shortenedUrl}
                                    reset={() => setShortenedUrl(null)}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
