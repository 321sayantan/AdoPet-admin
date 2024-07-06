import { rescuePosts as rescues } from "../misc/posts";

const RescueList = () => {
  return (
    <>
      {rescues.length > 0 ? (
        <tbody>
          {rescues.map((post) => (
            <tr key={post.id}>
              <td>
                <div className="d-flex px-2">
                  <div>
                    <img
                      src={post.vet_image}
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
                  {post.health_status.map((item, i) => (
                    <span key={i}>&nbsp;{item}&#44;</span>
                  ))}
                </p>
              </td>
              <td>
                <span
                  className={`badge badge-sm ${
                    post.status === "rescued"
                      ? "bg-gradient-success"
                      : "bg-gradient-secondary"
                  }`}
                >
                  {post.status}
                </span>
              </td>
              <td className="align-middle text-center">
                <span className="me-2 text-xs font-weight-bold">
                  {post.owner}
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
    </>
  );
};

export default RescueList;
