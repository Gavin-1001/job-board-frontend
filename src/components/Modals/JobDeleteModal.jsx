import {forwardRef, useImperativeHandle, useState} from "react";
import {Modal} from "react-bootstrap";


const JobDeleteModal = forwardRef((props, ref) => {
    const [show, setShow] = useState(false);

    useImperativeHandle(ref, () => ({
        showDeleteModal() {
            setShow(true);
        },
    }));

    const deleteJob = () => {
        props.onConfirmed();
        setShow(false);
    };

    return (
        <Modal show={show}>
            <div className="modal-header">
                <h5 className="modal-title">Delete Job?</h5>
                <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShow(false)}
                ></button>
            </div>

            <div className="modal-body">Are you sure to delete this employee?</div>

            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteJob()}
                >
                    Yes
                </button>
            </div>
        </Modal>
    );
});

export default JobDeleteModal;
