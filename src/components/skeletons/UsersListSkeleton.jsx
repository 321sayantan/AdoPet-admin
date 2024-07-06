import { Skeleton } from "@mui/material";
import { users } from "../../misc/userslist";

const UsersListSkeleton = () => {
  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>
            <div className="d-flex px-2 py-1">
              <div>
                <Skeleton
                  sx={{ bgcolor: "var(--bs-gray-600)" }}
                  height={180}
                  variant="circular"
                  className="avatar-sm me-2"
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6 className="mb-0 text-sm">
                  <Skeleton sx={{ bgcolor: "var(--bs-gray-600)" }} width={70} />
                </h6>
                <p className="text-xs mb-0">
                  <Skeleton
                    sx={{ bgcolor: "var(--bs-gray-600)" }}
                    width={130}
                  />
                </p>
              </div>
            </div>
          </td>
          <td>
            <p className="text-xs font-weight-bold mb-0">
              <Skeleton sx={{ bgcolor: "var(--bs-gray-600)" }} width={30} />
            </p>
            <p className="text-xs text-secondary mb-0">
              <Skeleton sx={{ bgcolor: "var(--bs-gray-600)" }} width={70} />
            </p>
          </td>
          <td className="d-flex text-bottom justify-content-center">
            <Skeleton
              width={80}
              height={50}
              sx={{ bgcolor: "var(--bs-gray-600)" }}
            />
          </td>
          <td className="align-middle text-center">
            <div className="d-flex justify-content-center">
              <Skeleton
                className="text-lg"
                width={90}
                sx={{ bgcolor: "var(--bs-gray-600)" }}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UsersListSkeleton;
