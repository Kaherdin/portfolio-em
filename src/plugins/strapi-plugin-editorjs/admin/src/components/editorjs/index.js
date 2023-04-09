import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";
import PropTypes from "prop-types";
import EditorJs from "react-editor-js";
import requiredTools from "./requiredTools";
import customTools from "../../config/customTools";

import MediaLibAdapter from "../medialib/adapter";
import MediaLibComponent from "../medialib/component";
import { changeFunc, getToggleFunc } from "../medialib/utils";

const Editor = ({ onChange, name, value }) => {
  const [editorInstance, setEditorInstance] = useState();
  const [mediaLibBlockIndex, setMediaLibBlockIndex] = useState(-1);
  const [isMediaLibOpen, setIsMediaLibOpen] = useState(false);

  const mediaLibToggleFunc = useCallback(
    getToggleFunc({
      openStateSetter: setIsMediaLibOpen,
      indexStateSetter: setMediaLibBlockIndex,
    }),
    []
  );

  const handleMediaLibChange = useCallback(
    (data) => {
      changeFunc({
        indexStateSetter: setMediaLibBlockIndex,
        data,
        index: mediaLibBlockIndex,
        editor: editorInstance,
      });
      mediaLibToggleFunc();
    },
    [mediaLibBlockIndex, editorInstance]
  );

  const customImageTool = {
    mediaLib: {
      class: MediaLibAdapter,
      config: {
        mediaLibToggleFunc,
      },
    },
  };

  const handleValueChange = (newValue) => {
    if (!newValue.blocks.length) {
      newValue = null;
      onChange({ target: { name, value: newValue } });
    } else {
      onChange({ target: { name, value: JSON.stringify(newValue) } });
    }
  };

  useEffect(() => {
    if (editorInstance) {
      try {
        const parsedValue = JSON.parse(value);
        if (parsedValue.locale) {
          editorInstance.blocks.render(parsedValue);
        }
      } catch (error) {
        console.log(error, "error");
      }
    }
  }, [value]);

  console.log(customTools, "customTools");

  return (
    <>
      <div
        style={{
          border: `1px solid rgb(227, 233, 243)`,
          borderRadius: `2px`,
          marginTop: `4px`,
        }}
      >
        <EditorJs
          onReady={(api) => {
            // console.log(api, "api on ready");
            if (value && JSON.parse(value).blocks.length) {
              api.blocks.render(JSON.parse(value));
            }
            document?.querySelector('[data-tool="image"]')?.remove();
          }}
          onChange={(api, newData) => {
            console.log(api, newData);
            handleValueChange(newData);
          }}
          tools={{ ...customImageTool, ...customTools, ...requiredTools }}
          instanceRef={(instance) => setEditorInstance(instance)}
        />
      </div>
      <MediaLibComponent
        isOpen={isMediaLibOpen}
        onChange={handleMediaLibChange}
        onToggle={mediaLibToggleFunc}
      />
    </>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
