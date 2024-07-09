import { users } from "../misc/userslist";

const UsersList = () => {
  return (
    <>
      {users.length > 0 ? (
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
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
                    <h6 className="mb-0 text-sm">{user.username}</h6>
                    <p className="text-xs text-secondary mb-0">{user.mail}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-xs font-weight-bold mb-0">{user.function}</p>
                <p className="text-xs text-secondary mb-0">
                  {user.address[user.address.length - 1]}
                </p>
              </td>
              <td className="align-middle text-center text-sm">
                <span
                  className={`badge badge-sm ${
                    user.status === "Registered"
                      ? "bg-gradient-success"
                      : "bg-gradient-secondary"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="align-middle text-center">
                <span className="text-secondary text-xs font-weight-bold">
                  {user.enrolled_on}
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
