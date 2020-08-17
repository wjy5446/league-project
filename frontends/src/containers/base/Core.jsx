import React, { useState } from "react";
import OpaqueLayer from "../../components/common/OpaqueLayer";
import AuthModalContainer from "../auth/AuthModalContainer";

function Core() {
  return (
    <div>
      <OpaqueLayer></OpaqueLayer>
      <AuthModalContainer></AuthModalContainer>
    </div>
  );
}

export default Core;
