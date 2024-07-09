import { adoptionPostsRecent as recentAdopts } from "../misc/posts";

const RecentAdoptionsList = () => {
  return (
    <>
      {recentAdopts.length > 0 ? (
        <tbody>
          {recentAdopts.map((post) => (
            <tr key={post.id}>
              <td>
                <div className="d-flex px-2">
                  <img
                    src={post.vet_image}
                    className="avatar avatar-sm rounded-circle me-2"
                    alt=""
                  />
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
              <td className="align-middle text-center">
                <span className="me-2 text-xs font-weight-bold">
                  {post.owner}
                </span>
              </td>
              <td className="text-center">
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

export default RecentAdoptionsList;
