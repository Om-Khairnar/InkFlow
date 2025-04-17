"use client";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaList,
  FaListOl,
  FaCode,
  FaHighlighter,
} from "react-icons/fa"; 
import { Toggle } from "../ui/toggle";

import { Editor } from '@tiptap/react';

interface ToolBarProps {
  editor: Editor | null;
}

interface ToolbarOption {
  icon: React.ReactNode;
  onClick: () => void;
  pressed: boolean;
}

export default function ToolBar({ editor }: ToolBarProps) {
  if (!editor) return null;

  const Options: ToolbarOption[] = [
    {
      icon: <FaBold className="size-4" />,
      onClick: () => editor?.chain().focus().toggleBold().run(),
      pressed: editor?.isActive("bold") || false,
    },
    {
      icon: <FaItalic className="size-4" />,
      onClick: () => editor?.chain().focus().toggleItalic().run(),
      pressed: editor?.isActive("italic") || false,
    },
    {
      icon: <FaStrikethrough className="size-4" />,
      onClick: () => editor?.chain().focus().toggleStrike().run(),
      pressed: editor?.isActive("strike") || false,
    },
    {
      icon: <FaAlignLeft className="size-4" />,
      onClick: () => editor?.chain().focus().setTextAlign("left").run(),
      pressed: editor?.isActive({ textAlign: "left" }) || false,
    },
    {
      icon: <FaAlignCenter className="size-4" />,
      onClick: () => editor?.chain().focus().setTextAlign("center").run(),
      pressed: editor?.isActive({ textAlign: "center" }) || false,
    },
    {
      icon: <FaAlignRight className="size-4" />,
      onClick: () => editor?.chain().focus().setTextAlign("right").run(),
      pressed: editor?.isActive({ textAlign: "right" }) || false,
    },
    {
      icon: <FaList className="size-4" />,
      onClick: () => editor?.chain().focus().toggleBulletList().run(),
      pressed: editor?.isActive("bulletList") || false,
    },
    {
      icon: <FaListOl className="size-4" />,
      onClick: () => editor?.chain().focus().toggleOrderedList().run(),
      pressed: editor?.isActive("orderedList") || false,
    },
    {
      icon: <FaCode className="size-4" />,
      onClick: () => editor?.chain().focus().toggleCodeBlock().run(),
      pressed: editor?.isActive("code") || false,
    },
    {
      icon: <FaHighlighter className="size-4" />,
      onClick: () => editor?.chain().focus().toggleHighlight().run(),
      pressed: editor?.isActive("highlight") || false,
    }
  ];

  return (
    <div className="border rounded-md p-1.5 mb-1 space-x-1 sticky top-10 z-50">
      {Options.map((option, i) => (
        <Toggle
          key={i}
          size="sm"
          pressed={option.pressed}
          onPressedChange={option.onClick}
        >
          {option.icon}
        </Toggle>
      ))}
    </div>
  );
}
