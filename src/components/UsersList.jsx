/* eslint-disable react/prop-types */

const UsersList = ({ users }) => {
  return (
    <>
      {users.length > 0 ? (
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className="d-flex px-2 py-1">
                  <div>
                    <img
                      src={user.image}
                      className="avatar avatar-sm me-3 border-radius-lg"
                      alt=""
                    />
                  </div>
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
                  {user.address.split(',')[user.address.split(',').length - 2]}
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
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <div className="text-center">
          <h2 className="text-warning"></h2>
        </div>
      )}
    </>
  );
};

export default UsersList;
