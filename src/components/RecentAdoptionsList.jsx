/* eslint-disable react/prop-types */
// import { adoptionPostsRecent as recentAdopts } from "../misc/posts";

const RecentAdoptionsList = ({ posts }) => {
  return (
    <>
      {posts.length > 0 ? (
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <div className="d-flex px-2">
                  <img
                    src={post.image}
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
                  {post.donor_name}
                </span>
              </td>
              <td className="text-center">
                <span
                  className={`badge badge-sm ${
                    post.adopted
                      ? "bg-gradient-success"
                      : "bg-gradient-secondary"
                  }`}
                >
                  {post.adopted ? "adopted" : "available"}
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
