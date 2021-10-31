import Quill, { QuillOptionsStatic } from "quill";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

/**
 * wrapper vs container
 * @see https://stackoverflow.com/a/33404137/8537000
 */

const EditorContainer = styled.div`
  display: flex;
  gap: var(--kirin-gap-size-1x);
`;

const EditorWrapper = styled.div`
  flex: 1;
`;

const PreviewWrapper = styled.div`
  flex: 1;
  background-color: #fafafa;
`;

export const Editor = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      const options: QuillOptionsStatic = {
        theme: "snow",
        placeholder: "Write something...",
      };
      // eslint-disable-next-line no-new
      new Quill(editorRef.current, options);
    }
  }, []);

  return (
    <EditorContainer>
      <EditorWrapper>
        <div ref={editorRef} style={{ height: "300px" }} />
      </EditorWrapper>
      <PreviewWrapper>TODO</PreviewWrapper>
    </EditorContainer>
  );
};
