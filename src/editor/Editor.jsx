import { useEffect } from "react";
import { contentRenderer, writerSchema } from './fast-writer/fast-writer'


export default function Editor() {
   

    return (
      <>
        <h1
          contentEditable="true"
          suppressContentEditableWarning
          autoFocus
          className="font-medium text-3xl mb-3"
        >
          Head title
        </h1>
        <div
          className="m-0"
        >
          {contentRenderer(writerSchema)}
        </div>
      </>
    );
}
