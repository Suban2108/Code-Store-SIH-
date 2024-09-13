import React from 'react'

export default function Alert(props) {
    const Capitalise = (word) => {
    const str = word.charAt(0).toUpperCase();
    return str + word.slice(1);
    }
    return (
        props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Capitalise(props.Alert.type)}</strong>: {props.Alert.msg}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
    )
}
