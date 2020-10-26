import React from "react";
import { getTimeDiff } from "../utils/timeDiffrence";
import { GiCctvCamera } from "react-icons/gi";
import { TiTags } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";

export default function Snapshots(props) {
  const { snapShots } = props;
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="table-borderless">
          <tr className="table-heading">
            <th scope="col"></th>
            <th scope="col">Device Id</th>
            <th scope="col">Last Activity</th>
            <th scope="col">Tags</th>
          </tr>
        </thead>
        <tbody>
          {snapShots?.map((shot, i) => (
            <tr key={i}>
              <th scope="row">
                <div className="d-flex align-items-center justify-content-start">
                  <input type="checkbox" />
                  <div className="thumbnail-wrap ml-3">
                    <img
                      src={shot.SnapshotSignedUrl}
                      alt={shot.DeviceID}
                      className="img-thumbnail border-0"
                    />
                  </div>
                  <span className="cctv">
                    <GiCctvCamera />
                  </span>
                </div>
              </th>
              <td className="align-middle deviceId">{shot.DeviceID}</td>
              <td className="align-middle color-grey">
                {getTimeDiff(shot.LastActivityTime)}
              </td>
              <td className="color-lg">
                <div className="tagList">
                  {shot.Tags?.map((tag, i) => (
                    <span key={i} className="mr-2">
                      <TiTags
                        style={{ marginRight: "0.2rem", color: "#ccc" }}
                      />
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td className="align-middle">
                <IoIosArrowForward />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
