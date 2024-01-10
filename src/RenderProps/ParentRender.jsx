import React from "react";
import HocLikeImage from "../HOC/HocLikeImage";
import HocLikePost from "../HOC/HocLikePost";
import RenderProps from "./RenderProps";

function ParentRender() {
  return (
    <div>
        <h3>RenderProps</h3>
        <div className="render">
      <RenderProps
        render={(arg1, arg2) => (
          <HocLikeImage state={arg1} handleState={arg2} />
        )}
      />
      <RenderProps
        render={(arg1, arg2) => <HocLikePost state={arg1} handleState={arg2} />}
      />
      </div>
    </div>
  );
}

export default ParentRender;