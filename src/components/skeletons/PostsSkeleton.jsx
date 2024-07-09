import { Skeleton } from "@mui/material";
import {
  adoptionPosts as adopts,
  rescuePosts as rescues,
} from "../../misc/posts";

export const AdoptPostsSkeleton = () => {
  return (
    <tbody>
      {adopts.map((post) => (
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
          <td className="d-flex text-center">
            <Skeleton
              width={100}
              sx={{ bgcolor: "var(--bs-gray-600)" }}
              height={40}
            />
          </td>
          <td className="align-middle">
            <div className="d-flex justify-content-center">
              <Skeleton
                width={150}
                className="me-2 text-sm"
                sx={{ bgcolor: "var(--bs-gray-600)" }}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export const RescuePostsSkeleton = () => {
  return (
    <tbody>
      {rescues.map((post) => (
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
                <h6 className="mb-0 text-lg">
                  <Skeleton sx={{ bgcolor: "var(--bs-gray-600)" }} width={90} />
                </h6>
              </div>
            </div>
          </td>
          <td>
            <p className="text-sm mb-0">
              <Skeleton width={180} sx={{ bgcolor: "var(--bs-gray-600)" }} />
            </p>
          </td>
          <td className="d-flex text-center">
            <Skeleton
              width={100}
              sx={{ bgcolor: "var(--bs-gray-600)" }}
              height={40}
            />
          </td>
          <td className="align-middle">
            <div className="d-flex justify-content-center">
              <Skeleton
                width={150}
                className="me-2 text-sm"
                sx={{ bgcolor: "var(--bs-gray-600)" }}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
