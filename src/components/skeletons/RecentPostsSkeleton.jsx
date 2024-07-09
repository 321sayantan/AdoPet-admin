import { Skeleton } from "@mui/material";
import { adoptionPostsRecent as recentPosts } from "../../misc/posts";

export const RecentAdoptionsSkeleton = () => {
  return (
    <tbody>
      {recentPosts.map((post) => (
        <tr key={post.id}>
          <td>
            <div className="d-flex px-2">
              <Skeleton
                sx={{ bgcolor: "var(--bs-gray-600)" }}
                height={180}
                variant="circular"
                className="avatar-sm me-2"
              />
              <div className="my-auto">
                <h6 className="mb-0 text-sm">
                  <Skeleton
                    sx={{ bgcolor: "var(--bs-gray-600)" }}
                    width={100}
                  />
                </h6>
              </div>
            </div>
          </td>
          <td>
            <p className="text-sm mb-0">
              <Skeleton width={60} sx={{ bgcolor: "var(--bs-gray-600)" }} />
            </p>
          </td>
          <td className="align-middle">
            <div className="d-flex justify-content-center">
              <Skeleton
                width={150}
                className="me-2 text-xs"
                sx={{ bgcolor: "var(--bs-gray-600)" }}
              />
            </div>
          </td>
          <td className="d-flex text-center justify-content-center">
            <Skeleton width={80} sx={{ bgcolor: "var(--bs-gray-600)" }} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export const RecentRescuesSkeleton = () => {
  return (
    <tbody>
      {recentPosts.map((post) => (
        <tr key={post.id}>
          <td>
            <div className="d-flex px-2">
              <Skeleton
                sx={{ bgcolor: "var(--bs-gray-600)", marginTop: "0.3rem" }}
                height={180}
                variant="circular"
                className="avatar-sm me-2"
              />
              <div className="my-auto">
                <h6 className="text-lg mb-0">
                  <Skeleton
                    sx={{ bgcolor: "var(--bs-gray-600)" }}
                    width={100}
                  />
                </h6>
                <p className="text-xs mb-0">
                  <Skeleton sx={{ bgcolor: "var(--bs-gray-600)" }} width={60} />
                </p>
              </div>
            </div>
          </td>
          <td className="align-top text-center">
            <Skeleton
              className="me-2 text-sm"
              sx={{ bgcolor: "var(--bs-gray-600)" }}
              width={60}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
