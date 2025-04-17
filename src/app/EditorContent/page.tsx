import RichTextEditor from "@/components/editor/RichTextEditor";

export default function EditorPage() {
  return (
    <div className="container mx-auto p-4">
      <h1>Text Editor</h1>
      <RichTextEditor content="" onChange={() => {}} />
    </div>
  );
}