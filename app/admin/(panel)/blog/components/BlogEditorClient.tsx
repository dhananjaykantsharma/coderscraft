"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";

type BlogEditorClientProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export default function BlogEditorClient({ value = "", onChange }: BlogEditorClientProps) {
  const [content, setContent] = useState(value);

  useEffect(() => {
    setContent(value);
  }, [value]);

  return (
    <CKEditor
      editor={ClassicEditor as any}
      data={content}
      onChange={(_event, editor) => {
        const data = editor.getData();
        if (data === content) return;
        setContent(data);
        onChange?.(data);
      }}
    />
  );
}
