import React from "react";
import styled, { css } from "styled-components";

function OpaqueLayer({ visible }) {
  return <OpaqueLayerBlock visible={visible} />;
}

const OpaqueLayerBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(249, 249, 249, 0.85);
  z-index: 1;
`;

export default OpaqueLayer;
