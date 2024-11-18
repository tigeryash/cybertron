"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";

const modelList = [
  {
    company: "OpenAI",
    models: ["o1-preview", "o1-mini", " 4o", "4o-mini", "4-Turbo", "3.5-turbo"],
    icon: "",
  },
  {
    company: "Google Gemini",
    models: ["1.5-Flash", "1.5 Pro"],
    icon: "",
  },
  {
    company: "Anthropic",
    models: [
      "claude-3.5",
      "claude-3.5 Sonnet",
      "claude-3.5 Haiku",
      "claude-2.0",
    ],
    icon: "",
  },
];

const ModelChoice = () => {
  const [activeModel, setActiveModel] = useState<string>("GPT 4o");

  return (
    <Menubar className="w-20">
      <MenubarMenu>
        <MenubarTrigger>Models</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Active Model: {activeModel}</MenubarLabel>
          <MenubarSeparator />
          {modelList.map((model) => (
            <>
              <MenubarSub>
                <MenubarSubTrigger key={model.company}>
                  {model.company}
                </MenubarSubTrigger>
                <MenubarSubContent>
                  {model.models.map((model) => (
                    <MenubarItem
                      key={model}
                      onClick={() => {
                        setActiveModel(model);
                      }}
                    >
                      {model}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
            </>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ModelChoice;
