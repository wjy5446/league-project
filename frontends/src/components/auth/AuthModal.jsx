import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

function AuthModal({ visible, onClose, children }) {
  return (
    <AuthModalBlock visible={visible}>
      <div className="wrapper">
        <div className="gray-block">
          <div className="welcome">환영합니다!</div>
        </div>
        <div className="white-block">
          <div className="exit-wrapper">
            <MdClose onClick={onClose} />
          </div>
          <div className="block-content">{children}</div>
        </div>
      </div>
    </AuthModalBlock>
  );
}

const AuthModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  .wrapper {
    width: 606px;
    height: 480px;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.5);
    display: flex;

    .gray-block {
      width: 216px;
      height: 100%;
      background-color: #f1f3f5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .welcome {
        font-size: 1.75rem;
        font-weight: 600;
        text-align: center;s
      }
    }

    .white-block {
      width: 390px;
      background-color: white;
      display: flex;
      flex-direction: column;
      padding: 1.5rem;

      .exit-wrapper {
        display: flex;
        justify-content: flex-end;
        font-size: 1.5rem;

        svg {
          cursor: pointer;
        }
      }

      .block-content {
      }
    }
  }
`;

export default AuthModal;
