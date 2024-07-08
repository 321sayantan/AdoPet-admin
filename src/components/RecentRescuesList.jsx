/* eslint-disable react/prop-types */
// import { rescuePostsRecent as recentRescues } from "../misc/posts";

const RecentRescuesList = ({ posts }) => {
  return (
    <>
      {posts.length > 0 ? (
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <div className="d-flex px-2">
                  <img
                    src={post.images[0].image}
                    className="avatar avatar-sm rounded-circle me-2"
                    alt=""
                  />
                  <div className="my-auto">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">
                      {post.vet_category}
                    </h6>
                    <p className="text-danger font-weight-bold text-xs mt-1 mb-0">
                      {post.vet_health_status[0]}
                    </p>
                  </div>
                </div>
              </td>
              <td className="align-top text-center">
                <span className="me-2 text-xs text-info font-weight-bold">
                  {new Date(post.timestamp).getDate()}/
                  {new Date(post.timestamp).getMonth()}/
                  {new Date(post.timestamp).getFullYear()}
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

export default RecentRescuesList;
