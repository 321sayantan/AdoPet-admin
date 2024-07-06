import { adoptionPosts as adopts } from "../misc/posts";

const AdoptionsList = () => {
  return (
    <>
      {adopts.length > 0 ? (
        <tbody>
          {adopts.map((post) => (
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
                    <h6 className="mb-0 text-sm">{post.vet_breed}</h6>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-sm font-weight-bold mb-0">
                  {post.vet_category}
                </p>
              </td>
              <td>
                <span
                  className={`badge badge-sm ${
                    post.status === "available"
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

export default AdoptionsList;
