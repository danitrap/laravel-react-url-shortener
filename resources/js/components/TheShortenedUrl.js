import React from "react";

function TheShortenedUrl({ url, reset }) {
    return (
        <div className="d-flex">
            <input
                type="text"
                className="form-control-lg text-center flex-fill mr-3"
                readOnly
                value={`${window.location.origin}/${url.stub}`}
            />
            <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => reset()}
            >
                Again
            </button>
        </div>
    );
}

export default TheShortenedUrl;
