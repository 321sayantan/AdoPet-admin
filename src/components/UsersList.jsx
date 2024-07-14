/* eslint-disable react/prop-types */
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { useState } from "react";

const UsersList = ({ users, onDelete }) => {
  const [open, setOpen] = useState(null);

  const closeModal = (id) => {
    onDelete(id);
    setOpen(null);
  };

  return (
    <>
      {users.length > 0 ? (
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className="d-flex px-2 py-1">
                  <div
                    className="avatar avatar-sm me-3 border-radius-lg"
                    style={{
                      background: `url(${user.image}) center center/cover`,
                    }}
                  />
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="mb-0 text-sm">{user.name}</h6>
                    <p className="text-xs text-secondary mb-0">{user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-xs font-weight-bold mb-0">
                  {user.is_volunteer ? "Volunteer" : "User"}
                </p>
                <p className="text-xs text-secondary mb-0">
                  {user.address ? user.address : '---'}
                </p>
              </td>
              <td className="align-middle text-center text-sm">
                <span
                  className={`badge badge-sm ${
                    user.address === ""
                      ? "bg-gradient-success"
                      : "bg-gradient-secondary"
                  }`}
                >
                  {user.address === "" ? "Not-registered" : "registered"}
                </span>
              </td>
              <td className="align-middle text-center">
                <span className="text-success text-xs font-weight-bold">
                  {new Date(user.timestamp).getDate()}/
                  {new Date(user.timestamp).getMonth()}/
                  {new Date(user.timestamp).getFullYear()}
                </span>
              </td>
              <td className="align-middle">
                <button
                  type="button"
                  className="text-primary font-weight-bold text-sm fs-5"
                  style={{ background: "none", border: "0", outline: "0" }}
                  onClick={() => setOpen(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          <tr className="text-center">
            <td colSpan={5}>
              <h2 className="mt-3 mb-3 text-warning">Nothing found!</h2>
            </td>
          </tr>
        </tbody>
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
                  Are you sure to remove this user?
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

export default UsersList;
