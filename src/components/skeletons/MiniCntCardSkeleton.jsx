import { Skeleton } from "@mui/material";

const MiniCntCardSkeleton = () => {
  return (
    <div className="card">
      <div className="card-header p-3 pt-2">
        <Skeleton
          className="icon-lg border-radius-xl mt-n4 position-absolute"
          height={100}
          sx={{ bgcolor: "var(--bs-gray-600)" }}
        />
        <div
          className="d-flex flex-column pt-1"
          style={{ alignItems: "flex-end" }}
        >
          <p className="text-sm mb-0">
            <Skeleton sx={{ bgcolor: "var(--bs-gray-600)" }} width={150} />
          </p>
          <h4 className="mb-0">
            <Skeleton sx={{ bgcolor: "var(--bs-gray-600)" }} width={100} />
          </h4>
        </div>
      </div>
      <hr className="dark horizontal my-0" />
      <div className="card-footer p-3">
        <p className="mb-0">
          <Skeleton
            sx={{ bgcolor: "var(--bs-gray-600)" }}
            width={200}
            height={30}
          />
        </p>
      </div>
    </div>
  );
};

export default MiniCntCardSkeleton;
