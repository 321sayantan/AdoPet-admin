/* eslint-disable react/prop-types */
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { useState } from "react";

const RescueList = ({ rescues, onDelete }) => {
  const [open, setOpen] = useState(null);

  const closeModal = (id) => {
    onDelete(id);
    setOpen(null);
  };

  return (
    <>
      {rescues.length > 0 ? (
        <tbody>
          {rescues.map((post) => (
            <tr key={post._id}>
              <td>
                <div className="d-flex px-2">
                  <div>
                    <img
                      src={post.images[0].image}
                      className="avatar avatar-sm rounded-circle me-2"
                      alt="spotify"
                    />
                  </div>
                  <div className="my-auto">
                    <h6 className="mb-0 text-sm">{post.vet_category}</h6>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-sm font-weight-bold mb-0">
                  {post.vet_health_status.map((item, i) => (
                    <span key={i}>&nbsp;{item}&#44;</span>
                  ))}
                </p>
              </td>
              <td>
                <span
                  className={`badge badge-sm ${
                    post.rescued
                      ? "bg-gradient-success"
                      : "bg-gradient-secondary"
                  }`}
                >
                  {post.rescued ? "rescued" : "pending"}
                </span>
              </td>
              <td className="align-middle text-center">
                <span className="me-2 text-xs font-weight-bold">
                  {post.rescuer_name}
                </span>
              </td>
              <td className="align-middle">
                <div className="d-flex justify-content-around">
                  <button
                    type="button"
                    className="text-info font-weight-bold text-sm fs-5"
                    style={{ background: "none", border: "0", outline: "0" }}
                  >
                    Manage
                  </button>
                  <button
                    type="button"
                    className="text-primary font-weight-bold text-sm fs-5"
                    style={{ background: "none", border: "0", outline: "0" }}
                    onClick={() => setOpen(post._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <div className="text-center">
          <h2 className="text-warning"></h2>
        </div>
      )}

      <AnimatePresence>
        {open && (
          <Modal
            title="Fatal !"
            className="deletePost-confirm-modal"
            onClose={() => setOpen(null)}
          >
            <div className="modal-body py-3">
              <h5
                className="d-flex align-items-center"
                style={{ fontWeight: "400" }}
              >
                <i
                  className="material-icons opacity-10"
                  style={{ fontSize: "2.2rem", color: "#e17900" }}
                >
                  error
                </i>
                <span style={{ marginLeft: "0.5rem" }}>
                  Are you sure to delete this post?
                </span>
              </h5>

              <div
                className="modal-footer px-0"
                style={{ marginBottom: "-1rem" }}
              >
                <button
                  type="button"
                  className="btn text-secondary"
                  onClick={() => setOpen(null)}
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn text-danger"
                  onClick={() => closeModal(open)}
                >
                  Yes
                </button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default RescueList;
