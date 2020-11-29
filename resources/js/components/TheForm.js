import React from "react";
import useForm from "../hooks/useForm";
import api from "../api";

function TheForm({ onUrlCreated }) {
    const [state, dispatch] = useForm();

    const handleSubmit = e => {
        e.preventDefault();

        dispatch({ type: "post" });

        if (!state.isValid) {
            dispatch({
                type: "error",
                payload: "Il link inserito non è valido."
            });
            return;
        }

        api.shortenUrl(state.url)
            .then(({ data: shortenedUrlDto }) => {
                onUrlCreated(shortenedUrlDto);
            })
            .catch(error => {
                dispatch({ type: "error", payload: error.message });
            });
    };

    return (
        <>
            <form className="form-inline" onSubmit={e => handleSubmit(e)}>
                <input
                    type="text"
                    className="form-control flex-fill mr-3"
                    id="url"
                    placeholder="Insert your link..."
                    required
                    value={state.url}
                    onChange={e =>
                        dispatch({ type: "typing", payload: e.target.value })
                    }
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={state.isLoading}
                >
                    Shorten
                </button>
            </form>
            {state.error && (
                <div className="alert alert-danger mt-3">{state.error}</div>
            )}
        </>
    );
}

export default TheForm;
